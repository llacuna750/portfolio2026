import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages hosts this repository at /portfolio2026/ rather than /.
  base: '/portfolio2026/',
})
