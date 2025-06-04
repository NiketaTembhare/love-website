import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // Set root to project directory
  publicDir: 'public', // Specify public directory for static assets
  build: {
    outDir: 'dist', // Output directory for build
    rollupOptions: {
      input: './index.html', // Explicitly specify entry point
    },
  },
});