import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure the correct output folder
  },
  server: {
    historyApiFallback: true, // Enables proper routing
  },
  preview: {
    historyApiFallback: true, // Ensures routing works in production
  },
});
