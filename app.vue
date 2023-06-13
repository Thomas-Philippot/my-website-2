<template>
  <body :class="$colorMode.value" class="bg-base text-text">
    <div class="container mx-auto max-w-[1300px]">
      <nav class="w-full h-10 py-10 px-2">
        <div class="flex justify-end items-center">
          <ul class="flex">
            <li class="mx-6 font-bold text-xl"><nuxt-link to="/" >Home</nuxt-link></li>
            <li>
              <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
            </li>
            <li class="mx-6 font-bold text-xl mt-1"><theme-switcher /></li>
          </ul>
        </div>
      </nav>
      <NuxtPage />
    </div>
  </body>
</template>

<script setup>

</script>
