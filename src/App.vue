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

<style scoped>
@font-face {
    font-family: GothamBold;
    src: url("./assets/font-gotham/GothamBold.ttf");
}
@font-face {
    font-family: GothamMedium;
    src: url("./assets/font-gotham/GothamMedium.ttf");
}
@font-face {
    font-family: GothamLight;
    src: url("./assets/font-gotham/GothamLight.ttf");
} 
</style>
