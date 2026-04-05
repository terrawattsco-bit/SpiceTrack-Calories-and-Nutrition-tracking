import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  // This tells Vite that the project is in the current folder
  root: "./",
  base: "./", 
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  build: {
    // This tells Vite to put the 'dist' folder inside this subfolder
    outDir: "dist",
    emptyOutDir: true,
  }
});
