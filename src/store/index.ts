import { createStore } from 'vuex'
import data from '@/data.json'
const prefs: Object = {
  currTheme: 0,
  allThemes: ['light', 'dark'],
}

export type State = any
const state: State = {
  data,
  prefs,
}

export const store = createStore({
  state,
  mutations: {
    changeTheme(state) {
      let ct = state.prefs.currTheme
      if (++ct === state.prefs.allThemes.length) ct = 0
      state.prefs.currTheme = ct
    },
  },
  getters: {
    theme(state) {
      return state.prefs.allThemes[state.prefs.currTheme]
    },
  },
})

store.subscribe((mutation, state) => {
  switch (mutation.type) {
    case 'changeTheme':
      document.body.setAttribute('data-theme', store.getters.theme)
      break

    default:
      break
  }
})
