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
        strategy: 'no_prefix',
        baseUrl: 'https://thomas-philippot.dev' || 'localhost:3000',
        defaultLocale: 'fr',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root',  // recommended
        },
        langDir: 'locales',
        locales: [
            {
                code: 'fr',
                iso: 'fr-FR',
                name: 'Français',
                file: 'fr-FR.json'
            },
            {
                code: 'en',
                iso: 'en-US',
                name: 'English',
                file: 'en-US.json'
            }
        ],
    }
})
