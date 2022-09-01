<template>
  <BackButton />
  <Nav :open_button_color='black' open_button_style="text" v-if="this.showWebView" />
  <Nav :open_button_color='black' open_button_style="icon" v-else />

  <!-- Web-view -->
  <section class="wrapper full" v-if="this.showWebView">
    <img src="@/assets/images/tedxiitpatna_logo-2B.png" class="logo watermark" v-if="screenWidth > 1300">
    <div class="partners-wrapper">
      <div class="title"><span style="color: white" class="box">OUR</span> PARTNERS.</div>
      <div class="spons-wrapper" v-for="(category, name) in partners" :key="name">
        <h1 class="partners-type">{{ name }}</h1>
        <div class="partner-scroller">
          <div class="partners-images" v-for="sponsor in category">
            <img :src="sponsor" />
          </div>
        </div>
      </div>
    </div>

  </section>

  <!-- Mobile-view -->
  <section class="wrapper mobile full" v-else>
    <img src="@/assets/images/tedxiitpatna_logo-2B.png" class="logo watermark">
    <div class="partners-wrapper">
      <div class="title"><span style="color: white" class="box">O</span>UR PARTNERS.</div>
      <div class="spons-wrapper" v-for="(category, name) in partners" :key="name">
        <h1 class="partners-type mobile">{{ name }}</h1>
        <div class="partner-scroller">
          <div class="partners-images" v-for="sponsor in category">
            <img :src="sponsor" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Nav from '@/components/Nav.vue'
import BackButton from '@/components/BackButton.vue'

export default {
  name: "PartnersView",
  components: {
    Nav,
    BackButton,
  },
  data() {
    return {
      screenWidth: window.innerWidth,
      showWebView: window.innerWidth >= 830,
      partners: {
        "Sponsors": [
          require('@/assets/images/partners/new_partners/BridgeLabz.png'),
          require('@/assets/images/partners/new_partners/BlueMedix.png'),
        ],
        "Merchandise Partners": [
          require('@/assets/images/partners/new_partners/printiconics.png'),
        ],
        "Media Partners": [
          require('@/assets/images/partners/new_partners/DainikJagran.jpg'),
        ],
        "Hospitality Partners": [
          require('@/assets/images/partners/new_partners/amalfi.png'),
        ],
        "Our Previous Partners": [
          require('@/assets/images/partners/anton paar_ silver .jpg'),
          require('@/assets/images/partners/Elsevier logo_bronze.gif'),
          require('@/assets/images/partners/gatan_logo_silver.png'),
          require('@/assets/images/partners/gdi.png'),
          require('@/assets/images/partners/maurya_gold.png'),
          require('@/assets/images/partners/merimeet.png'),
          require('@/assets/images/partners/santosh.png'),
          require('@/assets/images/partners/sd.png'),
          require('@/assets/images/partners/zwick_roell_logo_bronze.png'),
          require('@/assets/images/partners/ruban.png'),
          require('@/assets/images/partners/indianoil.png'),
          require('@/assets/images/partners/4.png'),
          require('@/assets/images/partners/varta.png'),
          require('@/assets/images/partners/ic.png'),
          require('@/assets/images/partners/pataliputra.png',)
        ]
      },
    }
  },
  methods: {
    onResize() {
      this.screenWidth = window.innerWidth
      this.showWebView = window.innerWidth >= 970
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
@import '@/assets/css/partners.css';
@import '@/assets/css/partners.mobile.css';
</style>
