<template>
  <section class="w-full items-center flex pb-16 sm:pb-4 flex-col md:flex-row-reverse xs:px-5">
    <div class="mt-6 px-6 md:px-12 md:px-12 shrink-0">
      <img
          src="assets/avatar.png"
          alt="Thomas Profile avatar"
          class="rounded-full w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]"
      >
    </div>
    <div class="shrink text-center md:text-left p-2 mt-0 sm:mt-1 md:mt-40">
      <h1 class="text-6xl font-semibold my-8">{{ $t('welcome') }}</h1>
      <p class="text-2xl">{{ $t('tagline') }}</p>
      <div class="my-6">
        Links
      </div>
    </div>
  </section>
</template>

<script setup>

const colorMode = useColorMode()

</script>

<style scoped>

</style>
