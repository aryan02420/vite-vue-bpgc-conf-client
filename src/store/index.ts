import { createStore } from 'vuex'
import data from '@/data.json'

export type State = any
const state: State = {
  data,
}

export const store = createStore({
  state,
})
