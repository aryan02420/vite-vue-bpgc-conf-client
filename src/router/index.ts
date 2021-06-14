import { createRouter, createWebHistory } from 'vue-router'
import Feed from '@/views/feed.vue'
import Profile from '@/views/profile.vue'
import NotFound from '@/views/404.vue'

const routes = [
  { path: '/', component: Feed },
  { path: '/me', component: Profile },
  { path: '/:pathMatch(.*)*', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
