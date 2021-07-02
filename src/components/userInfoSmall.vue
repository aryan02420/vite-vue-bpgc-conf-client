<template>
  <div
    class="flex flex-row items-center w-auto gap-x-1 text-username"
    :style="{ color: color }"
  >
    <a
      :href="profileURL"
      :class="[
        'ml-2 font-bold rounded-full select-none flex-grow-0 flex-shrink-0',
        `user-status user-status-${status}`,
      ]"
    >
      <img
        class="overflow-hidden bg-white rounded-full ring-2 ring-opacity-30 ring-gray-500"
        :src="profileImageURL"
        :alt="name"
        loading="lazy"
        :style="{ width: profileImageSize, height: profileImageSize }"
      />
    </a>
    <a
      :href="profileURL"
      class="px-1 text-sm font-bold hover:underline"
      :data-username="true"
      >{{ name }}</a
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export type activityStatus = 'online' | 'offline' | 'busy' | 'hidden'

export default defineComponent({
  name: 'UserInfoSmall',
  props: {
    name: {
      type: String,
      required: false,
      default: 'Anonymous',
    },
    color: {
      type: String,
      required: false,
    },
    imgsize: {
      type: Number,
      required: false,
      default: 1.5,
    },
    status: {
      type: String as PropType<activityStatus>,
      required: false,
      default: 'hidden',
    },
  },
  computed: {
    profileURL(): string {
      return `/user/${this.name}`
    },
    profileImageURL(): string {
      return `https://identicon-api.herokuapp.com/${this.name}/100?format=png&config=e4e7f4ff10da40241f3b143f`
      return `https://github.com/identicons/${this.name}.png`
      return `https://robohash.org/${this.name}?bgset=bg1`
      return 'https://images.unsplash.com/photo-1620455930523-214fe077a4b1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=64&ixlib=rb-1.2.1&q=80&w=64'
      return `/users/${this.name}/pp.jpeg`
    },
    profileImageSize(): string {
      return `${this.imgsize}rem`
    },
  },
})
</script>

<style lang="postcss" scoped>
.user-status {
  position: relative;
  z-index: 0;
}
.user-status::after {
  @apply ring-0;
}
.user-status::before {
  @apply ring-2;
  z-index: -1;
}
.user-status::after,
.user-status::before {
  position: absolute;
  content: '';
  top: 0;
  right: 0;
  @apply w-1.5 h-1.5 ring-opacity-30 ring-gray-500 bg-opacity-100;
  @apply rounded-full;
}
.user-status-online::after {
  @apply bg-status-online;
}
.user-status-offline::after {
  @apply bg-status-offline;
}
.user-status-busy::after {
  @apply bg-status-busy;
}
.user-status-hidden::before,
.user-status-hidden::after {
  @apply hidden;
}
</style>
