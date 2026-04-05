import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  // This ensures paths work correctly on Cloudflare
  base: "./", 
  plugins: [react()],
  resolve: {
    alias: {
      // Simplest way to handle the "@" alias
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  }
});
