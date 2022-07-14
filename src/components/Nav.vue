<!--
  Navigation panel
  "open nav panel" and "close" text included
-->
<!--
  Usage:
  <template>
    <Nav [open_button_color="black","white"] [open_button_background="any_color_code"] [open_button_style="text","icon"] />
  </template>
  <script scoped>
    ...
    import Nav from '@/components/Nav.vue'
    ...
    export default {
      ...
      components: {
        ...
        Nav,
        ...
      }
      ...
    }
  </script>
-->
<template>
  <span id="nav-panel-show-button" class="show-panel" v-if="open_button_style === 'text'" @click="this.state = 'show'"
    :style="{ 'color': open_button_color, 'background-color': open_button_background }">Navigation<br>Panel</span>

  <span id="nav-panel-show-button" class="show-panel" v-if="open_button_style === 'icon'" @click="this.state = 'show'"
    :style="{ 'color': open_button_color, 'background-color': open_button_background, 'transform': 'translate(-50%, 0)' }"><i
      class="gg-menu-left-alt"></i></span>

  <nav :class="['nav', this.state]">
    <div class="close" @click="this.state = 'hidden'">Close</div>
    <div class="links">
      <NavLinks />
    </div>
    <img src="@/assets/images/Flower-cropped.png" class="flower" style="opacity: 0.7">
  </nav>
</template>

<script>
import NavLinks from '@/components/NavLinks.vue'

export default {
  name: "Nav",
  components: {
    NavLinks,
  },
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
      state: 'hidden',
      lastScrollPos: 0,
    }
  },
  mounted(){
    window.addEventListener('scroll', (e) => {
      const newScrollPos = window.scrollY
      if(newScrollPos > this.lastScrollPos){
        document.getElementById('nav-panel-show-button').style.opacity = 0;
      }else if(newScrollPos < this.lastScrollPos){
        document.getElementById('nav-panel-show-button').style.opacity = 1;
      }
      this.lastScrollPos = newScrollPos
    })
  }
}
</script>

<style scoped>
@import '@/assets/css/nav.css';
</style>