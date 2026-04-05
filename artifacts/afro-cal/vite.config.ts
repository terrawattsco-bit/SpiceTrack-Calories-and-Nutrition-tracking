import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  // Tells Cloudflare to look in the current folder
  base: "./", 
  plugins: [react()],
  resolve: {
    alias: {
      // Simplest way to find your source files
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  build: {
    // Tells Cloudflare exactly where the finished files go
    outDir: "dist",
    emptyOutDir: true,
  }
});
