import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from "vite-tsconfig-paths";
import path from 'path';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      'semantic-ui/site': path.resolve(__dirname, './src/semantic-ui/site'),
      '../../theme.config': path.resolve(
        __dirname,
        './src/semantic-ui/theme.config'
      ),
      '@': path.resolve(__dirname, 'src'), // for less imports
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        math: 'always',
        relativeUrls: true,
        javascriptEnabled: true,
      },
    },
  },
});
