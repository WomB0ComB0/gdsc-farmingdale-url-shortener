import react from '@vitejs/plugin-react-swc';
import path from 'path';
import million from 'million/compiler';
import { VitePWA } from 'vite-plugin-pwa'

export default {
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          firebase: ["firebase/analytics", "firebase/app", "firebase/auth"],
          react: ["react", "react-dom", "react-router-dom"],
        },
      },
    },
  },
  plugins: [
    million.vite({
      auto: true,
    }),
    react(),

    VitePWA({
      workbox: {
        cleanupOutdatedCaches: true,
        globPatterns: ['**/*'],
      },
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      includeAssets: ['**/*'],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}
