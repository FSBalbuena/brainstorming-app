import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

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
});
