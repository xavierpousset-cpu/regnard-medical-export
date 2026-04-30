import { execSync } from "child_process";

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
    
    // En production, le code est compilé dans /app/dist/
    // On exécute la migration depuis /app (la racine du projet)
    const projectRoot = process.cwd();
    const migrateCommand = `npx drizzle-kit migrate --config drizzle.config.ts`;
    
    execSync(migrateCommand, {
      stdio: "inherit",
      cwd: projectRoot,
      env: { ...process.env },
    });

    console.log("[Migration] ✓ Migrations completed successfully");
  } catch (error) {
    console.error("[Migration] ✗ Failed to run migrations:", error);
    // Ne pas arrêter le serveur si les migrations échouent
    // (les tables peuvent déjà exister)
  }
}
