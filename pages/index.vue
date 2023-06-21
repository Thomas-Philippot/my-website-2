<template>
  <section class="w-full flex items-center justify-between pb-16 sm:pb-4 flex-col md:flex-row-reverse xs:px-5">
    <div class="mt-6 px-6 md:px-12 md:px-12 shrink-0">
      <img
          src="/assets/avatar.png"
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
    <section class="py-16 px-6 lg:px-0">
        <h2 class="text-4xl font-semibold text-flamingo mb-5">{{ $t('experience') }}</h2>
        <div class="flex flex-col gap-6">
            <div class="flex flex-col md:flex-row items-start gap-4 p-4">
                <p class="text-sm text-subtext0 uppercase mt-1">2018 - {{ $t('today')}}</p>
                <div class="flex-1">
                    <h4 class="text-xl font-semibold">{{ $t('fullstack-dev')}}</h4>
                    <p class="mt-2">Laboratoire MyLab, Chateaugiron</p>
                    <p class="text-xs font-light mt-2">{{ $t('mylab-exp')}}</p>
                    <div class="flex flex-wrap gap-2 py-2">
                        <div class="rounded-full text-xs text-flamingo font-medium leading-5 border border-flamingo px-3 py-1">Nuxt js</div>
                        <div class="rounded-full text-xs text-flamingo font-medium leading-5 border border-flamingo px-3 py-1">Vue JS</div>
                        <div class="rounded-full text-xs text-flamingo font-medium leading-5 border border-flamingo px-3 py-1">Vuetify</div>
                        <div class="rounded-full text-xs text-flamingo font-medium leading-5 border border-flamingo px-3 py-1">PHP Symfony</div>
                        <div class="rounded-full text-xs text-flamingo font-medium leading-5 border border-flamingo px-3 py-1">GIT</div>
                        <div class="rounded-full text-xs text-flamingo font-medium leading-5 border border-flamingo px-3 py-1">Docker</div>
                        <div class="rounded-full text-xs text-flamingo font-medium leading-5 border border-flamingo px-3 py-1">NGINX</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  <section class="py-16 px-6 lg:px-0">
      <h2 class="text-4xl font-semibold text-teal mb-5">{{ $t('projects') }}</h2>
      <div class="flex flex-col lg:flex-row flex-wrap items-center justify-center gap-6">
          <a class="rounded-md border-2 border-teal w-full sm:w-1/2 md:w-1/3 lg:w-1/4" href="https://mylene-naturo.fr">
              <img src="/assets/sites/mylene-naturo.png" class="rounded-t-md w-full h-40" />
              <div class="p-5">
                  <div class="text-2xl font-bold text-teal">
                      Mylene Naturo
                  </div>
                  <div class="flex flex-wrap gap-2 my-3">
                      <div class="rounded-full text-xs leading-5 border border-teal px-3 py-1">Nuxt 3</div>
                      <div class="rounded-full text-xs leading-5 border border-teal px-3 py-1">Nuxt Content</div>
                      <div class="rounded-full text-xs leading-5 border border-teal px-3 py-1">TailwindCSS</div>
                  </div>
              </div>
          </a>
          <a class="rounded-md border-2 border-teal w-full sm:w-1/2 md:w-1/3 lg:w-1/4" href="https://mineral-contest.netlify.app">
              <img src="/assets/sites/mineral-contest.png" class="rounded-t-md w-full h-40" />
              <div class="p-5">
                  <div class="text-2xl font-bold text-teal">
                      Mineral Contest
                  </div>
                  <div class="flex flex-wrap gap-2 my-3">
                      <div class="rounded-full text-xs leading-5 border border-teal px-3 py-1">Nuxt 2</div>
                      <div class="rounded-full text-xs leading-5 border border-teal px-3 py-1">Vuetify</div>
                  </div>
              </div>
          </a>
      </div>
  </section>
</template>

<script>


</script>

<style scoped>

</style>
