import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { z } from "zod";
import { createQuoteRequest, getQuoteRequests, getAllUsers, updateUserRole, deleteUser, createForumTopic, getForumTopics, getForumTopicById, createForumPost, getForumPostsByTopic, deleteForumPost, deleteForumTopic } from "./db";
import { notifyOwner } from "./_core/notification";
import { TRPCError } from "@trpc/server";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  quotes: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(1),
          function: z.string().min(1),
          establishment: z.string().min(1),
          structureType: z.string().min(1),
          email: z.string().email(),
          phone: z.string().min(1),
          estimatedNeed: z.string().optional(),
          message: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        const result = await createQuoteRequest(input);
        
        // Notifier le proprietaire avec gestion d'erreur
        try {
          await notifyOwner({
            title: "Nouvelle demande de devis",
            content: `Nouvelle demande de ${input.function} de ${input.establishment}\n\nNom: ${input.name}\nEmail: ${input.email}\n\nMessage: ${input.message || "Aucun message"}`,
          });
        } catch (error) {
          console.error("Erreur notification:", error);
        }
        
        return { success: true, id: (result as any).insertId || 0 };
      }),
    list: protectedProcedure.query(async ({ ctx }) => {
      if (ctx.user.role !== 'admin' && ctx.user.role !== 'superadmin') {
        throw new TRPCError({ code: 'FORBIDDEN', message: 'Admin access required' });
      }
      return await getQuoteRequests();
    }),
  }),

  admin: router({
    listUsers: protectedProcedure.query(async ({ ctx }) => {
      if (ctx.user.role !== 'superadmin') {
        throw new TRPCError({ code: 'FORBIDDEN', message: 'Superadmin access required' });
      }
      return await getAllUsers();
    }),
    updateUserRole: protectedProcedure
      .input(
        z.object({
          userId: z.number(),
          role: z.enum(['user', 'admin', 'superadmin', 'moderator']),
        })
      )
      .mutation(async ({ ctx, input }) => {
        if (ctx.user.role !== 'superadmin' && ctx.user.role !== 'admin') {
          throw new TRPCError({ code: 'FORBIDDEN', message: 'Admin access required' });
        }
        await updateUserRole(input.userId, input.role);
        return { success: true };
      }),
    deleteUser: protectedProcedure
      .input(z.object({ userId: z.number() }))
      .mutation(async ({ ctx, input }) => {
        if (ctx.user.role !== 'superadmin') {
          throw new TRPCError({ code: 'FORBIDDEN', message: 'Superadmin access required' });
        }
        await deleteUser(input.userId);
        return { success: true };
      }),
  }),

  forum: router({
    getTopics: publicProcedure.query(async () => {
      return await getForumTopics();
    }),
    getTopic: publicProcedure
      .input(z.object({ topicId: z.number() }))
      .query(async ({ input }) => {
        return await getForumTopicById(input.topicId);
      }),
    getPosts: publicProcedure
      .input(z.object({ topicId: z.number() }))
      .query(async ({ input }) => {
        return await getForumPostsByTopic(input.topicId);
      }),
    createTopic: protectedProcedure
      .input(
        z.object({
          title: z.string().min(1),
          description: z.string().optional(),
        })
      )
      .mutation(async ({ ctx, input }) => {
        if (!ctx.user) {
          throw new TRPCError({ code: 'UNAUTHORIZED', message: 'User not authenticated' });
        }
        const result = await createForumTopic({
          title: input.title,
          description: input.description,
          createdBy: ctx.user.id,
        });
        return { success: true, id: (result as any).insertId || 0 };
      }),
    createPost: protectedProcedure
      .input(
        z.object({
          topicId: z.number(),
          content: z.string().min(1),
        })
      )
      .mutation(async ({ ctx, input }) => {
        if (!ctx.user) {
          throw new TRPCError({ code: 'UNAUTHORIZED', message: 'User not authenticated' });
        }
        const result = await createForumPost({
          topicId: input.topicId,
          userId: ctx.user.id,
          content: input.content,
        });
        return { success: true, id: (result as any).insertId || 0 };
      }),
    deletePost: protectedProcedure
      .input(z.object({ postId: z.number() }))
      .mutation(async ({ ctx, input }) => {
        if (ctx.user.role !== 'moderator' && ctx.user.role !== 'admin' && ctx.user.role !== 'superadmin') {
          throw new TRPCError({ code: 'FORBIDDEN', message: 'Moderator access required' });
        }
        await deleteForumPost(input.postId);
        return { success: true };
      }),
    deleteTopic: protectedProcedure
      .input(z.object({ topicId: z.number() }))
      .mutation(async ({ ctx, input }) => {
        if (ctx.user.role !== 'admin' && ctx.user.role !== 'superadmin') {
          throw new TRPCError({ code: 'FORBIDDEN', message: 'Admin access required' });
        }
        await deleteForumTopic(input.topicId);
        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
