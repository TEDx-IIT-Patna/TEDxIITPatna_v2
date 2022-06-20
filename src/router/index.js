import { createWebHistory, createRouter } from "vue-router";
import home from "@/views/home.vue"
import team from "@/views/team.vue"
import navbarpanel from "../components/navbarpanel.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
    meta: { show: true }
  },
  {
    path: "/team",
    name: "team",
    component: team,
    meta: { show: false }
  },
  {
    path: '/nav-panel',
    name: 'nav-panel',
    component: navbarpanel
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;