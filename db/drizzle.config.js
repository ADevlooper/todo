import 'dotenv/config';

/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./schema.js",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.SUPABASE_DB_URL,
  },
  extensions: ["js"],
};
