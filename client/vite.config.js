import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    proxy: {
      "/api": {
        target: "http://localhost:3030",
        changeOrigin: true,
        secure: true,
      },
      "/models": {
        target:
          "https://github.com/justadudewhohacks/face-api.js/blob/master/weights/ssd_mobilenetv1_model-weights_manifest.json", // Replace with the URL of your JSON repository
        changeOrigin: true,
        pathRewrite: {
          "^/models": "",
        },
        onProxyReq: (proxyReq) => {
          proxyReq.setHeader("Accept", "application/json");
        },
      },
    },
  },
});
