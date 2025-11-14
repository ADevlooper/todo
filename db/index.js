import { drizzle } from "drizzle-orm/node-postgres";
import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;
const pool = new Pool({
  connectionString: process.env.SUPABASE_DB_URL,
});

export const db = drizzle(pool);
