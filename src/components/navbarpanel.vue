<template>
  <span class="show-panel" style="top: 0rem;
    right: 1rem;" @click="this.state = 'show'">
    <div class="menu">
      <i id="bar" class="fa fa-bars"></i>
    </div>
  </span>
  <nav :class="['nav', this.state]">
    <div class="close" @click="this.state = 'hidden'" style="top: -3rem; left: -1rem;">Close</div>
    <div class="links">
      <router-link to="/"><span>Home</span></router-link>
      <router-link to="/past_events"><span>Past Events</span></router-link>
      <router-link to="/team"><span>Team</span></router-link>
      <router-link to="/partners"><span>Partners</span></router-link>
      <router-link to="/about"><span>About</span></router-link>
    </div>
    <img src="@/assets/images/Flower-cropped.png" class="flower">
  </nav>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      state: 'hidden'
    }
  }
}
</script>

<style scoped>
@import '@/assets/css/nav.css'
</style>