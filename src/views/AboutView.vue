<template>
  <Nav :open_button_color="this.showWebView ? 'white' : 'black'" open_button_style="icon" />
  <BackButton />

  <!-- Red Ribbon(web)/Background Text(mobile) -->
  <div :class="['section-title', !this.showWebView ? 'mobile' : 'web']">
    <span class="text">{{ sectionTitle }}</span>
  </div>

  <!-- About Section - web and mobile view -->
  <section :class="['about', !this.showWebView ? 'mobile' : 'web']">
    <div class="text-wrapper">
      <div class="content">
        <div class="sub-heading">About</div>
        <div class="heading">IIT Patna</div>

        <!-- Text in web view -->
        <div class="text" id="expandable-text" v-if="this.showWebView">
          Indian Institute of Technology Patna is one of the new IITs established by an Act of
          the Indian Parliament on August 06, 2008. Offering various undergraduate, postgraduate, and
          post-doctoral degrees, it is one of the fastest developing colleges in India.<br /><br />
          Emerging as a center of thriving excellence, the lush green campus of IIT Patna spans 500 acres. Many
          inquisitive minds, eager to expand their technical prowess, are ably supported by astute professors and
          state-of-the-art laboratories.<br /><br />
          As the site for vibrant fests – Nebula, Reverberance, Celesta, Anwesha, Infinito– IIT Patna sees
          overwhelming participation from all over the country<span id="dots">...</span><span id="more">. TEDxIITPatna
            is one of the more formal events in
            this Institute of National Importance. IIT Patna is committed to providing the nation with well-rounded
            individuals with professional and scientific competence of the highest degree.</span>
        </div>
        <!-- Text in mobile view -->
        <div class="text" id="expandable-text" v-else>
          Indian Institute of Technology Patna is one of the new IITs established by an Act of
          the Indian Parliament on August 06, 2008. Offering various undergraduate, postgraduate, and
          post-doctoral degrees, it is one of the fastest developing colleges in India.<br /><br />
          Emerging as a center of thriving excellence, the lush green campus of IIT Patna spans 500 acres. Many
          inquisitive minds, eager<span id="dots">...</span><span id="more"> to expand their technical prowess, are ably
            supported by astute professors and
            state-of-the-art laboratories.<br /><br />
            As the site for vibrant fests – Nebula, Reverberance, Celesta, Anwesha, Infinito– IIT Patna sees
            overwhelming participation from all over the country. TEDxIITPatna is one of the more formal events in
            this Institute of National Importance. IIT Patna is committed to providing the nation with well-rounded
            individuals with professional and scientific competence of the highest degree.</span>
        </div>

        <a :class="['expand-btn', !this.showWebView ? 'mobile' : 'web']" @click="expandText($event)">
          EXPAND
          <i class="down-arrow fa-solid fa-chevron-down fa-xs"></i>
        </a>
      </div>
    </div>

    <div class="text-wrapper">
      <div class="content">
        <div class="sub-heading">About</div>
        <div class="heading">TED</div>
        <!-- Text in web view -->
        <div class="text" id="expandable-text" v-if="this.showWebView">
          TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in
          California 30 years ago, TED has grown to support its mission with multiple initiatives. The two annual
          TED Conferences invite the world's leading thinkers and doers to speak for 18 minutes or less. Many of
          these talks are then made available, free, at TED.com. TED
          speakers have included Bill Gates, Jane
          Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan
          Nilekani, Philippe Starck, Ngozi Okonjo-Iweala,
          Sal Khan and Daniel Kahneman.<br /><br />
          The annual TED Conference takes place each spring in Vancouver, British Columbia. TED's media
          initiatives include TED.com, where new TED Talks are posted daily; TED Translators, which provides
          subtitles and interactive transcripts as well as translations from volunteers worldwide; the educational
          initiative TED-Ed.<span id="dots">...</span><span id="more"> TED has established The Audacious Project that
            takes a collaborative approach to
            funding ideas with the potential to create change at thrilling scale; TEDx, which supports individuals
            or groups in hosting local, self- organized TED-style events around the world, and the TED Fellows
            program, helping world-changing innovators from around the globe to amplify the impact of their
            remarkable projects and activities.<br /><br />
            Follow TED on Twitter at <a href="http://twitter.com/TEDTalks">http://twitter.com/TEDTalks</a>, or on
            Facebook at <a href="http://www.facebook.com/TED">http://www.facebook.com/TED</a>.</span>
        </div>
        <!-- Text in mobile view -->
        <div class="text" id="expandable-text" v-else>
          TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in
          California 30 years ago, TED has grown to support its mission with multiple initiatives. The two annual
          TED Conferences invite the world's leading thinkers and doers to speak for 18 minutes or less. Many of
          these talks are then made available, free, at TED.com. TED
          speakers have included Bill Gates, Jane
          Goodall, Elizabeth Gilbert<span id="dots">...</span><span id="more">, Sir Richard Branson, Nandan
            Nilekani, Philippe Starck, Ngozi Okonjo-Iweala,
            Sal Khan and Daniel Kahneman.<br /><br />
            The annual TED Conference takes place each spring in Vancouver, British Columbia. TED's media
            initiatives include TED.com, where new TED Talks are posted daily; TED Translators, which provides
            subtitles and interactive transcripts as well as translations from volunteers worldwide; the educational
            initiative TED-Ed. TED has established The Audacious Project that takes a collaborative approach to
            funding ideas with the potential to create change at thrilling scale; TEDx, which supports individuals
            or groups in hosting local, self- organized TED-style events around the world, and the TED Fellows
            program, helping world-changing innovators from around the globe to amplify the impact of their
            remarkable projects and activities.<br /><br />
            Follow TED on Twitter at <a href="http://twitter.com/TEDTalks">http://twitter.com/TEDTalks</a>, or on
            Facebook at <a href="http://www.facebook.com/TED">http://www.facebook.com/TED</a>.</span>
        </div>

        <a :class="['expand-btn', !this.showWebView ? 'mobile' : 'web']" @click="expandText($event)">
          EXPAND
          <i class="down-arrow fa-solid fa-chevron-down fa-xs"></i>
        </a>
      </div>
    </div>

  </section>

  <!-- Team Section - web view -->
  <section :class="['team', !this.showWebView ? 'mobile' : 'web']">
    <!-- group = one committee section -->
    <div class="group" v-for="(items, name) in team" :key="items">
      <div class="content">

        <div class="sub-heading">Team</div>
        <div class="heading">{{ name }}</div>

        <div class="card-container">

          <div class="card" v-for="(person, index) in items" :key="index">
            <div class="image" @click="this.configureSpeakerModal(person)"><img :src="person.Path" alt="..."></div>
            <div class="name"> {{ person.Name }} </div>
            <div class="post"> {{ person.Post }} </div>
            <div class="socials">
              <div class="social-icons" v-for="(social, index) in person.Socials" :key="index">
                <a target="__blank" :href="social[0]"><i class="fa-brands" :class="social[1]"></i></a>
              </div>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  </section>

  <AboutModal v-if="this.showAboutModal" :showModal="this.showAboutModal" :Path="this.aboutModalSrc"
    :Name="this.aboutName" :Committee="this.aboutPost" @closeAboutModal="this.closeAllModals"
    :Socials="this.aboutSocials" />

  <Footer />

