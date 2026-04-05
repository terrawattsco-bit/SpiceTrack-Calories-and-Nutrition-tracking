import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  // This handles relative paths for Cloudflare Pages
  base: "./", 
  plugins: [react()],
  resolve: {
    alias: {
      // Maps "@" to your src folder
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  build: {
    // Just 'dist' is safer; Vite will put it inside artifacts/afro-cal/dist
    outDir: "dist",
    emptyOutDir: true,
  }
});
