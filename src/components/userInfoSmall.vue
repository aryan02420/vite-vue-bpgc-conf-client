<template>
  <div class="flex flex-row items-center gap-x-3 w-auto text-username"
    :style="{color: usercolor}">
    <a :href="profileURL" :class="['no-underline font-bold rounded-full bg-gray-200 select-none', {'user-online': online}]">
      <img class="profilepic overflow-hidden rounded-full ring-2 ring-opacity-100 ring-gray-200"
        :src="profileImageURL"
        :alt="username"
        :style="{width:profileImageSize, height:profileImageSize}"/>
    </a>
    <a :href="profileURL" class="no-underline font-bold">{{username}}</a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
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
    online: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    profileURL():String {
      return `/users/${this.username}`
    },
    profileImageURL():String {
      return `https://robohash.org/${this.username}?bgset=bg1`
      return 'https://images.unsplash.com/photo-1620455930523-214fe077a4b1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=64&ixlib=rb-1.2.1&q=80&w=64'
      return `/users/${this.username}/pp.jpeg`
    },
    profileImageSize():String {
      return `${this.imgsize}rem`
    }

  }
})
</script>

<style lang="postcss" scoped>
.user-online {
  position: relative;
}
.user-online::after {
  position: absolute;
  content: '';
  top: 0;
  right: 0;
  @apply w-2 h-2 bg-lime-500;
  @apply rounded-full ring-2 ring-opacity-100 ring-gray-200;
}
</style>