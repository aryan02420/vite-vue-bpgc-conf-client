<template>
  <div class="flex flex-row gap-2 px-3 py-2 text-xs border border-gray-300 rounded-full shadow-lg backdrop-filter backdrop-blur-md bg-blueGray-200 bg-opacity-40">
    <router-link to="/" class="rounded-full"><span class="px-4 py-2 text-2xl leading-none rounded-full material-icons material-icons-round hover-effect">home</span></router-link>
    <router-link to="/search" class="rounded-full"><span class="px-4 py-2 text-2xl leading-none rounded-full material-icons material-icons-round hover-effect">search</span></router-link>
    <router-link to="/new" class="rounded-full"><span class="px-4 py-2 text-2xl leading-none rounded-full material-icons material-icons-round hover-effect">add_circle</span></router-link>
    <router-link to="/me" class="rounded-full"><span class="px-4 py-2 text-2xl leading-none rounded-full material-icons material-icons-round hover-effect">person</span></router-link>
    <router-link to="/settings" class="rounded-full"><span class="px-4 py-2 text-2xl leading-none rounded-full material-icons material-icons-round hover-effect">settings</span></router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BottomNav',
})
</script>

<style lang="postcss" scoped>
@supports not (backdrop-filter: blur(1px)) {
  .backdrop-filter {
    @apply bg-opacity-90 bg-blueGray-50;
  }
}
.router-link-active {
  @apply text-color-secondary bg-color-secondary bg-opacity-10;
}
</style>
