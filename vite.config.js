import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
         target: 'https://connectgpt-backend.azurewebsites.net', 
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        // replaces /api with '' in the request path
      },
    },
  },
})
