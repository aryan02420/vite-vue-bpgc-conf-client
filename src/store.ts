import { createStore } from 'vuex'

export type State = any
const state: State = { count: 0 }

export const store = createStore({
  state,
  mutations: {
    increment(state:any) {
      state.count++
    }
  }
})
