import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy";
import { resolve } from "path";
const browserslist = ["defaults", "not IE 11", "chrome > 48"];
const baseUrl = "http://localhost:8080";
// https://vitejs.dev/config/
export default defineConfig({
  base: baseUrl,
  build: {
    assetsDir: "static",
    sourcemap: true,
    rollupOptions: {
      output: {
        chunkFileNames: "static/js/[name]-[hash].js",
        entryFileNames: "static/js/[name]-[hash].js",
        assetFileNames: "static/[ext]/[name]-[hash].[ext]",
      },
    },
  },
  plugins: [
    vue(),
    legacy({
      targets: browserslist,
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
