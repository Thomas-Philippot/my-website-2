// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    css: [
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],
    modules: [
        '@nuxtjs/color-mode',
        '@nuxtjs/i18n',
        '@nuxtjs/tailwindcss'
    ],
    colorMode: {
        classSuffix: '',
        preference: 'latte',
    },
    i18n: {
        vueI18n: './i18n.config.ts'
    }
})
