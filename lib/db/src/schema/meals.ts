import {
  pgTable,
  text,
  serial,
  timestamp,
  real,
  integer,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";
import { foodsTable } from "./foods";

export const mealEntriesTable = pgTable("meal_entries", {
  id: serial("id").primaryKey(),
  foodId: integer("food_id")
    .notNull()
    .references(() => foodsTable.id),
  mealType: text("meal_type").notNull(),
  servings: real("servings").notNull().default(1),
  notes: text("notes"),
  loggedAt: timestamp("logged_at", { withTimezone: true }).notNull().defaultNow(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const insertMealEntrySchema = createInsertSchema(mealEntriesTable).omit({
  id: true,
  createdAt: true,
});
export type InsertMealEntry = z.infer<typeof insertMealEntrySchema>;
export type MealEntry = typeof mealEntriesTable.$inferSelect;
