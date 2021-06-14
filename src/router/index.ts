import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/HelloWorld.vue'
import Feed from '@/views/feed.vue'
import Profile from '@/views/profile.vue'

const routes = [
  { path: '/', component: Feed },
  { path: '/me', component: Profile },
  { path: '/home', component: Home },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
