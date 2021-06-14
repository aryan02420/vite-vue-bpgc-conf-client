import { createApp } from 'vue'
import router from '@/router'
import App from '@/App.vue'
import { store } from '@/store'
import '@/index.css'
import { Auth0 } from '@/auth'
import { domain, clientId, audience } from '@/auth_config.json'
;(async () => {
  const AuthPlugin = await Auth0.init({
    clientId,
    domain,
    audience,
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
