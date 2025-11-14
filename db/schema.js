import { pgTable, serial, text, boolean } from "drizzle-orm/pg-core";

export const todos = pgTable("todos", {
  id: serial("id").primaryKey(),
  task: text("task").notNull(),
  task_desc: text("task_desc"),
  status: boolean("status").default(false).notNull(),
});
