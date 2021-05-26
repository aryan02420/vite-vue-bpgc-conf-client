<template>
  <!-- <UserInfoSmall username="timber" :imgsize="1.5" :online="true" />
  <UserInfoSmall username="aaaa" usercolor="red" :imgsize="1.75" />
  <UserInfoSmall username="dumdum" usercolor="green" :imgsize="2" />
  <VoteButton :votes="32" />
  <VoteButton :votes="32" :voted="1" />
  <VoteButton :voted="-1" />
  <CommentButton :numComments="12" />
  <CommentButton :numComments="12" :active="true"/> -->
  <div class="flex flex-col gap-4">
    <Post @click="store.commit('increment')"
    :channel="'general'" :tags="['shitpost', 'lmao', 'komedy']">
      <Markdown :readMore="true" rawContent="## markdown test. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing."/>
      <!-- <h1 class="text-2xl font-bold text-primary">{{store.state.count}} title lorem ipsum idk.</h1>
      <p class="text-base text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> -->
    </Post>
    <Post
    :channel="'bitsp'" :tags="['compre', 'pct', 'clear']">
      <Markdown :readMore="false" rawContent="## markdown test. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing."/>
      <!-- <h1 class="text-2xl font-bold text-primary">PCT! PCT! PCT! PCT! PCT!</h1>
      <p class="text-base text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing.</p>
      <p class="text-base text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing.</p>
      <p class="text-base text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing.</p> -->
    </Post>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { useStore } from "vuex";
import Post from '@/components/post.vue'
import UserInfoSmall from '@/components/userInfoSmall.vue'
import VoteButton from '@/components/voteButtons.vue'
import CommentButton from "@/components/commentButton.vue"
import Markdown from "@/components/markdown.vue"

export default defineComponent({
  name: 'App',
  components: {
    Post,
    UserInfoSmall,
    VoteButton,
    CommentButton,
    Markdown,
  },
  setup() {
    const store = useStore();
    return {
      store
    }
  },
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
