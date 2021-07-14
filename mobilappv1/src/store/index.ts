import { createStore } from 'vuex'
import {ref} from 'vue'
import router from "../router";
import axios from 'axios';
import {loginconfig, configWithAuth} from './api_configs'

export default createStore({
  state: {
    rememberMe: localStorage.getItem('rememberme') || "",
    status: false,
    token: localStorage.getItem('token') || '',
    user: JSON.parse(localStorage.getItem('app_user') || '{}'),
  },
  getters: {
    
    user: state => state.user = JSON.parse(localStorage.getItem('app_user') || '{}')
  },
  mutations: {
    logout(state){
      state.user = {}
      localStorage.removeItem("app_user");
      router.push('/auth/login');
      
    },
    login(state,data){
      loginconfig.data.email = data.email
      loginconfig.data.password = data.pass
      axios(loginconfig)
      .then( (response) => {
        if ( response.data.success == false){
          return {
            success: false, 
            message: response.data.message
          }
        } else {
          state.user = response.data.data
          localStorage.setItem("app_user",JSON.stringify(state.user))
          router.push('/app/controlpanel')
          return {
            success: true, 
            message: response.data.message
          }
        }
        
      })
      .catch((error) => {
        console.log(error)
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
