// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // default to root so Vercel serves assets from /assets/...
  // if you ever need a custom base, set VITE_BASE_PATH before build (e.g. for GitHub Pages)
  base: process.env.VITE_BASE_PATH || '/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});