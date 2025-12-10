import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Default to root for hosting platforms like Vercel; keep override via VITE_BASE_PATH
  base : process.env.VITE_BASE_PATH || '/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});