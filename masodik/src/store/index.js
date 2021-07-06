import { createStore } from 'vuex'

export default createStore({
  state: {
    nev: 'Jóska'
  },
  mutations: {
    changeName(state){
      if(state.nev == 'Jóska')
        state.nev = 'Géza'
      else
        state.nev = 'Jóska'
    }
  },
  actions: {
  },
  modules: {
  }
})
