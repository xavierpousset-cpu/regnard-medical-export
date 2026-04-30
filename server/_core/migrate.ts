import { execSync } from "child_process";
import { fileURLToPath } from "url";
import { dirname } from "path";

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
    
    // Créer __dirname en ES modules
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    
    // Remonter de server/_core/ vers la racine du projet
    const projectRoot = dirname(dirname(__dirname));
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
