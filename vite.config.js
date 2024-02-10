import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",

  plugins: [react()],
  preview: {
    port: 8080,
    strictPort: true,
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://backend-connectgpt.azurewebsites.net',
        changeOrigin: true,
        pathRewrite: {'^/api': '/'}
      },
    },
    port: 8080,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:8080",
  },
});
