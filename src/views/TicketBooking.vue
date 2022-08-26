<template>
  <Nav :open_button_color="this.showWebView ? 'white' : 'white'" open_button_style="icon" />
  <!-- <BackButton /> -->
  <div :class="['ticketbooking-wrapper', !this.showWebView ? 'mobile' : 'web']">
    <div class="banner web" v-if="this.screenWidth > 460"></div>
    <div class="banner mobile" v-if="this.screenWidth <= 460"></div>
    <div class="book-tickets">Book <br/>Tickets</div>
    <div :class="['tickets', !this.showWebView ? 'mobile' : 'web']">
      <div class="event"><div class="hash">#</div><div class="number">1</div><div class="session">session</div></div>
      <div class="event"><div class="hash">#</div><div class="number">2</div><div class="session">session</div></div>
      <div class="event"><div class="hash">#</div><div class="number">3</div><div class="session">session</div></div>
      <div class="event"><div class="hash">#</div><div class="number">4</div><div class="session">session</div></div>
      
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import BackButton from '@/components/BackButton.vue'
export default {
  name: "TicketBookingView",
  components:{
    Nav,
    BackButton
  },
  data() {
    return {
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      showWebView: window.innerWidth >= 900,
    }
  },
  methods: {
    onResize() {
      this.screenWidth = window.innerWidth
      this.screenHeight = window.innerHeight
      this.showWebView = window.innerWidth >= 900
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
@import '@/assets/css/ticket_booking.css';
@import '@/assets/css/ticket_booking.mobile.css';
</style>
