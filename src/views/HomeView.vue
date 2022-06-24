<template>
  <Nav v-if="this.screenWidth < 1500" />

  <section class="landing full" v-if="this.screenWidth >= 1500">
    <div class="black-bg"></div>
    <div class="countdown-container">
      <div class="title">Live in</div>
      <div class="countdown">
        <span id="days">{{ this.formatTime(this.displayDays) }}</span>d
        <span id="hrs">{{ this.formatTime(this.displayHours) }}</span>h
      </div>
    </div>
    <div class="paintedx">
      <img src="@/assets/images/paintedx.png">
    </div>
    <div class="logo-container">
      <img src="@/assets/images/barcode.png" class="barcode">
      <img src="@/assets/images/tedxiitpatna_logo-2B.png" class="logo">
      <HomeNav v-if="this.screenWidth >= 1500" />
    </div>
  </section>

  <section class="theme infaff full">
    <img src="@/assets/images/infinity-logo.png" class="bg">
    <span class="title">Infinite Affinities</span>
  </section>

  <section class="content-wrapper full">
    <div class="graphic" id="a"><img src="@/assets/images/Flower.png"></div>
    <div class="content">
      <div class="title">Togetherness.</div>
      <div class="text">Like every raindrop is a part of the ocean. Like every sand particle is a part of the sand
        castle, everyone is a part of one another. <br>
        When we delve deeper, we discover that we are a sum of every relationship we have made - a string of thoughts we
        share with every person we connect with. We at TEDxIITPatna truly believe that “Together, we are better”
        <br><br>
        Thus, through Infinite affinities, TEDxIITPatna celebrates unity and the spirit of togetherness. Let us join
        hands with the idea of, I am, because WE ALL ARE
      </div>
    </div>
  </section>

  <section class="content-wrapper full">
    <div class="graphic" id="b"><img src="@/assets/images/question_mark.png"></div>
    <div class="content">
      <div class="title">What is TEDx?</div>
      <div class="text">In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a program
        of local, self-organized events that bring people together to share a TED-like experience. Our event is called
        TEDxIITPatna, where x = independently organized TED event. At our TEDxIITPatna event, TED Talks video and live
        speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides
        general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.</div>
      <a href="https://www.ted.com/about/programs-initiatives/tedx-program" target="_blank" class="link"
        rel="noopener noreferrer">More about <strong>TEDx Program</strong></a>
    </div>
  </section>

  <section class="content-wrapper full">
    <div class="graphic" id="c"><img src="@/assets/images/cross_stroke.png"></div>
    <div class="content">
      <div class="title">TEDxIITPatna</div>
      <div class="text">TEDxIITPatna has continued to be a guiding light since 2016. Three stellar editions later -
        we've still got more to share! Going strong through Covid (with an impressive footfall of 1500+ participants),
        we are back with a REBOOT. <br><br> This year TEDx IITPATNA proudly presents it’s fourth edition. In this event,
        we shall highlight symbiosis and the team spirit that allows us to ascend to greater heights. Featuring diverse
        speakers from various walks of life, we hope to provide an enlightening experience to our community.
      </div>
      <router-link to="/about" class="link">About</router-link>
    </div>
  </section>

  <section class="speaker-application">
    <div class="title">Interested in becoming a speaker?</div>
    <a href="#" class="link">Speaker Applications →</a>
  </section>

  <Footer />
</template>

<script scoped>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import HomeNav from '@/components/Home.Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    Nav,
    Footer,
    HomeNav,
  },
  data() {
    return {
      screenWidth: window.innerWidth,
      countdownTarget: new Date("2022-09-03T00:00:00.000+05:30"),
      displayDays: 0,
      displayHours: 0,
      _days: 60 * 60 * 24,
      _hours: 60 * 60,
    }
  },
  methods: {
    onResize() {
      this.screenWidth = window.innerWidth
    },
    formatTime(val) {
      if (val >= 10) {
        return String(val)
      }
      else {
        return "0" + String(val)
      }
    },
    countdownLogic(interval) {
      const now = new Date()
      const deltaT = Math.trunc((this.countdownTarget.getTime() - now.getTime()) / 1000) // in seconds\

      if (deltaT < 0) {
        closeInterval(interval)
        return
      }

      const days = Math.trunc(deltaT / this._days)
      const hours = Math.trunc((deltaT - days * this._days) / this._hours)

      this.displayDays = days
      this.displayHours = hours
    }
  },
  created() {
    this.countdownLogic()
    const timer = setInterval(() => this.countdownLogic(timer), 1000)
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

<style>
@import '@/assets/css/home.css';
</style>