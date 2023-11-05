// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    css: [
        "@/assets/styles/main.scss",
        "@/node_modules/remixicon/fonts/remixicon.css"
    ],
    build: {
        transpile: [],
    },
    vite: {
        define: {
            'process.env.DEBUG': true,
        },
        server: {
            hmr: {
                port: 3008
            }
        },
        css: {
            preprocessorOptions: {
                scss: {}
            }
        }

    },
    plugins: [
        {src: '~/plugins/aos.client.js', mode: 'client'},
    ],
    modules: [
        '@nuxt/content',
        ['@pinia/nuxt',
            {
                autoImports: [
                    'defineStore',
                    ['defineStore', 'definePiniaStore'],
                ],
            },],
    ],
})
