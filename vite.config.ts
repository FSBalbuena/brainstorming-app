import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/

/** 
 * import path from 'path';
 * resolve: {
    alias: {
      'semantic-ui/site': path.resolve(__dirname, './src/semantic-ui/site'),
      '../../theme.config': path.resolve(
        __dirname,
        './src/semantic-ui/theme.config'
      ),
    },
  },
 */
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
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
