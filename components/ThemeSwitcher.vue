<template>
  <client-only>
    <button v-if="$colorMode.value === 'macchiato'" @click="$colorMode.preference = 'latte'" aria-label="Light Theme">
        <font-awesome-icon icon="fa-solid fa-sun" />
    </button>
    <button v-else @click="$colorMode.preference = 'macchiato'" aria-label="Dark Theme">
        <font-awesome-icon icon="fa-solid fa-moon" />
    </button>
  </client-only>
</template>

<script>
export default {
  name: "ThemeSwitcher"
}
</script>
