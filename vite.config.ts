import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build:{
    outDir: 'dist',
    base: '/projects/', // 👈 VERY IMPORTANT: use your repo name here
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
