import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Avoid EBUSY on Windows with locked/special-named asset files
      ignored: ['**/public/assets/**'],
    },
  },
})
