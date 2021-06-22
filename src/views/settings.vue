<template>
  <div class="p-2">
    <h2>Settings</h2>
    <h3>About</h3>
    <h4>mode</h4>
    <p>{{env}}</p>
    <h4>sha</h4>
    <p>{{ gh_sha.substr(0, 7) }}</p>
    <h4>ref</h4>
    <p>{{ gh_ref.split('/').slice(-1)[0] }}</p>
    <h3>Preferences</h3>
    <h4>Theme</h4>
    <p>Light</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Settings',
  data() {
    return {
      env: import.meta.env.MODE,
      gh_sha: import.meta.env.VITE_GITHUB_SHA,
      gh_ref: import.meta.env.VITE_GITHUB_REF,
    }
  },
})
</script>

<style lang="postcss" scoped>
h2 {
  @apply text-3xl text-primary mt-8;
}
h3 {
  @apply text-2xl text-primary mt-4;
}
h4 {
  @apply text-xl text-secondary mt-2;
}
</style>
