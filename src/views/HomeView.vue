<template>
  <Nav />
  <div class="home"></div>
  <Footer />
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    Nav,
    Footer,
  }
}
</script>
