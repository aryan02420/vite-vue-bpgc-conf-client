<template>
  <div class="flex flex-col gap-4">
    <Container @click="store.commit('increment')"
    :username="'dumdum'" :usercolor="'green'"
    :voted="1" :numVotes="32" :numComments="5" :date="'22 may'">
      <Post :channel="'general'" :tags="['shitpost', 'lmao', 'komedy']">
        <Markdown :readMore="true" rawContent="## markdown test. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing."/>
      </Post>
    </Container>
    <Container
    :username="'123'" :usercolor="'magenta'"
    :voted="-1" :numVotes="101" :numComments="15" :date="'21 may'">
      <Post :channel="'bitsp'" :tags="['compre', 'pct', 'clear']">
        <Markdown :readMore="true" rawContent="## markdown test. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing."/>
      </Post>
    </Container>
    <Container :date="'22 may'">
      <Post :channel="'bitsp'" :tags="['compre', 'pct', 'clear']">
        <Markdown :readMore="true" rawContent="## markdown test. dolor sit amet consectetur adipiscing."/>
      </Post>
    </Container>
    <Container :date="'22 may'">
      <Post :channel="'bitsp'" :tags="['compre', 'pct', 'clear']"></Post>
      <Markdown :readMore="true" rawContent="## markdown test. dolor sit amet consectetur adipiscing. dolor sit amet consectetur adipiscing. dolor sit amet consectetur adipiscing. dolor sit amet consectetur adipiscing."/>
    </Container>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { useStore } from "vuex";
import Container from '@/components/container.vue'
import Post from '@/components/post.vue'
import UserInfoSmall from '@/components/userInfoSmall.vue'
import VoteButton from '@/components/voteButtons.vue'
import CommentButton from "@/components/commentButton.vue"
import Markdown from "@/components/markdown.vue"

export default defineComponent({
  name: 'App',
  components: {
    Container,
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
