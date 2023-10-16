import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
    base: '',
    server: {
      open: true,
      port: 3000, 
    },
    plugins: [
      svgr(),
      react({
        jsxImportSource: '@emotion/react',
        babel: {
          plugins: ['@emotion/babel-plugin'],
        },
      }),
      viteTsconfigPaths()
    ],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom'],
            vendor: ['lodash', 'moment'],
          },
        },
      }
    }
})