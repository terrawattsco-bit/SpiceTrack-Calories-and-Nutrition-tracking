import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  // This ensures paths work correctly on Cloudflare
  base: "./", 
  plugins: [react()],
  resolve: {
    alias: {
      // We changed "__dirname" to "import.meta.dirname"
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  // Cloudflare ignores this, but it's fine to keep for local testing
  server: {
    port: 3000,
    host: "0.0.0.0",
  }
});
