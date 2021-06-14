import { createApp } from 'vue'
import router from '@/router'
import App from '@/App.vue'
import { store } from '@/store'
import '@/index.css'
import { Auth0 } from '@/auth'
;(async () => {
  const AuthPlugin = await Auth0.init({
    clientId: import.meta.env.VITE_AUTH_CLIENTID,
    domain: import.meta.env.VITE_AUTH_DOMAIN,
    audience: import.meta.env.VITE_AUTH_AUDIENCE,
    useRefrestTokens: true,
    redirectUri: window.location.origin,
    onRedirectCallback: (appState: any) => {
      router.push(appState?.targetUrl ?? window.location.pathname)
    },
  })
  const app = createApp(App)
  app.use(router)
  app.use(store)
  app.use(AuthPlugin)
  app.mount('#app')
})()
