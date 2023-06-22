<template>
    <div>
        <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
            <Head>
                <Title>Thomas Philippot</Title>
                <template v-for="link in head.link" :key="link.id">
                    <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang"/>
                </template>
                <template v-for="meta in head.meta" :key="meta.id">
                    <Meta :id="meta.id" :property="meta.property" :content="meta.content"/>
                </template>
            </Head>
            <body :class="$colorMode.value" class="bg-base text-text min-h-screen">
                <div class="container mx-auto max-w-[1300px]">
                    <nav class="w-full h-10 py-10 px-2">
                        <ul class="flex justify-end items-center">
                            <li>
                                <select v-model="locale" class="mx-6 bg-base font-bold text-xl focus:outline-none">
                                    <option value="fr">
                                        🇫🇷 Français
                                    </option>
                                    <option value="en">
                                        🇬🇧 English
                                    </option>
                                </select>
                            </li>
                            <li class="mx-6 font-bold text-xl">
                                <theme-switcher/>
                            </li>
                        </ul>
                    </nav>
                    <NuxtPage/>
                </div>
            </body>
        </Html>
    </div>
</template>

<script setup>

const {locale, locales} = useI18n()
const route = useRoute()
const { t } = useI18n()
const head = useLocaleHead({
    addDirAttribute: true,
    identifierAttribute: 'id',
    addSeoAttributes: true
})


</script>
