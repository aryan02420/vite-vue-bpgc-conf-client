import { createRouter, createWebHistory, RouteRecordRaw, RouterScrollBehavior, Router, NavigationGuard } from 'vue-router'
import { Auth0 } from '@/auth'
import Feed from '@/views/feed.vue'
import Profile from '@/views/profile.vue'
import Settings from '@/views/settings.vue'
import NotFound from '@/views/404.vue'

type ScrollPositionNormalized = {
  behavior?: ScrollOptions['behavior']
  left: number
  top: number
}

declare module 'vue-router' {
  interface RouteMeta {
    scrollPos?: ScrollPositionNormalized
  }
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Feed,
    meta: {
      scrollPos: {
        top: 0,
        left: 0,
      },
    },
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

const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
  if (to.name === from.name) {
    to.meta.scrollPos && (to.meta.scrollPos.top = 0)
    return { left: 0, top: 0 }
  }
  const scrollpos = savedPosition || to.meta.scrollPos || { left: 0, top: 0 }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(scrollpos)
    }, 500)
  })
}

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior,
})

router.beforeEach((to, from, next) => {
  from.meta.scrollPos && (from.meta.scrollPos.top = document.documentElement.scrollTop)
  return next()
})

export default router
