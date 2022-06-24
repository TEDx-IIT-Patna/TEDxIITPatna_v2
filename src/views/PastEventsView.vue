<template>
  <Nav />
  <section class="wrapper full">
    <img src="@/assets/images/tedxiitpatna_logo-2B.png" class="logo watermark">
    <div class="paintedx"></div>
    <div class="pastevents-wrapper">
      <div class="title">Past Events.</div>
      <div class="event-scroller">
        <router-link to="/pastevents/2021" class="event">
          <div class="thumbnail">
            <img src="@/assets/images/poster-square-2021.png">
          </div>
          <div class="year">2021</div>
        </router-link>
        <router-link to="/pastevents/2019" class="event">
          <div class="thumbnail">
            <img src="@/assets/images/poster-square-2019.png">
          </div>
          <div class="year">2019</div>
        </router-link>
        <router-link to="/pastevents/2016" class="event">
          <div class="thumbnail">
            <img src="@/assets/images/poster-square-2016.png">
          </div>
          <div class="year">2016</div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
  name: "PastEventsView",
  components: {
    Nav,
  },
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
@import '@/assets/css/past_events.css';
</style>
