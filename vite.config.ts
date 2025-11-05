import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          // React 核心庫
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          // TanStack 相關庫
          "tanstack-vendor": [
            "@tanstack/react-query",
            "@tanstack/react-table",
            "@tanstack/react-virtual",
          ],
          // Supabase 相關庫
          "supabase-vendor": [
            "@supabase/supabase-js",
            "@supabase/auth-ui-react",
            "@supabase/auth-ui-shared",
          ],
          // 圖表庫
          "charts-vendor": ["recharts"],
          // UI 工具庫
          "ui-vendor": [
            "lucide-react",
            "class-variance-authority",
            "clsx",
            "tailwind-merge",
          ],
        },
      },
    },
  },
  base: "/",
});
