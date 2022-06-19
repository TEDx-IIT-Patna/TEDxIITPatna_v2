import { createRouter, createWebHistory } from 'vue-router'
import Home_Mobile from '../views/Home_Mobile.vue'
import navbarpanel from "../views/navbarpanel.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home_Mobile
  },
  {
    path: '/nav-panel',
    name: 'nav-panel',
    component: navbarpanel
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
