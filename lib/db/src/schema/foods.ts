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

export const foodsTable = pgTable("foods", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  localName: text("local_name"),
  description: text("description"),
  region: text("region").notNull(),
  category: text("category").notNull(),
  servingSize: real("serving_size").notNull(),
  servingUnit: text("serving_unit").notNull(),
  calories: real("calories").notNull(),
  protein: real("protein").notNull(),
  carbs: real("carbs").notNull(),
  fat: real("fat").notNull(),
  fiber: real("fiber"),
  sugar: real("sugar"),
  sodium: real("sodium"),
  imageUrl: text("image_url"),
  tags: text("tags").array().notNull().default([]),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const insertFoodSchema = createInsertSchema(foodsTable).omit({
  id: true,
  createdAt: true,
});
export type InsertFood = z.infer<typeof insertFoodSchema>;
export type Food = typeof foodsTable.$inferSelect;
