export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'fr',
    differentDomains: true,
    detectBrowserLanguage: false,
    strategy: 'no_prefix',
    baseUrl: 'https://thomas-philippot.dev',
    locales: [
        {
            code: 'fr',
            iso: 'fr-FR',
            name: 'Français',
            domain: 'thomas.philippot.dev'
        },
        {
            code: 'en',
            iso: 'en-US',
            name: 'English',
            domain: 'en.thomas.philippot.dev'
        }
    ],
    messages: {
        fr: {
            welcome: 'Bonjour, je m\'appelle Thomas',
            tagline: 'Je suis un développeur web Français de 25 ans.',
            projects: 'Mes projets'
        },
        en: {
            welcome: 'Hello my name is Thomas',
            tagline: 'I am a French web developer, 25 years old.',
            projects: 'My projects'
        }
    }
}))
