// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/LunarMap/", // This tells Vite to prefix all paths with /LunarMap/
  plugins: [react()],
});
