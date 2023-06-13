<template>
  <section class="w-full flex items-center justify-between pb-16 sm:pb-4 flex-col md:flex-row-reverse xs:px-5">
    <div class="mt-6 px-6 md:px-12 md:px-12 shrink-0">
      <img
          src="assets/avatar.png"
          alt="Thomas Profile avatar"
          class="rounded-full w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]"
      >
    </div>
    <div class="shrink text-center md:text-left p-2 mt-0 sm:mt-1 md:mt-40">
      <h1 class="text-6xl font-semibold my-8 text-mauve">{{ $t('welcome') }}</h1>
      <p class="text-2xl">{{ $t('tagline') }}</p>
      <div class="my-6">
          <ul class="flex justify-center md:justify-start">
              <li class="text-3xl font-semibold mx-2 hover:text-text/70">
                  <a href="https://github.com/thomas-philippot">
                      <font-awesome-icon icon="fab fa-github" />
                  </a>
              </li>
              <li class="text-3xl font-semibold mx-2 hover:text-mauve">
                  <a href="https://piaille.fr/@adewale">
                      <font-awesome-icon icon="fab fa-mastodon" />
                  </a>
              </li>
              <li class="text-3xl font-semibold mx-2 hover:text-text/70">
                  <a href="https://dev.to/thomas_ph35">
                      <font-awesome-icon icon="fab fa-dev" />
                  </a>
              </li>
              <li class="text-3xl font-semibold mx-2 hover:text-blue">
                  <a href="https://dev.to/thomas_ph35">
                      <font-awesome-icon icon="fab fa-linkedin" />
                  </a>
              </li>
          </ul>
      </div>
    </div>
  </section>
  <section class="py-16">
      <h2 class="text-4xl font-semibold text-teal mb-5 px-6 md:px-0">{{ $t('projects') }}</h2>
      <div class="flex flex-col md:flex-row flex-wrap items-center justify-center gap-6">
          <a class="rounded-md border-2 border-teal w-full md:w-1/4" href="https://mylene-naturo.fr">
              <img src="assets/sites/mylene-naturo.png" class="rounded-t-md w-full h-40" />
              <div class="p-5">
                  <div class="text-2xl font-bold text-teal">
                      Mylene Naturo
                  </div>
                  <p class="my-3 font-normal">Nuxt3, Nuxt Content, TailwindCSS</p>
              </div>
          </a>
          <a class="rounded-md border-2 border-teal " href="https://mineral-contest.netlify.app">
              <img src="assets/sites/mineral-contest.png" class="rounded-t-md w-full h-40" />
              <div class="p-5">
                  <div class="text-2xl font-bold text-teal">
                      Mineral Contest
                  </div>
                  <p class="my-3 font-normal">Nuxt2, Vuetify</p>
              </div>
          </a>
      </div>
  </section>
</template>

<script>


</script>

<style scoped>

</style>
