<template>
  <div class="flex flex-row px-4 py-2 gap-4 rounded-full backdrop-filter backdrop-blur-md bg-gray-100 bg-opacity-40 border border-gray-300 shadow-lg text-xs">
    <router-link to="/" class="rounded-full"><span class="material-icons material-icons-round p-2 text-2xl hover-effect rounded-full leading-none">home</span></router-link>
    <router-link to="/new" class="rounded-full"><span class="material-icons material-icons-round p-2 text-2xl hover-effect rounded-full leading-none">add_circle</span></router-link>
    <router-link to="/me" class="rounded-full"><span class="material-icons material-icons-round p-2 text-2xl hover-effect rounded-full leading-none">person</span></router-link>
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
    @apply bg-opacity-90;
  }
}
.router-link-active {
  @apply text-action-danger bg-action-danger bg-opacity-10;
}
</style>
