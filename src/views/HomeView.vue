<template>
  <div class="home">
  <!-- <Footer/> -->
  <Navbarpanel/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Footer from '@/components/Footer.vue'
import Navbarpanel from '@/components/navbarpanel.vue' 
export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Footer,
    Navbarpanel
}
}
</script>
