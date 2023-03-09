import {
    defineConfig
} from 'vite'
import pugPlugin from "vite-plugin-pug"
import path from 'path'
import {
    i18next
} from './src/i18next'

export default defineConfig({
    resolve: {
        alias: {
            '~': path.resolve(__dirname, './node_modules')
        }
    },
    server: {
        port: 8000
    },
    plugins: [
        pugPlugin({}, {
            __: i18next.t
        }),
        {
            name: 'custom-hmr',
            enforce: 'post',
            // HMR
            handleHotUpdate({file, server}) {
                if (file.endsWith('.json') || file.endsWith('.pug')) {
                    console.log('reloading custom files...');
                    server.ws.send({
                        type: 'full-reload',
                        path: '*'
                    })
                }
            }
        }
    ]
})
