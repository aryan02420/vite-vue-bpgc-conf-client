<template>
  <div class="flex flex-col gap-4">
    <Container @click="store.commit('increment')"
      :postInfo="{
        userName:'DumDum', userColor:'#EE2525', userImgSize:1.5, userStatus:'offline',
        date:'31 may', channel:'shitpost', tags:['lmao', 'paisa', 'kmao'],
        voted:1, numVotes:13, numComments:4
      }">
      <Meta :channel="'general'" :tags="['shitpost', 'lmao', 'komedy']" />
      <Markdown :readMore="true" rawContent="## markdown test. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing."/>
    </Container>
    <!-- <Container
      :username="'noobMaster'" :userimgsize="1.5"
      :voted="-1" :numVotes="101" :numComments="15" :date="'21 may'">
      <Meta :channel="'bitsp'" :tags="['compre', 'pct', 'clear']" />
      <Markdown :readMore="true" rawContent="## markdown test. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing."/>
    </Container>
    <Container :date="'22 may'" :userimgsize="1.5">
      <Meta :channel="'bitsp'" :tags="['compre', 'pct', 'clear']" />
      <Markdown :readMore="true" rawContent="## markdown test. dolor sit amet consectetur adipiscing."/>
    </Container>
    <Container :date="'22 may'" :userimgsize="1.5">
      <Meta :channel="'bitsp'" :tags="['compre', 'pct', 'clear']" />
      <Markdown :readMore="true" rawContent="## markdown test. dolor sit amet consectetur adipiscing. dolor sit amet consectetur adipiscing. dolor sit amet consectetur adipiscing. dolor sit amet consectetur adipiscing. amet consectetur adipiscing. asdasda asda sdfsdfsdf sd"/>
    </Container> -->
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { useStore } from "vuex";
import Container, { IPostInfo } from '@/components/container.vue'
import Meta from '@/components/meta.vue'
import UserInfoSmall from '@/components/userInfoSmall.vue'
import VoteButton from '@/components/voteButtons.vue'
import CommentButton from "@/components/commentButton.vue"
import Markdown from "@/components/markdown.vue"

export default defineComponent({
  name: 'App',
  components: {
    Container,
    Meta,
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
  font-family: 'Roboto', 'Montserrat', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
}
</style>
