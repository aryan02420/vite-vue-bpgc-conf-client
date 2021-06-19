<template>
  <Container
    :id="subcomment.id"
    class="border-l-2 border-gray-500 border-opacity-20"
    :postInfo="{
      userName: subcomment.username,
      userImgSize: 1,
      date: subcomment.timestamp,
      voted: subcomment.voted,
      numUpvotes: subcomment.numupvotes,
      numDownvotes: subcomment.numdownvotes,
      showSubComments: false,
    }"
  >
    <template v-slot:main>
      <ReplyInfo v-if="subcomment.parentcomment !== subcomment.toplevelcomment" :parentRef="parentRef" />
      <Markdown :readMore="true" :rawContent="subcomment.content" />
    </template>
  </Container>
</template>

<script lang="ts">
import { ref, defineComponent, inject } from 'vue'
import { useStore } from 'vuex'
import Container from '@/components/container.vue'
import ReplyInfo from '@/components/replyInfo.vue'
import Markdown from '@/components/markdown.vue'

interface IGenericObject {
  [key: string]: any
}

export default defineComponent({
  name: 'Subcomment',
  components: {
    Container,
    Markdown,
    ReplyInfo,
  },
  props: {
    subcomment: {
      type: Object,
      required: true,
    },
    parentRef: {
      type: Object,
    },
  },
  data() {
    return {
      subcommentRefs: ref({} as IGenericObject),
    }
  },
  setup() {
    const store = useStore()
    return {
      store,
    }
  },
})
</script>

<style lang="postcss" scoped></style>
