<template>
  <Nav open_button_color="white" />
  <img src="@/assets/images/tedxiitpatna_logo-2W.png" class="logo watermark">
  <div class="theme-bg"><img src="@/assets/past_events/poster-bg/poster-bg-2016.png"></div>
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
        <div class="gallery-image" v-for="i in 6" @click="this.configureImageModal(i)">
          <img :src="require(`@/assets/gallery-images/2016/${i}.jpg`)">
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
          name: "Ashok Krish",
          title: "Head of Social Media & Workplace Reimagination Practice at TCS Digital Enterprise at Tata Consultancy Services",
          imageSrc: require('@/assets/past_events/speaker-images/2016/Ashok.png'),
          content: "Ashok Krish is the head of Social Media & Workplace Reimagination Practice at TCS Digital Enterprise at Tata Consultancy Services. A multi-faceted and dynamic leader, he is a lifelong technology geek, an open-source enthusiast and a talented musician. He specialises in the 'Human cloud', which describes the architecture of social technologies and their interplay between people and technology.",
          speakerTalkLink: "https://youtu.be/MiSbmP_VA38 "
        },
        {
          name: "Dr. George Puthuran",
          title: "Doctor, Ophthalmologist",
          imageSrc: require('@/assets/past_events/speaker-images/2016/George.png'),
          content: "Dr. George V Puthuran currently heads the department of Glaucoma at Aravind Eye Hospital, Madurai. Dr George is the South Zone representative of the present executive committee of the Glaucoma Society Of India. Dr George worked closely with Aurolab System in developing a Glaucoma Drainage Device and is the principal investigator of Aurolab Aqueous Drainage Implant (AADI ) - a cost-effective alternative for patients with refractory glaucoma in resource-poor communities.  Dr George's video, Evolution Of An Affordable Aqueous Drainage Implant – The Indian Story, was one of the three winning films at the World Glaucoma Congress 2013 held in Vancouver.",
          speakerTalkLink: "https://youtu.be/MhhvNLztZKI "
        },
        {
          name: "Dr. Mohan Kameswaran",
          title: "Doctor, Otorhinolaryngologist",
          imageSrc: require('@/assets/past_events/speaker-images/2016/MohanKameshwaran.png'),
          content: "Dr. Mohan Kameswaran is an Indian otorhinolaryngologist, medical academic and the founder of MERF Institute of Speech and Hearing, a Chennai-based institution providing advanced training in audiology and speech-language pathology. He has many firsts to his credit, such as the performance of the first auditory brain stem implantation surgery in South and South-East Asia, the first pediatric brain stem implantation surgery in Asia, the first implantable hearing device surgery in the Asia Pacific region, and the first to introduce KTP/532 laser-assisted ENT surgery in India. The Government of India awarded him the fourth highest civilian honour of the Padma Shri, in 2006, for his contributions to Indian medicine.",
          speakerTalkLink: ""
        },
        {
          name: "Dr. Pushpak Bhattacharyya",
          title: "Professor, Computer Science and Engineering",
          imageSrc: require('@/assets/past_events/speaker-images/2016/Pushpak.png'),
          content: "Dr. Pushpak Bhattacharyya has made seminal contributions in NLP and ML, working in these fields for the last 25 years. In addition to being a professor at the Dept. of CSE in IIT Bombay, he has been a visiting Professor at Stanford University (2004) and a Distinguished Lecturer at the University of Houston, USA (2012), and Visiting Scholar- at MIT (1990). He is the President of the Association of Computational Linguistics (ACL), the international apex body of NLP. He has written a textbook called 'Machine Translation', published by CRC Press, the USA, which brings foundational light points on the translation of Indian languages.",
          speakerTalkLink: ""
        },
        {
          name: "6.	Tapabrata Chakraborty",
          title: "Mentalist",
          imageSrc: require('@/assets/past_events/speaker-images/2016/Tapabrata.png'),
          content: "Tapabrata Chakraborty is a modern-day Mystifier from Kolkata who is a close-up magician and mentalist. He excels in cards and coin tricks, thought implantation, mind-reading, hypnosis, psychokinesis, telekinesis, blindfolded driving, and many more. Touted as India's next sensation in the field, he has been doing Magic for ten years. He is the Semi-Finalist of India's Got Talent and has appeared in some prominent televised shows.",
          speakerTalkLink: ""
        },
      ]
    }
  },
  methods: {
    onResize() {
      this.screenWidth = window.innerWidth
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
