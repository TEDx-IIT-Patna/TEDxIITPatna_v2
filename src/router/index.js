import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// only the home view is loaded at first. all other routes are lazy-loaded when called.
// this is done simply to cut down on network usage and speed up loading a bit on initial landing.
// but i'm not sure whether this is the right thing to do.

// NOTE: when using lazy loading feature, be sure to add the webpackChunkName directives (yes, it's not random comments)
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: "Home"
    },
  },

  {
    path: '/pastevents',
    name: 'pastevents',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "pastevents" */ '../views/PastEventsView.vue'),
    meta: {
      title: "Past Events"
    },
  },

  {
    path: '/partners',
    name: 'partners',
    component: () => import(/* webpackChunkName: "partners" */ '../views/Partners.vue'),
    meta: {
      title: "Partners"
    },
  },

  
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
      title: "About"
    },
  },

  // past events
  {
    path: '/pastevents/2021',
    name: 'pastevent_2021',
    component: () => import(/* webpackChunkName: "pastevent_2021" */ '../views/PastEvents/PastEvent.2021.vue'),
    meta: {
      title: "Roar, 2021"
    },
  },

  {
    path: '/pastevents/2019',
    name: 'pastevent_2019',
    component: () => import(/* webpackChunkName: "pastevent_2019" */ '../views/PastEvents/PastEvent.2019.vue'),
    meta: {
      title: "Metamorphosis, 2019"
    },
  },

  {
    path: '/pastevents/2016',
    name: 'pastevent_2016',
    component: () => import(/* webpackChunkName: "pastevent_2016" */ '../views/PastEvents/PastEvent.2016.vue'),
    meta: {
      title: "Shedding Off Feathers, 2016"
    },
  },
  {
    path: '/qrcode',
    name: 'qrcode',
    component: () => import(/* webpackChunkName: "qrcode" */ '../views/Qrcode.vue'),
    meta: {
      title: "Redirect"
    },
  },
  {
    path: '/comingsoon',
    name: 'comingsoon',
    component: () => import(/* webpackChunkName: "commingsoon" */ '../views/TicketBooking.vue'),
    meta: {
      title: "Coming Soon"
    },
  },
  // *** Error404 path. This needs to be created.
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
