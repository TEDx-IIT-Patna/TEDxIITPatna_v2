<template>
  <Nav open_button_color="white" open_button_style="icon" />

  <BackButton />

  <img src="@/assets/images/tedxiitpatna_logo-2W.png" class="logo watermark"
    v-if="this.screenWidth > this.screenHeight * 1.3">
  <div :class="['theme-bg', (this.screenWidth > this.screenHeight * 1.51) ? 'web' : 'mobile']">
    <img src="@/assets/past_events/poster-bg/poster-bg-2016.png">
  </div>
  <!-- eyeballed these 1.3 and 1.51 coefficients -->

  <section class="intro-wrapper full">
    <div class="bg"></div>
    <div class="content">
      <div class="title">Shedding Off Feathers</div>
      <div class="year">2016</div>
      <div class="intro">
        <div class="quote">
          <div class="text">
            "The secret of change is to focus all your energy not on fighting the old but on building the
            new"
          </div>
          <div class="name">- Socrates</div>
        </div>
        TEDxIITPatna believes that building anything new is possible when we let go of the old. Just as birds shed their
        feathers, allowing the new ones to embrace, taking them afresh to infinite skies, bringing out change is an
        inevitable part of one's life to keep walking the course of life.<br><br>
        <span>A change within us to become better.</span><br>
        <span>A change within the society to make this a better place to live in.</span>

      </div>
    </div>
  </section>

  <section class="speakers-wrapper full">
    <div class="content">
      <div class="title">Speakers.</div>
      <div class="speakers">
        <div class="speaker" v-for="speaker in this.speakerDetails" :key="speaker"
          @click="this.configureSpeakerModal(speaker)">
          <img :src="speaker.imageSrc">
        </div>
      </div>
    </div>
  </section>

  <section class="gallery-wrapper full">
    <div class="content">
      <div class="title">Gallery.</div>
      <div class="gallery">
        <div class="gallery-image" v-for="i in 6" @click="this.configureImageModal(i)">
          <img :src="require(`@/assets/gallery-images/2016/${i}.jpg`)">
        </div>
      </div>
    </div>
  </section>

  <TransitionGroup tag="div" name="fade">
    <!-- transition group for fade-in and fade-out effects -->

    <ImageModal v-if="this.showImageModal" :showModal="this.showImageModal" :imageSrc="this.imageModalSrc"
      @closeImageModal="this.closeAllModals" />

    <SpeakerModal v-if="this.showSpeakerModal" :showModal="this.showSpeakerModal" :imageSrc="this.speakerModalSrc"
      :name="this.speakerName" :title="this.speakerTitle" :content="this.speakerContent"
      :talkLink="this.speakerTalkLink" @closeSpeakerModal="this.closeAllModals" />

  </TransitionGroup>

  <!-- <Footer /> -->
</template>

<script>
import Nav from '@/components/Nav.vue'
// import Footer from '@/components/Footer.vue'
import BackButton from '@/components/BackButton.vue'
import ImageModal from '@/components/GalleryImageModal.vue'
import SpeakerModal from '@/components/SpeakerDetailModal.vue'

export default {
  name: "PastEventsView.2016",
  components: {
    Nav,
    // Footer,
    BackButton,
    ImageModal,
    SpeakerModal,
  },
  data() {
    return {
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
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
          name: "Ashok Krish",
          title: "Head of Social Media & Workplace Reimagination Practice at TCS Digital Enterprise at Tata Consultancy Services",
          imageSrc: require('@/assets/past_events/speaker-images/2016/Ashok.png'),
          content: "A multi-faceted and dynamic leader, a lifelong technology geek, an open-source enthusiast and a talented musician, he is specialised in the 'Human cloud', which describes the architecture of social technologies and their interplay between people and technology.",
          speakerTalkLink: "https://youtu.be/MiSbmP_VA38 "
        },
        {
          name: "Dr. George Puthuran",
          title: "Doctor, Ophthalmologist",
          imageSrc: require('@/assets/past_events/speaker-images/2016/George.png'),
          content: "Currently heads the department of Glaucoma at Aravind Eye Hospital, Madurai; Dr George is the South Zone representative of the present executive committee of the Glaucoma Society Of India. His video, Evolution Of An Affordable Aqueous Drainage Implant – The Indian Story, was one of the three winning films at the World Glaucoma Congress 2013 held in Vancouver.",
          speakerTalkLink: "https://youtu.be/MhhvNLztZKI "
        },
        {
          name: "Dr. Mohan Kameswaran",
          title: "Doctor, Otorhinolaryngologist",
          imageSrc: require('@/assets/past_events/speaker-images/2016/MohanKameshwaran.png'),
          content: "Being the founder of the MERF Institute of Speech and Hearing, Dr Mohan Kameswaran has many firsts to his credit, such as the performance of the first auditory brain stem implantation surgery, the first pediatric brain stem implantation surgery etc. He was awarded the fourth highest civilian honour of the Padma Shri, in 2006, for his contributions to Indian medicine.",
          speakerTalkLink: ""
        },
        {
          name: "Dr. Pushpak Bhattacharyya",
          title: "Professor, Computer Science and Engineering",
          imageSrc: require('@/assets/past_events/speaker-images/2016/Pushpak.png'),
          content: "Being president of ACL, the international apex body of NLP, he has made seminal contributions in NLP and ML, working in these fields for the last 25 years. Being a professor at the Dept. of CSE in IIT Bombay, he has written a textbook called 'Machine Translation', published by CRC Press, the USA, which brings foundational light points on the translation of Indian languages.",
          speakerTalkLink: ""
        },
        {
          name: "Tapabrata Chakraborty",
          title: "Mentalist",
          imageSrc: require('@/assets/past_events/speaker-images/2016/Tapabrata.png'),
          content: "A modern-day Mystifier from Kolkata, a close-up magician and mentalist, excels in cards and coin tricks, thought implantation, mind-reading, hypnosis, psychokinesis, telekinesis, blindfolded driving, and many more. He has been doing Magic for ten years. He is the Semi-Finalist of India's Got Talent and has appeared in some prominent televised shows.",
          speakerTalkLink: ""
        },
      ]
    }
  },
  methods: {
    onResize() {
      this.screenWidth = window.innerWidth
      this.screenHeight = window.innerHeight
    },
    configureImageModal(i) {
      this.imageModalSrc = require(`@/assets/gallery-images/2016/${i}.jpg`)
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
    },
    closeAllModalsOnKeyPress(e) {
      if (e.key === "Escape") {
        this.closeAllModals();
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
      window.addEventListener('keydown', this.closeAllModalsOnKeyPress)
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
    window.removeEventListener('keydown', this.closeAllModalsOnKeyPress)
  }
}
</script>

<style scoped>
@import '@/assets/css/past_events.common.css';

.theme-bg.mobile img {
  transform: translate(10%, -50%);
  opacity: 0.6;
}
</style>
