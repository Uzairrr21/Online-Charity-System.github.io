// In your vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    hmr: {
      port: 5173, // Explicitly set HMR port
      host: 'localhost',
      protocol: 'ws'
    },
    watch: {
      usePolling: true // Helpful for some environments
    }
  }
});