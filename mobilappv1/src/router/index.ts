
import { createRouter, createWebHistory } from '@ionic/vue-router';
import ApplicationLayout from '../views/layouts/ApplicationLayout.vue';
import AuthLayout from '../views/layouts/AuthLayout.vue'
import store from "../store";
import { ref } from 'vue';

 
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
      }
  }
  ]
},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
    console.log("beforeeach")
    if (to.matched.some(record => record.meta.guestOnly)) {
        console.log("guestonly")
        if (to.fullPath == '/auth/login' && store.getters.user.uuid){
            console.log("controlpanel")
            next('/app/controlpanel')
            return
        }
      next()
      return
    } else {
      if (store.getters.user.uuid) {
        console.log("suestonly false")
        console.log(to)
        if (to.fullPath == '/app/logout'){
            console.log("logout")
            localStorage.removeItem("app_user")
            store.state.selectedTabIndex = ref(0);
            next('/auth/login')
            return
        }
        
        next()
        return
      }
      console.log("login")
      next('/auth/login')
  }
})

export default router
