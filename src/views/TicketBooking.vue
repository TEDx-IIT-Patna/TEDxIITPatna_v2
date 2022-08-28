<template>
  <Nav :open_button_color="this.showWebView ? 'white' : 'white'" open_button_style="icon" />
  <!-- <BackButton /> -->
  <div :class="['ticketbooking-wrapper', !this.showWebView ? 'mobile' : 'web']">
    <div class="banner web" v-if="this.screenWidth > 460"></div>
    <div class="banner mobile" v-if="this.screenWidth <= 460"></div>
    <div class="book-tickets">Book <br/>Tickets</div>
    <div :class="['tickets', !this.showWebView ? 'mobile' : 'web']">
    <div  v-for="(sessions,index) in speakers" :key="index">
      <div class="event" v-for="(content,index) in sessions" :key="index" @click="this.configureBookingModal(content)"><div class="hash">#</div><div class="number">{{ content.Session}}</div><div class="session">session</div></div>
      </div>
    </div>
  </div>
    <TicketModal v-if="this.showBookingModal" :showModal="this.showBookingModal" :Path1="this.Path1" :Path2="this.Path2"
    :Name1="this.Name1" :Name2="this.Name2" :Time1="this.Time1" :Time2="this.Time2" :Link="this.Link" :Session="this.Session" @closeBookingModal="this.closeAllModals" />
</template>

<script>
import Nav from '@/components/Nav.vue'
import BackButton from '@/components/BackButton.vue'
import TicketModal from '@/components/TicketBookingModal.vue'
export default {
  name: "TicketBookingView",
  components:{
    Nav,
    BackButton,
    TicketModal
  },
  data() {
    return {
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      showWebView: window.innerWidth >= 900,
      Path1: null,
      Path2: null,
      Name1: null,
      Name2: null,
      Time1: null,
      Time2: null,
      Link: null,
      Session: null,
      showBookingModal: false,
      speakers:{
        "Session1":[
          {
          Session:"1",
          Name1:"Javed Khatri",
          Time1:"12:00 PM - 12:30 PM",
          Name2:"Phani Tetali",
          Time2:"12:45 PM - 1:15 PM",
          Path1: require('@/assets/images/Team_Image/prof.png'),
          Path2: require('@/assets/images/Team_Image/prof.png'),
          Link:"https://www.facebook.com/alakh.panday",
          }
        ],
        // "Session2":[
        //   {
        //   Session:"2",
        //   Name2:"Arati/Tetseo",
        //   Time2:"3:45 PM - 4:15 PM",
        //   Path1: require('@/assets/images/Team_Image/prof.png'),
        //   Path2: require('@/assets/images/Team_Image/prof.png'),
        //   Link:"https://www.facebook.com/alakh.panday",
        //   }
        // ],
        "Session2":[
          {
          Session:"2",
          Name1:"Sriparna Saha",
          Time1:"11:00 AM - 11:30 AM",
          Name2:"Alakh Pandey",
          Time2:"11:45 AM - 12:15 PM",
          Path1: require('@/assets/images/Team_Image/prof.png'),
          Path2: require('@/assets/images/Team_Image/prof.png'),
          Link:"https://www.facebook.com/alakh.panday",
          }
        ],
        "Session3":[
          {
          Session:"3",
          Name1:"Klanz",
          Time1:"3:00 PM - 3:30 PM",
          Name2:"Sridharan Devrajan",
          Time2:"3:45 PM - 4:15 PM",
          Path1: require('@/assets/images/Team_Image/prof.png'),
          Path2: require('@/assets/images/Team_Image/prof.png'),
          Link:"https://www.facebook.com/alakh.panday",
          }
        ],
      }
    }
  },
  methods: {
    onResize() {
      this.screenWidth = window.innerWidth
      this.screenHeight = window.innerHeight
      this.showWebView = window.innerWidth >= 900
    },
    configureBookingModal(content) {
      this.Path1 = content.Path1
      this.Path2 = content.Path2
      this.Name1 = content.Name1
      this.Name2 = content.Name2
      this.Time1 = content.Time1
      this.Time2 = content.Time2
      this.Link = content.Link
      this.Session = content.Session
      this.showBookingModal = true
    },
    closeAllModals() {
      this.showBookingModal = false
    },
    closeAllModalsOnKeyPress(e) {
      if (e.key === "Escape") {
        this.closeAllModals()
      }
    }
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
