import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from "vite-plugin-pwa";
export default defineConfig({
  base: "/dist/",
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: "LoveU Festival",
        short_name: "LoveU",
        start_url: ".",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#f03228",
        description: "LoveU Festival App",
        icons: [
          {
            src: "/dist/imges/logo_white.svg",
            sizes: "192x192",
            type: "image/svg+xml"
          },
          {
            src: "/dist/imges/logo_white.svg",
            sizes: "512x512",
            type: "image/svg+xml"
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,jpg,jpeg,webp,ico,json}'],
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024, // 10 MB
      },
    })
  ],
});
