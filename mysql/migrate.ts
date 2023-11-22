import * as dotenv from 'dotenv';
import { migrate } from 'drizzle-orm/planetscale-serverless/migrator';
import { getDB } from '.';
dotenv.config({ path: '.env.local' });

async function runMigrate() {
  console.log('Running migrations...');
  const db = getDB();

  const start = Date.now();
  await migrate(db, { migrationsFolder: 'mysql/migrations' });
  const end = Date.now();

  console.log(`✅ Migrations completed in ${end - start}ms`);

  process.exit(0);
}

runMigrate().catch((err) => {
  console.error('❌ Migration failed');
  console.error(err);
  process.exit(1);
});