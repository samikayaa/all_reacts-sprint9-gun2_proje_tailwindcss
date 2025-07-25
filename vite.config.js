import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss(),],
  test: {
    globals: true,
    environment: 'jsdom',
    reporters: ['json', 'verbose'],
    outputFile: './resultz.json',
  },
});
