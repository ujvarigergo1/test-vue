import { App } from '@capacitor/app';
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import ApplicationLayout from '../views/layouts/ApplicationLayout.vue';
import AuthLayout from '../views/layouts/AuthLayout.vue'
import store from "../store";

 
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
            props: {title: "Bejelentkezés", subtitle: "Jelentkezzen be az alkalmazás használatához"},
            meta: {
                guestOnly: true
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
          props: {title: "Vezérlőpult", subtitle: "??"},
          meta: {
              guestOnly: false
          }
      },
      {
        path: 'worksheets',
        component: () => import('@/views/tabs/Worksheet.vue'),
        props: {title: "Munkalapok", subtitle: "??"},
        meta: {
            guestOnly: false
        }
    },
    {
      path: 'logout',
      component: () => import('@/views/tabs/Logout.vue'),
      props: {title: "Kijelentkezés", subtitle: "??"},
      meta: {
          guestOnly: false
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
  if (to.matched.some(record => record.meta.guestOnly)) {
      next()
  } else {
      if (store.getters.user.uuid) {
          next()
          return
      }
      next('/auth/login')
  }
})

export default router
