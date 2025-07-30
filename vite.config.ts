import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteCommonjs } from "@originjs/vite-plugin-commonjs";

export default defineConfig({
  plugins: [
    viteCommonjs(), // <- 放在 React plugin 前面
    react(),
  ],
  resolve: {
    // 優先使用 ESM 的 module 欄位，再 fallback 到 main（CJS）
    mainFields: ["module", "main"],
  },
  optimizeDeps: {
    // Dev 時也要預打包成 ESM
    include: ["@funtech-inc/use-shader-fx"],
  },
  ssr: {
    // SSR / hydration 階段也別把它當外部 CJS
    noExternal: ["@funtech-inc/use-shader-fx"],
  },
});
