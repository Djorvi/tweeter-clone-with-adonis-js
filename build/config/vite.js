import { defineConfig } from 'vite';
import adonisjs from '@adonisjs/vite/client';
export default defineConfig(({ mode }) => ({
    plugins: [
        adonisjs({
            entrypoints: [
                'resources/js/app.js',
                'resources/css/login.css'
            ],
            reload: [
                'resources/views/**/*.edge',
                'resources/css/**/*.css',
                'resources/js/**/*.js'
            ]
        })
    ],
    build: {
        manifest: true,
        outDir: 'public/assets',
        emptyOutDir: true
    },
    define: {
        'process.env.NODE_ENV': JSON.stringify(mode)
    }
}));
//# sourceMappingURL=vite.js.map