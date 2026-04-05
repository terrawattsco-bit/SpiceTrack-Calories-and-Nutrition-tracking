import {
  pgTable,
  text,
  serial,
  timestamp,
  real,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const goalsTable = pgTable("goals", {
  id: serial("id").primaryKey(),
  dailyCalories: real("daily_calories").notNull().default(2000),
  dailyProtein: real("daily_protein").notNull().default(50),
  dailyCarbs: real("daily_carbs").notNull().default(250),
  dailyFat: real("daily_fat").notNull().default(65),
  dailyFiber: real("daily_fiber").notNull().default(25),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

export const insertGoalsSchema = createInsertSchema(goalsTable).omit({
  id: true,
  updatedAt: true,
});
export type InsertGoals = z.infer<typeof insertGoalsSchema>;
export type Goals = typeof goalsTable.$inferSelect;
