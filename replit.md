# AfroCal — African & Caribbean Nutrition Tracker

## Overview

AfroCal is an AI-powered nutrition tracking app focused exclusively on African and Caribbean cuisine. Similar to Cal.AI, it features food photo recognition via GPT-4 Vision, a rich database of 30+ African/Caribbean dishes, daily calorie and macro tracking, weekly progress charts, and personalized nutrition goals.

## Architecture

pnpm workspace monorepo using TypeScript.

### Artifacts
- **afro-cal** (`/`) — React + Vite frontend, mobile-first nutrition tracker
- **api-server** (`/api`) — Express 5 REST API backend

### Shared Libraries
- `lib/api-spec` — OpenAPI spec (source of truth)
- `lib/api-client-react` — Generated React Query hooks (via Orval)
- `lib/api-zod` — Generated Zod validation schemas (via Orval)
- `lib/db` — Drizzle ORM + PostgreSQL schema
- `lib/integrations-openai-ai-server` — OpenAI integration for AI food analysis

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **Frontend**: React + Vite + Tailwind CSS + Wouter routing
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **AI**: OpenAI GPT (via Replit AI Integrations — no API key needed)
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Charts**: Recharts
- **Build**: esbuild (CJS bundle)

## Database Schema

- **foods** — African & Caribbean food database (name, local name, region, category, macros, etc.)
- **meal_entries** — User meal log entries (food_id, meal_type, servings, logged_at)
- **goals** — User daily nutrition goals (calories, protein, carbs, fat, fiber)

## API Endpoints

- `GET /api/foods` — List/search foods (q, region, category filters)
- `GET /api/foods/popular` — Popular foods
- `GET /api/foods/:id` — Get single food
- `GET/POST/PATCH/DELETE /api/meals` — Meal logging CRUD
- `GET /api/nutrition/daily` — Daily nutrition summary with totals
- `GET /api/nutrition/weekly` — 7-day nutrition data for charts
- `GET /api/nutrition/streaks` — Tracking streaks and top foods
- `GET/PUT /api/goals` — User nutrition goals
- `POST /api/ai/analyze-food` — AI food photo analysis (base64 image)
- `GET /api/ai/suggest-foods` — AI-powered food suggestions

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

## Features

- **Dashboard** — Calorie ring, macro rings, streak stats, today's meals grouped by meal type
- **Food Log** — Searchable food database with region/category filters, meal logging modal
- **AI Scanner** — Photo upload + AI dish identification and nutritional analysis
- **Progress** — Weekly calorie bar chart, protein line chart, weekly averages, top foods
- **Goals** — Preset goal templates + custom sliders for all macros

## Design

- Warm terracotta primary, forest green secondary, turmeric gold accent
- Google Fonts: Fraunces (serif headings) + Plus Jakarta Sans (body)
- Mobile-first layout (max-w-md) with bottom navigation
