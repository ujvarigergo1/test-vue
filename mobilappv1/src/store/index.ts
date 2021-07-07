import { createStore } from 'vuex'

export default createStore({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: JSON.parse(localStorage.getItem('app_user') || '{}'),
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    user: state => state.user = JSON.parse(localStorage.getItem('app_user') || '{}')
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
