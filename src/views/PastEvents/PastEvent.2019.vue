<template>
  <Nav open_button_color="white" />

  <img src="@/assets/images/tedxiitpatna_logo-2W.png" class="logo watermark">
  <div class="theme-bg"><img src="@/assets/past_events/poster-bg/poster-bg-2019.png"></div>

  <section class="intro-wrapper full">
    <div class="bg"></div>
    <div class="content">
      <div class="title">Metamorphosis</div>
      <div class="year">2019</div>
      <div class="intro">Our 2nd edition of TEDxIIT Patna depicted, "change is the only constant, the only
        inevitable." Permanence is an illusion, and whether it is nature transitioning from one season to another, the
        transformation of a caterpillar to a beautiful butterfly, or the evolution of man, everything in this universe
        is susceptible to change. The same applies to the pain that man is agonises over. The darkness today will have
        to change into the brightest light tomorrow. Hence, going with "Metamorphosis" as the theme, the idea is to hear
        from the experts themselves on how change has affected today's technology, entertainment and most importantly,
        the people and the society.
      </div>
    </div>
  </section>

  <section class="speakers-wrapper full">
    <div class="content">
      <div class="title">Speakers.</div>
      <div class="speakers">
        <div class="speaker" v-for="speaker in this.speakerDetails" @click="this.configureSpeakerModal(speaker)">
          <img :src="speaker.imageSrc">
        </div>
      </div>
    </div>
  </section>

  <section class="gallery-wrapper full">
    <div class="content">
      <div class="title">Gallery.</div>
      <div class="gallery">
        <div class="gallery-image" v-for="i in 16" @click="this.configureImageModal(i)">
          <img :src="require(`@/assets/gallery-images/2019/${i}.png`)">
        </div>
      </div>
    </div>
  </section>


  <TransitionGroup tag="div" name="fade">
    <div class="modal-close-btn" v-if="this.showImageModal || this.showSpeakerModal" @click="this.closeAllModals()"><i
        class="gg-close"></i>
    </div>

    <ImageModal v-if="this.showImageModal" :showModal="this.showImageModal" :imageSrc="this.imageModalSrc" />
    <SpeakerModal v-if="this.showSpeakerModal" :showModal="this.showSpeakerModal" :imageSrc="this.speakerModalSrc"
      :name="this.speakerName" :title="this.speakerTitle" :content="this.speakerContent"
      :talkLink="this.speakerTalkLink" />
  </TransitionGroup>

  <Footer />
</template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import ImageModal from '@/components/GalleryImageModal.vue'
import SpeakerModal from '@/components/GallerySpeakerModal.vue'

export default {
  name: "PastEventsView.2019",
  components: {
    Nav,
    Footer,
    ImageModal,
    SpeakerModal,
  },
  data() {
    return {
      screenWidth: window.innerWidth,
      showImageModal: false,
      imageModalSrc: null,
      showSpeakerModal: false,
      speakerModalSrc: null,
      speakerName: null,
      speakerTitle: null,
      speakerContent: null,
      speakerTalkLink: null,
      speakerDetails: [
        {
          name: "Dr. Prashant Jha",
          title: "Director BMJ innovations",
          imageSrc: require('@/assets/past_events/speaker-images/2019/PrashantJha.png'),
          content: "He graduated with MBBS and studied Family Medicine for his post-graduation. He trained as a Physician in India and then as a GP with RCGP, London. He is a significant influencer and wants to put India as the leader in medical sciences.",
          speakerTalkLink: ""
        },
        {
          name: "Anupam Jalote",
          title: "CEO, iCreate",
          imageSrc: require('@/assets/past_events/speaker-images/2019/AnupamJalote.png'),
          content: "He is an innovator, leader and mentors with domain expertise in startup ecosystems, institute buildings, promotion and funding of startups, driving international collaborations, renewable energy, telecom, customer experience and customer value management and strategic consulting. He is currently CEO at iCreate.",
          speakerTalkLink: ""
        },
        {
          name: "Tanvi Bhardwaj",
          titel: "CTO and Co-founder, MishiPay",
          imageSrc: require('@/assets/past_events/speaker-images/2019/Tanvi.png'),
          content: "She graduated from the University of Manchester with a First Class Honours degree in Computer Systems Engineering. She is now the co-founder and CTO of multi-award-winning retail technology company MishiPay, based in London and Banglore.",
          speakerTalkLink: ""
        },
        {
          name: "Kaushalendra Kumar",
          title: "Executive Director, Kaushalya Foundation",
          imageSrc: require('@/assets/past_events/speaker-images/2019/Kaushalendra.png'),
          content: "He is a social entrepreneur and founder of Kaushalya Foundation and KNIDS GREEN. His work wasn't only appreciated by society but by nations worldwide. He is an Ashoka Fellow and is included in the 256 future heroes of India, published by India Today",
          speakerTalkLink: ""
        },
        {
          name: "Shams Aalam",
          title: "Paralympic Swimmer",
          imageSrc: require('@/assets/past_events/speaker-images/2019/ShamsAalam.png'),
          content: "He is a true exemplification that the strength of their desire measures the size of one's success. He was awarded best emerging leader in disability sports and sports diplomacy by the US Department of State Global Sports Mentoring Program 2018.",
          speakerTalkLink: "https://www.youtube.com/watch?v=LjuAimWKBjs"
        },
      ]
    }
  },
  methods: {
    onResize() {
      this.screenWidth = window.innerWidth
    },
    configureImageModal(i) {
      this.imageModalSrc = require(`@/assets/gallery-images/2019/${i}.png`)
      this.showImageModal = true
    },
    configureSpeakerModal(speaker) {
      this.speakerModalSrc = speaker.imageSrc
      this.speakerName = speaker.name
      this.speakerTitle = speaker.title
      this.speakerContent = speaker.content
      this.speakerTalkLink = speaker.speakerTalkLink
      this.showSpeakerModal = true
    },
    closeAllModals() {
      this.showImageModal = false
      this.showSpeakerModal = false
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
@import '@/assets/css/past_events.common.css';
</style>
