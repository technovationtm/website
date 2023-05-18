import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import vitePluginPugI18n from 'vite-plugin-pug-i18n'

const baseRoute = '/website/'

export default defineConfig({
    resolve: {
        alias: {
            '~': resolve(__dirname, './node_modules')
        }
    },
    preview: {
        port: 8080
    },
    plugins: [
        vue(),
        vitePluginPugI18n({
            pages: {
                baseDir: resolve(__dirname, 'src/pages')
            },
            langs: {
                baseDir: resolve(__dirname, 'src/language')
            }
        })
    ],
    base: process.env.NODE_ENV === 'production' ? baseRoute : '/'
})
