import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api" : { // jitni bhi req /api se chalu hongi unlo localhost:3000 pe forward kar dega        
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false, // http also allowed
      }
    }
  }
})
