import { createStore } from 'vuex'
import data from '@/data.json'

export type State = any
const state: State = data

export const store = createStore({
  state,
  mutations: {
    increment(state:any) {
      state.count++
    }
  }
})
