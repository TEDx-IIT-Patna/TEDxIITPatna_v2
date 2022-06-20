import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PastEvents from '../views/PastEvents.vue'
import events2021 from '../components/2021.vue'
import events2019 from '../components/2019.vue'
import events2016 from '../components/2016.vue'
import about from '../views/AboutView.vue'
import partners from '../views/Partners.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/past_events',
    name: 'pastevents',
    component: PastEvents
  },
  {
    path: '/past_events/2021',
    name: 'pastevents2021',
    component: events2021

  },
  {
    path: '/past_events/2019',
    name: 'pastevents2019',
    component: events2019

  },
  {
    path: '/past_events/2016',
    name: 'pastevents2016',
    component: events2016

  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
  {
    path: '/partners',
    name: 'partners',
    component: partners
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
