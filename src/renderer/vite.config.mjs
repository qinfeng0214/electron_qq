import path from "path";
import vuePlugin from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import AutoImport from 'unplugin-auto-import/vite';

/**
 * https://vitejs.dev/config
 */
export default defineConfig({
  root: path.join(__dirname),
  publicDir: "public",
  server: {
    port: 8080,
  },
  open: false,
  base: "/",
  build: {
    // outDir 的位置与 src/tsconfig.json 中的 outDir 息息相关
    outDir: path.join(__dirname, "../../build/renderer"),
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@views": path.join(__dirname, "views"),
      "@lib": path.join(__dirname, "../lib"),
      "@file-download": path.join(__dirname, "../lib/file-download"),
      "@utils": path.join(__dirname, "../lib/utils"),
    },
  },
  plugins: [
    vuePlugin(),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
  ],
});
