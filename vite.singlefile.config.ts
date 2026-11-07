import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// Builds one self-contained HTML file (all images/fonts inlined) for previews
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  build: { outDir: 'dist-single', assetsInlineLimit: 100_000_000 },
})
