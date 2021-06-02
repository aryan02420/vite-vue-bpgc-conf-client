<template>
  <div class="flex flex-row items-center gap-x-2 w-auto text-username"
    :style="{color: color}">
    <a :href="profileURL" :class="['ml-2 font-bold rounded-full select-none flex-grow-0 flex-shrink-0', `user-status-${status}`]">
      <img class=" bg-white overflow-hidden rounded-full ring-2 ring-opacity-100 ring-gray-200"
        :src="profileImageURL"
        :alt="name"
        :style="{width:profileImageSize, height:profileImageSize}"/>
    </a>
    <a :href="profileURL" class="font-bold hover:underline text-sm">{{name}}</a>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export type activityStatus =  'online' | 'offline' | 'busy' | 'hidden'

export default defineComponent({
  name: 'UserInfoSmall',
  props: {
    name: {
      type: String,
      required: false,
      default: 'Anonymous'
    },
    color: {
      type: String,
      required: false
    },
    imgsize: {
      type: Number,
      required: false,
      default: 1.5
    },
    status: {
      type: String as PropType<activityStatus>,
      required: false,
      default: 'hidden'
    }
  },
  computed: {
    profileURL():string {
      return `/user/${this.name}`
    },
    profileImageURL():string {
      return `https://identicon-api.herokuapp.com/${this.name}/100?format=png`
      return `https://github.com/identicons/${this.name}.png`
      return `https://robohash.org/${this.name}?bgset=bg1`
      return 'https://images.unsplash.com/photo-1620455930523-214fe077a4b1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=64&ixlib=rb-1.2.1&q=80&w=64'
      return `/users/${this.name}/pp.jpeg`
    },
    profileImageSize():string {
      return `${this.imgsize}rem`
    }

  }
})
</script>

<style lang="postcss" scoped>
a[class^='user-status-'], a[class*='user-status-'] {
  position: relative;
  z-index: 0;
}
a[class^='user-status-']::after, a[class*='user-status-']::after {
  @apply ring-0;
}
a[class^='user-status-']::before, a[class*='user-status-']::before {
  @apply ring-2 bg-gray-200;
  z-index: -1;
}
a[class^='user-status-']::after, a[class*='user-status-']::after,
a[class^='user-status-']::before, a[class*='user-status-']::before {
  position: absolute;
  content: '';
  top: 0;
  right: 0;
  @apply w-1.5 h-1.5 ring-opacity-100 ring-gray-200 bg-opacity-80;
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
.user-status-hidden::before, .user-status-hidden::after {
  @apply hidden;
}
</style>