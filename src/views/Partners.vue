<template>
  <BackButton />
  <Nav :open_button_color='black' open_button_style="text" v-if="this.showWebView" />
  <Nav :open_button_color='black' open_button_style="icon" v-else />

  <!-- web-view -->
  <section class="wrapper full" v-if="this.showWebView">
    <img src="@/assets/images/tedxiitpatna_logo-2B.png" class="logo watermark" v-if="screenWidth > 1300">
    <div class="partners-wrapper">
      <div class="title"><span style="color: white" class="box">OUR</span> PARTNERS.</div>

      
      <h1 class="partners-type">Sponsors</h1>
      <div class="partner-scroller">
        <div class="partners-images" v-for="sponsor in this.sponsors">
            <img :src="sponsor"/>
        </div>
      </div>
      
      <h1 class="partners-type">Merchandise Partners</h1>
      <div class="partner-scroller">
        <div class="partners-images" v-for="sponsor in this.merchandise">
            <img :src="sponsor"/>
        </div>
      </div>

      <h1 class="partners-type">Hospitality Partners</h1>
      <div class="partner-scroller">
        <div class="partners-images" v-for="sponsor in this.hospitality">
            <img :src="sponsor"/>
        </div>
      </div>

      <h1 class="partners-type">Media Partners</h1>
      <div class="partner-scroller">
        <div class="partners-images" v-for="sponsor in this.media">
            <img :src="sponsor"/>
        </div>
      </div>

      <h1 class="partners-type">Our Previous Partners</h1>
      <div class="partner-scroller">
        <div class="partners-images" v-for="partner in this.partner_images">
            <img :src="partner"/>
        </div>
      </div>
    </div>

  </section>

  <!-- mobile-view -->
  <section class="wrapper mobile full" v-else>
    <img src="@/assets/images/tedxiitpatna_logo-2B.png" class="logo watermark">
    <div class="partners-wrapper">
      <div class="title"><span style="color: white" class="box">O</span>UR PARTNERS.</div>

      <h1 class="partners-type mobile">Sponsors</h1>
      <div class="partner-scroller">
        <div class="partners-images" v-for="sponsor in this.sponsors">
            <img :src="sponsor"/>
        </div>
      </div>
      
      <h1 class="partners-type mobile">Merchandise Partners</h1>
      <div class="partner-scroller">
        <div class="partners-images" v-for="sponsor in this.merchandise">
            <img :src="sponsor"/>
        </div>
      </div>

      <h1 class="partners-type mobile">Hospitality Partners</h1>
      <div class="partner-scroller">
        <div class="partners-images" v-for="sponsor in this.hospitality">
            <img :src="sponsor"/>
        </div>
      </div>

      <h1 class="partners-type mobile">Media Partners</h1>
      <div class="partner-scroller">
        <div class="partners-images" v-for="sponsor in this.media">
            <img :src="sponsor"/>
        </div>
      </div>

      <h1 class="partners-type mobile">Our Previous Partners</h1>
      <div class="partner-scroller">
        <div class="partners-images" v-for="partner in this.partner_images">
            <img :src="partner"/>
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
      partner_images:[
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
      ],
      sponsors:[
        require('@/assets/images/partners/new_partners/BridgeLabz.png'),
        require('@/assets/images/partners/new_partners/BlueMedix.png'),
      ],
      merchandise:[
        require('@/assets/images/partners/new_partners/printiconics.png'),
      ],
      media:[
        require('@/assets/images/partners/new_partners/DainikJagran.jpg'),
      ],
      hospitality:[
        require('@/assets/images/partners/new_partners/amalfi.png'),
      ],
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
