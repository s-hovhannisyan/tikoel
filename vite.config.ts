import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs';
import path from 'path';

const sourcePath = path.join(__dirname, 'src');
const topLevelDirectories = fs
  .readdirSync(sourcePath)
  .filter((file: string) => fs.lstatSync(path.join(sourcePath, file)).isDirectory());

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    fs: {
      allow: ['src/assets'],
      strict: false,
    },
  },
  preview: {
    port: 3000,
  },
  build: {
    outDir: 'docs',
  },
  resolve: {
    alias: {
      ...topLevelDirectories.reduce((m: Record<string, string>, directory: string) => {
        const mapper = m;
        mapper[`${directory}`] = path.resolve(__dirname, 'src', directory);
        return mapper;
      }, {}),
    },
  },
})
