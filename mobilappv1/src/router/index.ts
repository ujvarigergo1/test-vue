
import { createRouter, createWebHistory } from '@ionic/vue-router';
import ApplicationLayout from '../views/layouts/ApplicationLayout.vue';
import AuthLayout from '../views/layouts/AuthLayout.vue';
import Load from '../views/tabs/Load.vue'
import store from "../store";
import axios from 'axios';
import { configWithAuth } from '@/store/api_configs';

 
const routes = [
  {
      path: '/',
      redirect: '/app/controlpanel'
  },
  {
    path: '/auth/',
    component: AuthLayout,
    props: true,
    meta: {
        guestOnly: true
    },
    children: [
        {
            path: 'login',
            component: () => import('@/views/auth/Login.vue'),
            meta: {
                guestOnly: true,
                title: "Bejelentkezés"
            }
        }
    ]
},
{
  path: '/app/',
  component: ApplicationLayout,
  props: true,
  meta: {
      guestOnly: false
  },
  children: [
      {
          path: 'controlpanel',
          component: () => import('@/views/tabs/ControlPanel.vue'),
          meta: {
              guestOnly: false,
              title: "Vezérlőpult"
          }
      },
      {
        path: 'worksheets',
        component: () => import('@/views/tabs/Worksheet.vue'),
        meta: {
            guestOnly: false,
            title: "Munkalapok"
        }
    },
    {
      path: 'logout',
      component: () => import('@/views/tabs/Logout.vue'),
      meta: {
          guestOnly: false,
          title: "Kijelentkezés"
      },
  },
 
  ]
},
{
    path: '/load',
    component: Load,
    props: true,
    meta: {
        guestOnly: true,
        title: "Loading"
    }
}
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



router.beforeEach(async (to, from, next) => {
    if (to.fullPath == from.fullPath)
        next(false)
    let isLoggedIn
    if(store.state.user.token){
        isLoggedIn = await axios(configWithAuth('post','check-token-validity',{})).then( (response) => {
        return response.data.success
      })
    }else {
        isLoggedIn = false
    }
    console.log(isLoggedIn)
    console.log(to)
    //Ha nem létezik a link
    if(to.matched.length == 0) {
        if (store.getters.isLoggedIn)
            next('/app/controlpanel')
        else
            next('/auth/login')
        return
    }
    
    //Bejelentkezve nem enged loginolni
    if (to.fullPath == '/auth/login' && isLoggedIn){
        next('/app/controlpanel')
    } else
    //kijelentkezés (Csak bejelentkezve)
    if (to.fullPath == '/app/logout' && isLoggedIn){
        store.commit('logout')
        next(false)
        return
    } else
    if (to.matched.some(record => record.meta.guestOnly)) {
      next()
    } else {
      if (isLoggedIn) {
        next()
        return
      }
      next('/auth/login')
  }
})




export default router
