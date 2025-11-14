CREATE TABLE "todos" (
	"id" serial PRIMARY KEY NOT NULL,
	"task" text NOT NULL,
	"task_desc" text,
	"status" boolean DEFAULT false NOT NULL
);
