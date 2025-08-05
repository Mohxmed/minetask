import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),

      // UI library aliases
      "@ui": path.resolve(__dirname, "./src/components/ui"),
      "@layouts": path.resolve(__dirname, "./src/components/layouts"),
      "@shared": path.resolve(__dirname, "./src/components/shared"),

      // Feature-specific aliases
      "@features": path.resolve(__dirname, "./src/features"),
      "@landing": path.resolve(__dirname, "./src/features/landing"),
      "@auth": path.resolve(__dirname, "./src/features/auth"),
      "@dashboard": path.resolve(__dirname, "./src/features/dashboard"),
      "@notif": path.resolve(__dirname, "./src/features/notifications"),
      "@projects": path.resolve(__dirname, "./src/features/projects"),
      "@tasks": path.resolve(__dirname, "./src/features/tasks"),
      "@time": path.resolve(__dirname, "./src/features/time-management"),

      // General aliases
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@content": path.resolve(__dirname, "./src/content"),
    },
  },
});
