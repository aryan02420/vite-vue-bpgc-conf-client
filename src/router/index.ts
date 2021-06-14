import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/HelloWorld.vue'
import Feed from '@/views/feed.vue'

const routes = [
  { path: '/', component: Feed },
  { path: '/home', component: Home },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
