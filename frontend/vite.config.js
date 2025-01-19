import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import js from '@eslint/js'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:5001', // Forward requests to the backend server
    },
  },
  esbuild: {
    // Set correct loader for JavaScript files
    loader: 'jsx', // Use 'jsx' loader for JSX files (React specific)
  },
  plugins: [
    react()
  ],
  build: {
    outDir: 'dist', // Output directory
    rollupOptions: {
      external: ['mock-aws-s3', 'aws-sdk', 'nock', '@mapbox/node-pre-gyp'],
      input: './index.html', // Ensure this is correct
    }
  },
  optimizeDeps: {
    exclude: ['@mapbox/node-pre-gyp'], // Ensure dependencies that are problematic are excluded
  },
  root: '.', // Default is the current directory
})
