<template>
<!-- <navbarVue/> -->
<!-- <navbarVue/> -->
<router-view/>
</template>

<script>
import homeVue from "./views/home.vue";
import navbarVue from '@/components/navbar.vue'
  // import navbarVue from "./components/navbar.vue";
// import Home from './views/home.vue';
  export default {
  components: {
  homeVue,
  navbarVue
  }
}
AOS.init();
</script>

