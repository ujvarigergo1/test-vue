import { createStore } from 'vuex'
import {ref} from 'vue'
import router from "../router";


export default createStore({
  state: {
    selectedTabIndex: ref(0),
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
    logout(state){
      state.selectedTabIndex = ref(0);
      localStorage.removeItem("app_user");
      router.push('/auth/login')
    }
  },
  actions: {
  },
  modules: {
  }
})
