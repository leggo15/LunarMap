// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/LunarMap/', // This is crucial for GitHub Pages
  plugins: [react()], // If you're using React, make sure this plugin is included
  build: {
    outDir: 'dist', // The default output directory
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      },
    },
  },
});
