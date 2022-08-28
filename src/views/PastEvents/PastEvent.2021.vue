<template>
  <Nav open_button_color="white" open_button_style="icon" />

  <BackButton />
  
  <img src="@/assets/images/tedxiitpatna_logo-2W.png" class="logo watermark"
    v-if="this.screenWidth > 1100 && this.screenWidth > this.screenHeight * 1.51">
  <div :class="['theme-bg', (this.screenWidth > this.screenHeight * 1.51) ? 'web' : 'mobile']">
    <img src="@/assets/past-events/poster-bg/poster-bg-2021.png">
  </div>
  <!-- eyeballed these 1.3 and 1.51 coefficients -->

  <section class="intro-wrapper full">
    <div class="bg"></div>
    <div class="content">
      <div class="title">Roar</div>
      <div class="catchphrase">The Acoustic of Strength</div>
      <div class="year">2021</div>
      <div class="intro">The 3rd Edition of TEDxIIT Patna, Roar- The Acoustic of Strength celebrated the spirit of
        resilience and inner strength. Nothing can silence the sound that roars from within - <span
          style="font-style: italic">the stronger one's will, the greater is their innate power</span>. The moment we
        rise above our fear of being judged and take control of our thoughts, we become capable of summoning the
        strength needed to face the most significant adversities. Unleash the roar of freedom, call upon spiritual power
        and join us on the path towards a better, stronger mindset.
      </div>
    </div>
  </section>

  <section :class="['speakers-wrapper', this.screenWidth > 1.4 * this.screenHeight ? 'full' : '']">
    <div class="content">
      <div class="title">Speakers.</div>
      <div class="speakers">
        <div class="speaker" v-for="speaker in this.speakerDetails" :key="speaker" @click="this.configureSpeakerModal(speaker)">
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
          <img :src="require(`@/assets/past-events/gallery-images/2021/${i}.png`)">
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

<script scoped>
import Nav from '@/components/Nav.vue'
// import Footer from '@/components/Footer.vue'
import BackButton from '@/components/BackButton.vue'
import ImageModal from '@/components/GalleryImageModal.vue'
import SpeakerModal from '@/components/SpeakerDetailModal.vue'

export default {
  name: "PastEventsView.2021",
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
          name: "Darren Hood",
          title: "Principle UX Designer",
          imageSrc: require('@/assets/past-events/speaker-images/2021/DarrenHood.png'),
          content: "He was our first speaker who is not only a <strong>UX Designer</strong> but also a <strong>UX Experience Architect</strong>. He has worked on projects for the <strong>Fortune 50</strong> and is the host of The World of UX Podcast on CX of M radio via Michigan State University.",
          speakerTalkLink: "https://youtu.be/6INnG61FLag"
        },
        {
          name: "Rahul Aggarwal",
          title: "Founder at Mission Oxygen",
          imageSrc: require('@/assets/past-events/speaker-images/2021/RahulAggarwal.png'),
          content: "He was our second speaker, founder of Mission Oxygen and Co-founder of India's first graphic design platform- Designhill. One of India's youngest entrepreneurs, Rahul, is a passionate investor and marketer who acts as a startup advisor.",
          speakerTalkLink: ""
        },
        {
          name: "Rishi Raj",
          title: "Associate Professor – IIT Patna",
          imageSrc: require('@/assets/past-events/speaker-images/2021/RishiRaj.png'),
          content: "He was our third speaker. He is a magnificent professor at IIT Patna. With five patents and more than 50 research papers, Dr Rishi has also worked as a Postdoctoral Associate at the Massachusetts Institute of Technology.",
          speakerTalkLink: "https://youtu.be/HMvYMLkoShg"
        },
        {
          name: "Vivek Ram",
          title: "Senapati at Vaanarsena Studios",
          imageSrc: require('@/assets/past-events/speaker-images/2021/VivekRam.png'),
          content: "He is a well-known CG and VFX artist and has worked on many international feature films, including Fast and Furious 3, The Incredible Hulk, Night at the Museum and many more. As the founder of Vanarsena studios, he is exceptionally passionate about mythical stories.",
          speakerTalkLink: "https://youtu.be/bG4VLt6uVUc"
        },
        {
          name: "Yusra Mardini",
          title: "Swimmer, Olympian",
          imageSrc: require('@/assets/past-events/speaker-images/2021/YusraMardini.png'),
          content: "She is an Olympic swimmer and is the youngest ever Goodwill Ambassador for UNHCR, the UN Refugee Agency. A Syrian refugee herself, she advocates for refugees globally and has become a powerful voice for the forcibly displaced across the world. Yusra's incredible story is told in her memoir 'Butterfly: From Refugee to Olympian - My Story of Rescue, Hope and Triumph'",
          speakerTalkLink: "https://youtu.be/xQ3gAIX6a7E"
        },
        {
          name: "Rupesh Mahore",
          title: "Researcher and Innovator",
          imageSrc: require('@/assets/past-events/speaker-images/2021/RupeshMahore.png'),
          content: "Currently working as a remote research intern at Harvard University, Rupesh is deeply interested in physics. This brilliant personality is the mind behind OxyServe, a monitoring device that could save the lives of covid 19 patients. Having worked with Padma Shri Prof. H.C.Verma, he has also worked on a project used in the Chandrayan-2.",
          speakerTalkLink: ""
        },
        {
          name: "Zoya Agarwal",
          title: "Aircraft Pilot, UN Spokesperson",
          imageSrc: require('@/assets/past-events/speaker-images/2021/CaptainZoyaAgarwal.png'),
          content: "The youngest female pilot to fly a Boeing 777,  Captain Zoya turned a page in Indian aviation history when she commanded an all-female cockpit crew that went over the North Pole from San Francisco to Bengaluru on the world's longest non-stop commercial trip. Zoya is also the spokesperson of Generation Equality by the UN.",
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
      this.imageModalSrc = require(`@/assets/past-events/gallery-images/2021/${i}.png`)
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

.theme-bg.mobile img{
    transform: translate(17%, -50%);
    opacity: 0.6;
}
</style>
