import { createRouter, createWebHashHistory } from 'vue-router'
const Egyik = () => import('../views/Egyik.vue')
const Masik = () => import('../views/Masik.vue')

const routes = [
  {
    path: '/egyik',
    name: 'Egyik',
    component: Egyik
  },
  {
    path: '/masik',
    name: 'Masik',
    component: Masik
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
