import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  // This tells Vite exactly where your files live
  root: path.resolve(import.meta.dirname),
  base: "./", 
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  build: {
    // This puts the output 'dist' folder in the right place
    outDir: path.resolve(import.meta.dirname, "../../dist"),
    emptyOutDir: true,
  }
});
