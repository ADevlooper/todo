
import { drizzle } from "drizzle-orm/node-postgres";
import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;

if (!process.env.SUPABASE_DB_URL) {
  throw new Error("❌ SUPABASE_DB_URL is missing in your .env");
}

const pool = new Pool({
  connectionString: process.env.SUPABASE_DB_URL,
  ssl: { rejectUnauthorized: false }, // Supabase requires SSL
});

export const db = drizzle(pool);
