import { sql } from "@vercel/postgres";
// import { serial } from "drizzle-orm/mysql-core";
import { boolean, integer, pgTable, serial, text } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";

export const db = drizzle(sql);

export const ToTable = pgTable("todo12", {
  id: integer("id").primaryKey(),
  text: text("text").notNull(),
  completed: boolean("completed").default(false),
});

export const UserTable = pgTable("todouser", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
});
