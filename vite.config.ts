import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [
      svgr({
         exportAsDefault: true,
         svgrOptions: {
            icon: true,
         },
      }),
      react(),
   ],
   server: {
      strictPort: true,
      open: true,
      host: '0.0.0.0',
   },
   resolve: {
      alias: [{ find: '@', replacement: '/src' }],
   },
   define: {
      __IS_DEV__: JSON.stringify(true),
      __API__: JSON.stringify('http://localhost:8000'),
      __PROJECT__: JSON.stringify('frontend'),
   },
});
