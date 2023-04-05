import VueAgile from 'vue-agile'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueAgile);
});