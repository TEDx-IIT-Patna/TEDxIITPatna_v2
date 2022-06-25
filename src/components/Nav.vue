<!-- there are separate nav elements in Homepage and Footer -->
<template>
  <span class="show-panel" v-if="open_button_style === 'text'" @click="this.state = 'show'"
    :style="{ 'color': open_button_color, 'background-color': open_button_background }">Navigation<br>Panel</span>

  <span class="show-panel" v-if="open_button_style === 'icon'" @click="this.state = 'show'"
    :style="{ 'color': open_button_color, 'background-color': open_button_background, 'transform': 'translate(-50%, 0)' }"><i
      class="gg-menu-left-alt"></i></span>

  <nav :class="['nav', this.state]">
    <div class="close" @click="this.state = 'hidden'">Close</div>
    <div class="links">
      <router-link to="/">Home</router-link>
      <router-link to="/pastevents">Past Events</router-link>
      <router-link to="/partners">Partners</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <img src="@/assets/images/Flower-cropped.png" class="flower" style="opacity: 0.7">
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
    'open_button_background': {
      type: String,
      default: 'transparent',
    },
    'open_button_style': {
      type: String,
      default: 'text',
      values: ['text', 'icon'],
    },
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