import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.js'),
      name: 'DatePickerReact',
      fileName: (format) => `DatePickerReact.${format}.js`
    },
    rollupOptions: {
      // Make sure to externalize deps that shouldn't be bundled into your library
      external: ['react', 'react-dom'],
      output: {
        exports: 'named',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})
