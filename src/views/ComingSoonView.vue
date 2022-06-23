<template>
  <div class="wrapper">
    <div class="banner web" v-if="this.screenWidth > 460"></div>
    <div class="banner mobile" v-if="this.screenWidth <= 460"></div>
    <div class="coming-soon">Coming Soon</div>
    <div class="text">Webpage under development. Please be patient while we go search for more lovely unicorns to help build the site.</div>
  </div>
</template>

<script>
export default {
  name: "ComingSoonView",
  data() {
    return {
      screenWidth: window.innerWidth,
    }
  },
  methods: {
    onResize() {
      this.screenWidth = window.innerWidth
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  }
}
</script>

<style scoped>
@import '@/assets/css/coming_soon.css';
</style>
