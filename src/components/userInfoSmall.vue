<template>
  <div class="flex flex-row items-center gap-x-3 w-auto text-username"
    :style="{color: usercolor}">
    <a :href="profileURL" class="no-underline font-bold rounded-full bg-gray-200">
      <img class="profilepic overflow-hidden rounded-full ring-2 ring-opacity-50 ring-gray-400"
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
    }
  },
  computed: {
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

<style>
</style>