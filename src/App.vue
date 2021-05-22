<template>
  <UserInfoSmall username="timber" imgsize="1.5" />
  <UserInfoSmall username="aaaa" usercolor="red" imgsize="1.75" />
  <UserInfoSmall username="dumdum" usercolor="green" imgsize="2" />
  <VoteButton votes="32" />
  <VoteButton votes="32" voted="1" />
  <VoteButton voted="-1" />
  <CommentButton :numComments="12" />
  <CommentButton :numComments="12" :active="true"/>
  <Post><h1>ahahahahah</h1></Post>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Post from './components/post.vue'
import UserInfoSmall from '@/components/userInfoSmall.vue'
import VoteButton from '@/components/voteButtons.vue'
import CommentButton from "@/components/commentButton.vue"


export default defineComponent({
  name: 'App',
  components: {
    Post,
    UserInfoSmall,
    VoteButton,
    CommentButton
  }
})
</script>

<style>
#app {
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a {
  font-family: 'Kodchasan', Helvetica, Arial, sans-serif;
}
</style>
