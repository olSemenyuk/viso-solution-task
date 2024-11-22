import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import * as path from 'node:path';
import Terminal from 'vite-plugin-terminal';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
  }
});
