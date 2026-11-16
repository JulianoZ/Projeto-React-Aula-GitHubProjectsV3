import { defineConfig } from 'vitest/config'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  test: {
    environment: 'node',
    globals: true,
    pool: 'threads',
    fileParallelism: false,
    isolate: false,
  },
})