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
            projects: 'Mes projets',
            experience: 'Expérience',
            today: "Aujourd'hui",
            'fullstack-dev': 'Développeur Fullstack',
            'mylab-exp': "En charge du développement et de la mise en production d'applications interne, " +
                "je conçois une base de données puis une API REST correspondant aux besoins, puis une interface utilisateur " +
                "(single page application). Je me charge également de la mise en production sur un serveur NGINX."
        },
        en: {
            welcome: 'Hello my name is Thomas',
            tagline: 'I am a French web developer, 25 years old.',
            projects: 'My projects',
            experience: 'Experience',
            today: 'today',
            'fullstack-dev': 'Fullstack Developer',
            'mylab-exp': "In charge of the development and shipping of internal applications, " +
                "I design a database then a REST API corresponding to the user needs, then a user interface" +
                "(single page application). I also take care of the app shipping on an NGINX server."
        }
    }
}))
