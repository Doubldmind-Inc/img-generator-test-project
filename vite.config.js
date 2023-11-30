import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      "/api/tool": {
        target: "",
        secure: true,
        changeOrigin: true,
        rewrite: (path) => path,
      },
    },
  },
  define: {
    "process.env": process.env,
  },
});
