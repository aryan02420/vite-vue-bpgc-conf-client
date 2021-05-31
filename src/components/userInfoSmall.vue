<template>
  <div class="flex flex-row items-center gap-x-3 w-auto text-username"
    :style="{color: usercolor}">
    <a :href="profileURL" :class="['m-2 font-bold rounded-full bg-gray-200 select-none', `user-status-${status}`]">
      <img class="profilepic overflow-hidden rounded-full ring-2 ring-opacity-100 ring-gray-200"
        :src="profileImageURL"
        :alt="username"
        :style="{width:profileImageSize, height:profileImageSize}"/>
    </a>
    <a :href="profileURL" class="font-bold hover:underline">{{username}}</a>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export enum activityStatus {
  online = "online",
  offline = "offline",
  busy = "busy",
  hidden = "hidden"
}

export default defineComponent({
  name: 'UserInfoSmall',
  props: {
    username: {
      type: String,
      required: false,
      default: "Anonymous"
    },
    usercolor: {
      type: String,
      required: false
    },
    imgsize: {
      type: Number,
      required: false,
      default: 1.75
    },
    status: {
      type: String as PropType<activityStatus>,
      required: false,
      default: activityStatus.hidden
    }
  },
  computed: {
    profileURL():string {
      return `/user/${this.username}`
    },
    profileImageURL():string {
      return `https://robohash.org/${this.username}?bgset=bg1`
      return 'https://images.unsplash.com/photo-1620455930523-214fe077a4b1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=64&ixlib=rb-1.2.1&q=80&w=64'
      return `/users/${this.username}/pp.jpeg`
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
}
a[class^='user-status-']::after, a[class*='user-status-']::after {
  position: absolute;
  content: '';
  top: 0;
  right: 0;
  @apply w-2 h-2;
  @apply rounded-full ring-2 ring-opacity-100 ring-gray-200;
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
.user-status-hidden::after {
  @apply hidden;
}
</style>