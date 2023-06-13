<template>
    <body :class="$colorMode.value" class="bg-base text-text min-h-screen">
    <div class="container mx-auto max-w-[1300px]">
        <nav class="w-full h-10 py-10 px-2">
            <div class="flex justify-end items-center">
                <ul class="flex">
                    <li class="mx-6 font-bold text-xl">
                        <nuxt-link to="/">Home</nuxt-link>
                    </li>
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
            </div>
        </nav>
        <NuxtPage/>
    </div>
    </body>
</template>

<script setup>

const {locale, locales} = useI18n()

</script>