</template>


<script scoped>
import Nav from '@/components/Nav.vue'
import BackButton from '@/components/BackButton.vue'
import Footer from '@/components/Footer.vue'
import AboutModal from '@/components/AboutMobileModal.vue'

export default {
  name: 'AboutView',
  components: {
    Nav,
    BackButton,
    Footer,
    AboutModal,
  },
  data() {
    return {
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      showWebView: window.innerWidth >= 900,

      team: {
        "PIC": [
          {
            index: "0",
            Name: "Dr. S.K. Samanta",
            Post: "Professor-In-Charge",
            Roll: "",
            Path: require('@/assets/images/Team_Image/prof.png'),
            Socials: {
              Linkedin: ["https://www.linkedin.com/in/sujoy-kumar-samanta-a0bb91238/", "fa-linkedin-in"],
            },
          },
        ],
        "Organisers": [
          {
            index: "1",
            Name: "Palak Totala",
            Post: "Organiser",
            Roll: "2001CS84",
            Path: require('@/assets/images/Team_Image/1.jpg'),
            Socials: {
              Linkedin: ["https://www.linkedin.com/in/palak-totala-510875203/", "fa-linkedin-in"],
            },
          },
          {
            index: "2",
            Name: "Nischal Jain",
            Post: "Co-organiser",
            Roll: "2001ME41",
            Path: require('@/assets/images/Team_Image/2.jpg'),
            Socials: {
              Linkedin: ["https://www.linkedin.com/in/nischal-jain-4ab036195/", "fa-linkedin-in"],
            },
          },
        ],
        "Planning & Curation": [
          {
            index: "6",
            Name: "Pradipti Mondal",
            Post: "Co-ordinator",
            Roll: "2001EE44",
            Path: require('@/assets/images/Team_Image/6.jpg'),
            Socials: {
              Linkedin: ["https://www.linkedin.com/in/pradipti-mondal-3146ac/", "fa-linkedin-in"],
            },
          },
          {
            index: "16",
            Name: "Ashfaq Ahmed",
            Post: "Co-ordinator",
            Roll: "2001EE44",
            Path: require('@/assets/images/Team_Image/16.jpg'),
            Socials: {
              Linkedin: ["https://www.linkedin.com/in/ashfaq-iitp/", "fa-linkedin-in"],
            },
          },
          {
            index: "20",
            Name: "Shaheer tanveer",
            Post: "Co-ordinator",
            Roll: "2001EE44",
            Path: require('@/assets/images/Team_Image/20.jpg'),
            Socials: {
              Linkedin: ["https://www.linkedin.com/in/shaheertanveer/", "fa-linkedin-in"],
            },
          },
        ],
        "Sponsorship": [
          {
            index: "7",
            Name: "Sai Nandan",
            Post: "Co-ordinator",
            Roll: "2001CB46",
            Path: require('@/assets/images/Team_Image/7.jpg'),
            Socials: {
              Linkedin: ["https://www.linkedin.com/in/sai-nandan-panigrahy/", "fa-linkedin-in"],
            },
          },
          {
            index: "8",
            Name: "Athul Krishna K",
            Post: "Co-ordinator",
            Roll: "2001ME85",
            Path: require('@/assets/images/Team_Image/8.jpg'),
            Socials: {
              Linkedin: ["https://www.linkedin.com/in/athul-krishna-k-688262223/", "fa-linkedin-in"],
            },
          },
          {
            index: "14",
            Name: "Rohit Sinha",
            Post: "Co-ordinator",
            Roll: "2001MM26",
            Path: require('@/assets/images/Team_Image/14.jpg'),
            Socials: {
              Linkedin: ["https://www.linkedin.com/in/rohit-sinha-1282a821b/", "fa-linkedin-in"],
            },
          },
        ],
        "Production": [
          {
            index: "9",
            Name: "Devna Srivastava",
            Post: "Co-ordinator",
            Roll: "2001MM13",
            Path: require('@/assets/images/Team_Image/9.jpg'),
            Socials: {
              Linkedin: ["https://www.linkedin.com/in/devna-srivastava-58040621a/", "fa-linkedin-in"],
            },
          },
          {
            index: "18",
            Name: "Abhimanyu Singh",
            Post: "Prod",
            Roll: "2001MM13",
            Path: require('@/assets/images/Team_Image/18.jpg'),
            Socials: {
              Linkedin: ["https://www.linkedin.com/in/abhimanyu-singh-bisht-91b3b0200/", "fa-linkedin-in"],
            },
          },
          {
            index: "19",
            Name: "Yash Ajitsaria",
            Post: "Co-ordinator",
            Roll: "2001MM13",
            Path: require('@/assets/images/Team_Image/19.jpg'),
            Socials: {
              Linkedin: ["https://www.linkedin.com/in/yash-ajitsaria-0b56a11bb/", "fa-linkedin-in"],
            },
          },
        ],
        "Web & App": [
          {
            index: "3",
            Name: "Pratyush Kumar",
            Post: "Co-ordinator",
            Roll: "2001ME51",
            Path: require('@/assets/images/Team_Image/3.jpg'),
            Socials: {
              Linkedin: ["https://www.linkedin.com/in/pratyushkumar1032/", "fa-linkedin-in"],
            },
          },
          {
            index: "4",
            Name: "Suyog Chaudhari",
            Post: "Co-ordinator",
            Roll: "2001EE77",
            Path: require('@/assets/images/Team_Image/4.jpg'),
            Socials: {
              Linkedin: ["https://www.linkedin.com/in/suyog-chaudhari-5b95021b9/", "fa-linkedin-in"],
            },
          },
        ],
        "Registration": [
          {
            index: "10",
            Name: "Abhinav Mishra",
            Post: "Co-ordinator",
            Roll: "2001MM01",
            Path: require('@/assets/images/Team_Image/10.jpg'),
            Socials: {
              Linkedin: ["https://www.linkedin.com/in/abhinav2901/", "fa-linkedin-in"],
            },
          },
          {
            index: "11",
            Name: "M.L.N. Keertana",
            Post: "Co-ordinator",
            Roll: "2001CS47",
            Path: require('@/assets/images/Team_Image/11.jpg'),
            Socials: {
              Linkedin: ["https://www.linkedin.com/in/mln-keertana-5aab50217/", "fa-linkedin-in"],
            },
          },
        ],
        "Media & Public Relations": [
          {
            index: "13",
            Name: "Hardik Tiwari",
            Post: "Co-ordinator",
            Roll: "2001MM15",
            Path: require('@/assets/images/Team_Image/13.jpg'),
            Socials: {
              Linkedin: ["https://www.linkedin.com/in/hardiktiwari/", "fa-linkedin-in"],
            },
          },
          {
            index: "15",
            Name: "Aarav Arya",
            Post: "Co-ordinator",
            Roll: "2001ME01",
            Path: require('@/assets/images/Team_Image/15.jpg'),
            Socials: {
              Linkedin: ["https://www.linkedin.com/in/aarav-arya-b80909239/", "fa-linkedin-in"],
            },
          }
        ],
        "Editorial": [
          {
            index: "12",
            Name: "Khushi Shah",
            Post: "Co-ordinator",
            Roll: "2001EE91",
            Path: require('@/assets/images/Team_Image/12.jpg'),
            Socials: {
              Linkedin: ["https://www.linkedin.com/in/khushishah8221/", "fa-linkedin-in"],
            },
          },],
        "Hospitality": [
          {
            index: "5",
            Name: "Vani Grover",
            Post: "Co-ordinator",
            Roll: "2001CE68",
            Path: require('@/assets/images/Team_Image/5.jpg'),
            Socials: {
              Linkedin: ["https://www.linkedin.com/in/vani-grover-77078a207/", "fa-linkedin-in"],
            },
          },],
        "Creatives & Design": [
          {
            index: "17",
            Name: "Farhaan Alam",
            Post: "Co-ordinator",
            Roll: "2001ME25",
            Path: require('@/assets/images/Team_Image/17.jpg'),
            Socials: {
              Linkedin: ["https://www.linkedin.com/in/farhaan-alam/", "fa-linkedin-in"],
            },
          },],
        "Conveners": [
          {
            index: "21",
            Name: "Deepshikha",
            Post: "Convener",
            Roll: "2001MM15",
            Path: require('@/assets/images/Team_Image/21.jpg'),
            Socials: {
              Linkedin: ["https://www.linkedin.com/in/deepshikha-1234/", "fa-linkedin-in"],
            },
          },
          {
            index: "22",
            Name: "Sajal Kumar",
            Post: "Convener",
            Roll: "2001ME01",
            Path: require('@/assets/images/Team_Image/22.jpg'),
            Socials: {
              Linkedin: ["https://www.linkedin.com/in/sajalkumar247/", "fa-linkedin-in"],
            },
          }
        ]
      },
      
      sectionTitle: "About.",
      showAboutModal: false,
      aboutModalSrc: null,
      aboutName: null,
      aboutPost: null,
      aboutSocials: null,

    }
  },
  methods: {
    onResize() {
      this.screenWidth = window.innerWidth
      this.screenHeight = window.innerHeight
      this.showWebView = window.innerWidth >= 900
    },
    expandText(event) {
      const btnText = event.target;
      const btnSiblings = Array.from(btnText.parentNode.childNodes)
      
      const mainText = btnSiblings.find(x => x.id === 'expandable-text')
      const mainTextChildren = Array.from(mainText.childNodes)

      const dots = mainTextChildren.find(x => x.id === 'dots')
      const moreText = mainTextChildren.find(x => x.id === 'more')

      if(dots.style.display === 'none'){
        dots.style.display = "inline"
        moreText.style.display = "none"

        btnText.innerHTML = btnText.innerHTML.replace(/Collapse/gmi, 'Expand')
      }else{
        dots.style.display = "none"
        moreText.style.display = "inline"

        btnText.innerHTML = btnText.innerHTML.replace(/Expand/gmi, 'Collapse')
      }
    },
    configureSpeakerModal(speaker) {
      this.aboutModalSrc = speaker.Path
      this.aboutName = speaker.Name
      this.aboutPost = speaker.Post
      this.aboutSocials = speaker.Socials
      this.showAboutModal = true
    },
    closeAllModals() {
      this.showAboutModal = false
    },
    closeAllModalsOnKeyPress(e) {
      if (e.key === "Escape") {
        this.closeAllModals()
      }
    }
  },
  mounted() {
    window.onscroll = () => {
      const height = document.querySelector("section.about").clientHeight
      if (window.pageYOffset > height) { this.sectionTitle = "Team." }
      else { this.sectionTitle = "About." }
    };
    window.addEventListener('keydown', this.closeAllModalsOnKeyPress)

    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })

  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.closeAllModalsOnKeyPress)
    window.removeEventListener('resize', this.onResize)
  },
}
</script>

<style scoped>
/* Text section */
@import '@/assets/css/about_content.css';
@import '@/assets/css/about_content.mobile.css';

/* Team section */
@import '@/assets/css/about_team.css';
@import '@/assets/css/about_team.mobile.css';
</style>