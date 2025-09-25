import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 👇 This ensures assets and routes work when deployed under /sigma_frontend/
  base: "/sigma_frontend/",
  server: {
    port: 5173, // optional: set a fixed port for local dev
    open: true, // optional: auto-open browser
  },
  build: {
    outDir: "dist", // default build output folder
  },
});
