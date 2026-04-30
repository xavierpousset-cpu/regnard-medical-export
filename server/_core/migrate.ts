import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function runMigrations() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    console.warn("[Migration] DATABASE_URL not set, skipping migrations.");
    return;
  }

  console.log("[Migration] Running database migrations...");
  const client = postgres(databaseUrl, { max: 1 });
  const db = drizzle(client);

  try {
    // Le dossier drizzle/ est copié à la racine du projet lors du build
    const migrationsFolder = path.resolve(process.cwd(), "drizzle");
    await migrate(db, { migrationsFolder });
    console.log("[Migration] ✓ Migrations completed successfully.");
  } catch (error) {
    console.error("[Migration] ✗ Failed:", error);
    throw error;
  } finally {
    await client.end();
  }
}
