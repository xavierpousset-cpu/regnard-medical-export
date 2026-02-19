import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { z } from "zod";
import { createQuoteRequest, getQuoteRequests } from "./db";
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
        
        // Notifier le proprietaire
        await notifyOwner({
          title: "Nouvelle demande de devis",
          content: `Nouvelle demande de ${input.function} de ${input.establishment}\n\nNom: ${input.name}\nEmail: ${input.email}\nTelephone: ${input.phone}\n\nMessage: ${input.message || "Aucun message"}`,
        });
        
        return { success: true, id: (result as any).insertId || 0 };
      }),
    list: protectedProcedure.query(async ({ ctx }) => {
      if (ctx.user.role !== 'admin') {
        throw new TRPCError({ code: 'FORBIDDEN', message: 'Admin access required' });
      }
      return await getQuoteRequests();
    }),
  }),
});

export type AppRouter = typeof appRouter;
