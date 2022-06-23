<!-- there are separate nav elements in Homepage and Footer -->
<template>
  <span class="show-panel" @click="this.state = 'show'">Navigation<br>Panel</span>
  <nav :class="['nav', this.state]">
    <div class="close" @click="this.state = 'hidden'">Close</div>
    <div class="links">
      <router-link to="/">Home</router-link>
      <router-link to="/pastevents">Past Events</router-link>
      <router-link to="/partners">Partners</router-link>
      <router-link to="/about">About</router-link>
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