// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
    ],
    modules: [
        '@nuxt/content',
        'v-plausible'
    ],
    plausible: {
        init: {
            domain: 'ssvets.si',
            apiHost: 'https://plausible.sven.marela.team/',
            trackLocalhost: false
        },
        partytown: false,
    }
})
