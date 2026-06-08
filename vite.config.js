import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Minification settings-ah innum agresive-ah maathikalam
    minify: 'terser', 
    terserOptions: {
      compress: {
        drop_console: true, // Console logs ellam remove aagum, speed increase aagum
        drop_debugger: true,
      },
    },
    chunkSizeWarningLimit: 600, // Ipo kuraichiruken, chunks correct-ah piriyutha nu paakka
    rollupOptions: {
      output: {
        // Ithu dynamic manual chunking. 
        // Node_modules-la irukka yella library-um thani thani file-ah piriyum.
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  }
})