import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      title: 'Browzer'
    },
    mutations: {
      changeTitle (state, newTitle) {
        state.title = newTitle
      }
    }
  })
}

export default createStore
