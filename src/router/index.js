import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pastevents',
    name: 'pastevents',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "pastevents" */ '../views/PastEventsView.vue')
  },
  {
    path: '/partners',
    name: 'partners',
    component: () => import(/* webpackChunkName: "partners" */ '../views/ComingSoonView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/ComingSoonView.vue')
  },

  // past events
  {
    path: '/pastevents/2021',
    name: 'pastevent_2021',
    component: () => import(/* webpackChunkName: "pastevent_2021" */ '../views/PastEvents/PastEvent.2021.vue')
  },
  {
    path: '/pastevents/2019',
    name: 'pastevent_2019',
    component: () => import(/* webpackChunkName: "pastevent_2019" */ '../views/PastEvents/PastEvent.2019.vue')
  },
  {
    path: '/pastevents/2016',
    name: 'pastevent_2016',
    component: () => import(/* webpackChunkName: "pastevent_2016" */ '../views/PastEvents/PastEvent.2016.vue')
  },
  // {
  //   path: '*',
  //   name: 'error404',
  //   component: 
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
