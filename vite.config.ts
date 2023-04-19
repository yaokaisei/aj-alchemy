import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/aj-alchemy', // NOTE: GitHub Pagesに公開するため
  resolve: {
    alias: [{ find: '@src', replacement: '/src' }],
  },
  plugins: [react()],
});
