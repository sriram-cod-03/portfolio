import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Warnings-ah limit panna
    rollupOptions: {
      output: {
        // Libraries ellam thani thani chunk-ah piriya ithu help pannum
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          icons: ['react-icons'],
          utils: ['react-hot-toast', '@emailjs/browser']
        }
      }
    }
  }
})