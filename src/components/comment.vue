<template>
  <Container
    :id="toplevelcomment.id"
    class="border-l-2 border-gray-500 border-opacity-20"
    :postInfo="{
      userName: toplevelcomment.username,
      userImgSize: 1.25,
      date: toplevelcomment.timestamp,
      voted: toplevelcomment.voted,
      numUpvotes: toplevelcomment.numupvotes,
      numDownvotes: toplevelcomment.numdownvotes,
      numComments: getSubComments(post.comments, toplevelcomment.id).length,
      showSubComments: true,
    }"
  >
    <template v-slot:main>
      <Markdown :readMore="true" :rawContent="toplevelcomment.content" />
    </template>
    <template v-slot:comments>
      <Subcomment
        v-for="subcomment in getSubComments(post.comments, toplevelcomment.id)"
        :key="subcomment.id"
        :ref="( el ) => { setItemRef(el, subcomment.id) }"
        :subcomment="subcomment"
        :parentRef="subcommentRefs[subcomment.parentcomment]"
      />
    </template>
  </Container>
</template>

<script lang="ts">
import { ref, defineComponent, provide } from 'vue'
import Container from '@/components/container.vue'
import Markdown from '@/components/markdown.vue'
import Subcomment from '@/components/subcomment.vue'

interface IGenericObject {
  [key: string]: any
}

export default defineComponent({
  name: 'Comment',
  components: {
    Container,
    Markdown,
    Subcomment,
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
    toplevelcomment: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      subcommentRefs: ref({} as IGenericObject),
    }
  },
  methods: {
    getSubComments(commentList: any[], TLCID: string): any[] {
      return commentList.filter((subcomm) => subcomm.toplevelcomment === TLCID)
    },
    setItemRef(el: any, id: string) {
      if (el) {
        this.subcommentRefs[id] = el
      }
    },
  },
})
</script>

<style lang="postcss" scoped></style>
