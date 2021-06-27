<template>
  <Container
    :id="post.id"
    tabindex="1"
    class="rounded-md shadow-sm bg-primary"
    :postInfo="{
      userName: post.username,
      userImgSize: 1.5,
      date: post.timestamp,
      voted: post.voted,
      numUpvotes: post.numupvotes,
      numDownvotes: post.numdownvotes,
      numComments: post.comments.length,
      showSubComments: true,
      poll: post.poll,
    }"
  >
    <template v-slot:main>
      <Meta :channel="post.channel" :tags="post.tags" />
      <Markdown :readMore="true" :rawContent="post.content" />
      <Poll v-if="!!post.poll" class="my-2" :options="post.poll.options" :voted="tempvote || 0*post.poll.voted" @clicked-event="pollVote" />
    </template>
    <template v-slot:comments>
      <Comment v-for="toplevelcomment in getTopLevelComments(post.comments)" :key="toplevelcomment.id" :toplevelcomment="toplevelcomment" :post="post" />
    </template>
  </Container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Container from '@/components/container.vue'
import Meta from '@/components/meta.vue'
import Markdown from '@/components/markdown.vue'
import Poll from '@/components/poll.vue'
import Comment from '@/components/comment.vue'

export default defineComponent({
  name: 'Post',
  components: {
    Container,
    Meta,
    Markdown,
    Poll,
    Comment,
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      tempvote:0 // DELETEME
    }
  },
  methods: {
    getTopLevelComments(commentList: any[]): any[] {
      return commentList.filter((comm) => comm.toplevelcomment === null)
    },
    pollVote(newVote: number) {
      console.log(this.$el.id, newVote)
      this.tempvote = newVote
    },
  },
})
</script>

<style lang="postcss" scoped></style>
