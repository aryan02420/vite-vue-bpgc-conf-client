<template>
  <div class="flex flex-col gap-4">
    <Container  v-for="post in store.state" :key="post.id" :id="post.id" tabindex="1"
      class="bg-primary shadow-sm rounded-md"
      @click="store.commit('increment')"
      :postInfo="{
        userName:post.username, userImgSize:1.5, date:post.timestamp,
        voted:post.voted, numUpvotes:post.numupvotes, numDownvotes:post.numdownvotes, numComments:post.comments.length, showSubComments:true
      }">
      <template v-slot:main>
        <Meta :channel="post.channel" :tags="post.tags" />
        <Markdown :readMore="true" :rawContent="post.content"/>
      </template>
      <template v-slot:comments>
        
      <Container v-for="toplevelcomment in getTopLevelComments(post.comments)" :key="toplevelcomment.id" :id="toplevelcomment.id"
        class="border-l-2 border-gray-500 border-opacity-20"
        :postInfo="{
          userName:toplevelcomment.username, userImgSize:1.25, date:toplevelcomment.timestamp,
          voted:toplevelcomment.voted, numUpvotes:toplevelcomment.numupvotes, numDownvotes:toplevelcomment.numdownvotes, numComments:getSubComments(post.comments, toplevelcomment.id).length, showSubComments:true
        }">
        <template v-slot:main>
          <Markdown :readMore="true" :rawContent="toplevelcomment.content"/>
        </template>
        <template v-slot:comments>
          
          <Container v-for="subcomment in getSubComments(post.comments, toplevelcomment.id)" :key="subcomment.id" :id="subcomment.id"
            class="border-l-2 border-gray-600 border-opacity-30"
            :postInfo="{
              userName:subcomment.username, userImgSize:1, date:subcomment.timestamp,
              voted:subcomment.voted, numUpvotes:subcomment.numupvotes, numDownvotes:subcomment.numdownvotes, showSubComments:false
            }">
            <template v-slot:main>
              <ReplyInfo :parentID="subcomment.parentcomment" />
              <Markdown :readMore="true" :rawContent="subcomment.content"/>
            </template>
          </Container>

        </template>
      </Container>

      </template>
    </Container>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { useStore } from "vuex";
import Container, { IPostInfo } from '@/components/container.vue'
import Meta from '@/components/meta.vue'
import ReplyInfo from '@/components/replyInfo.vue'
import Markdown from "@/components/markdown.vue"

export default defineComponent({
  name: 'App',
  components: {
    Container,
    Meta,
    Markdown,
    ReplyInfo,
  },
  setup() {
    const store = useStore();
    console.log(store);
    return {
      store
    }
  },
  methods: {
    getTopLevelComments(commentList:any[]):any {
      return commentList.filter(comm => comm.toplevelcomment === null)
    },
    getSubComments(commentList:any[], TLCID:string):any {
      return commentList.filter(subcomm => subcomm.toplevelcomment === TLCID)
    }
  }
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
