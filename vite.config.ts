import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // three.js ships in the lazily loaded 3D crystal chunk (~260 kB gzip); the main bundle stays small
  build: { chunkSizeWarningLimit: 1100 },
})
