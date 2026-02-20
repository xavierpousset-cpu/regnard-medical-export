import { relations } from "drizzle-orm";
import { users, forumTopics, forumPosts } from "./schema";

/**
 * Relations between tables for referential integrity
 */

// User relations
export const usersRelations = relations(users, ({ many }) => ({
  forumTopics: many(forumTopics),
  forumPosts: many(forumPosts),
}));

// Forum topic relations
export const forumTopicsRelations = relations(forumTopics, ({ one, many }) => ({
  creator: one(users, {
    fields: [forumTopics.createdBy],
    references: [users.id],
  }),
  posts: many(forumPosts),
}));

// Forum post relations
export const forumPostsRelations = relations(forumPosts, ({ one }) => ({
  topic: one(forumTopics, {
    fields: [forumPosts.topicId],
    references: [forumTopics.id],
  }),
  author: one(users, {
    fields: [forumPosts.userId],
    references: [users.id],
  }),
}));
