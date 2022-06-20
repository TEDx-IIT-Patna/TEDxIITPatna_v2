import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'
import AOS from 'aos'
import 'aos/dist/aos.css'

// import './assets/style/style.css'
createApp(App).use(router).use(MotionPlugin).mount('#app')
