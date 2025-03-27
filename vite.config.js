import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Matches CRA's output folder
  },
  server: {
    open: true,
    port: 3000, // Matches CRA's port
  },
  esbuild: {
    loader: 'jsx',
    include: /.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
