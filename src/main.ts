import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import './index.css'

const store = createStore({
  state():any {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state:any) {
      state.count++
    }
  }
})

createApp(App).use(store).mount('#app')
