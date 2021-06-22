import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { Auth0 } from '@/auth'
import Feed from '@/views/feed.vue'
import Profile from '@/views/profile.vue'
import Settings from '@/views/settings.vue'
import NotFound from '@/views/404.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Feed,
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings,
  },
  {
    path: '/me',
    name: 'profile',
    component: Profile,
    beforeEnter: Auth0.routeGuard,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
