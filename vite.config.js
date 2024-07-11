import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    cors: false,
    proxy: {
      '/api': {
        target: 'https://api.startupvalley.site',
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
});
