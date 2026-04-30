import { db } from "./db";
import { contactMessages } from "../drizzle/schema";
import { eq } from "drizzle-orm";

export type ContactMessageInput = {
  nom: string;
  fonction?: string;
  etablissement?: string;
  email: string;
  telephone?: string;
  message: string;
};

/**
 * Créer un nouveau message de contact
 */
export async function createContactMessage(input: ContactMessageInput) {
  const database = await db();
  
  const result = await database.insert(contactMessages).values({
    nom: input.nom,
    fonction: input.fonction,
    etablissement: input.etablissement,
    email: input.email,
    telephone: input.telephone,
    message: input.message,
    status: "new",
  });

  return result;
}

/**
 * Récupérer tous les messages de contact (admin only)
 */
export async function getAllContactMessages() {
  const database = await db();
  
  const messages = await database
    .select()
    .from(contactMessages)
    .orderBy(contactMessages.createdAt);

  return messages;
}

/**
 * Récupérer les messages non lus
 */
export async function getUnreadContactMessages() {
  const database = await db();
  
  const messages = await database
    .select()
    .from(contactMessages)
    .where(eq(contactMessages.status, "new"))
    .orderBy(contactMessages.createdAt);

  return messages;
}

/**
 * Marquer un message comme lu
 */
export async function markContactMessageAsRead(messageId: number) {
  const database = await db();
  
  const result = await database
    .update(contactMessages)
    .set({ status: "read" })
    .where(eq(contactMessages.id, messageId));

  return result;
}

/**
 * Marquer un message comme répondu
 */
export async function markContactMessageAsReplied(messageId: number) {
  const database = await db();
  
  const result = await database
    .update(contactMessages)
    .set({ status: "replied" })
    .where(eq(contactMessages.id, messageId));

  return result;
}

/**
 * Archiver un message
 */
export async function archiveContactMessage(messageId: number) {
  const database = await db();
  
  const result = await database
    .update(contactMessages)
    .set({ status: "archived" })
    .where(eq(contactMessages.id, messageId));

  return result;
}

/**
 * Supprimer un message
 */
export async function deleteContactMessage(messageId: number) {
  const database = await db();
  
  const result = await database
    .delete(contactMessages)
    .where(eq(contactMessages.id, messageId));

  return result;
}
