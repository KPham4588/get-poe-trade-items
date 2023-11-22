import * as dotenv from 'dotenv';
import type { Config } from 'drizzle-kit';
dotenv.config({ path: '.env.local' });

export default {
  schema: './mysql/schema',
  out: './mysql/migrations',
  driver: 'mysql2',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL,
  },
} satisfies Config;