import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    base: './',
    build: {
        outDir: path.resolve(__dirname, 'dist'),
        assetsDir: 'assets',
        rollupOptions: {
            output: {
                assetFileNames: 'assets/[name].[hash][extname]',
            },
        },
    },
});
