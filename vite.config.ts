import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite(), react(),VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      manifest: {
        short_name: 'موبایل بانک خاورمیانه',
        name: 'موبایل بانک خاورمیانه',
        description: 'همراه بانک خاورمیانه',
        icons: [
          {
            src: './icons/50.png',
            type: 'image/png',
            sizes: '48x48',
          },
          {
            src: './icons/72.png',
            type: 'image/png',
            sizes: '72x72',
          },
          {
            src: './icons/100.png',
            type: 'image/png',
            sizes: '96x96',
          },
          {
            src: './icons/144.png',
            type: 'image/png',
            sizes: '144x144',
          },
          {
            src: './icons/196.png',
            type: 'image/png',
            sizes: '192x192',
          },
          {
            src: './icons/512.png',
            type: 'image/png',
            sizes: '512x512',
          },

          {
            src: './icons/50.png',
            type: 'image/png',
            sizes: '48x48',
            purpose: 'maskable',
          },
          {
            src: './icons/72.png',
            type: 'image/png',
            sizes: '72x72',
            purpose: 'maskable',
          },
          {
            src: './icons/100.png',
            type: 'image/png',
            sizes: '96x96',
            purpose: 'maskable',
          },
          {
            src: './icons/144.png',
            type: 'image/png',
            sizes: '144x144',
            purpose: 'maskable',
          },
          {
            src: './icons/196.png',
            type: 'image/png',
            sizes: '192x192',
            purpose: 'maskable',
          },
          {
            src: './icons/512.png',
            type: 'image/png',
            sizes: '512x512',
            purpose: 'maskable',
          },
        ],
        start_url: '/?utm_source=homescreen&utm_medium=shortcut',
        scope: '/',
        display: 'standalone',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        orientation: 'portrait',
      },
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
    }),],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
