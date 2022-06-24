<!-- there are separate nav elements in Homepage and Footer -->
<template>
  <span class="show-panel" v-if="open_button_style === 'text'" @click="this.state = 'show'"
    :style="{ 'color': open_button_color }">Navigation<br>Panel</span>
    
  <span class="show-panel" v-if="open_button_style === 'hamburger'" @click="this.state = 'show'"
    :style="{ 'color': open_button_color }">Navigation<br>Panel</span>

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
  props: {
    'open_button_color': {
      type: String,
      default: 'black',
      values: ['black', 'white'],
    },
    'open_button_style': {
      type: String,
      default: 'text',
      values: ['text', 'hamburger'],
    }
  },
  data() {
    return {
      state: 'hidden'
    }
  }
}
</script>

<style scoped>
@import '@/assets/css/nav.css';
</style>