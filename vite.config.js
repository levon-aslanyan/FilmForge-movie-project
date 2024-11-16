import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: "./postcss.config.js", // Убедитесь, что PostCSS настроен
  },
  resolve: {
    alias: {
      "@": "/src", // Настройте пути, если нужно
    },
  },
});
