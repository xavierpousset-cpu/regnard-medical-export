import { execSync } from "child_process";
import path from "path";

/**
 * Exécuter les migrations Drizzle au démarrage du serveur
 * Cela garantit que les tables existent dans la base de données
 */
export async function runMigrations() {
  if (!process.env.DATABASE_URL) {
    console.warn("[Migration] DATABASE_URL not configured, skipping migrations");
    return;
  }

  try {
    console.log("[Migration] Running database migrations...");
    
    // Exécuter drizzle-kit migrate
    const projectRoot = path.resolve(__dirname, "../../");
    const migrateCommand = `cd ${projectRoot} && npx drizzle-kit migrate`;
    
    execSync(migrateCommand, {
      stdio: "inherit",
      env: { ...process.env },
    });

    console.log("[Migration] ✓ Migrations completed successfully");
  } catch (error) {
    console.error("[Migration] ✗ Failed to run migrations:", error);
    // Ne pas arrêter le serveur si les migrations échouent
    // (les tables peuvent déjà exister)
  }
}
