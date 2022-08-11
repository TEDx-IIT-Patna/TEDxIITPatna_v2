<template>
  <section class="webview" v-if="screen > 1000">
    <section class="nav_section">
      <Nav :open_button_color="'white'" open_button_style="icon" />
      <BackButton />
    </section>
    <section class="about_section about1">
      <div class="about_redbox" id="about_redbox"><span id="redbox_text">About.</span></div>
      <h5>ABOUT</h5>
      <h1>IIT Patna</h1>
      <div class="about_text2 about_text_web2">Indian Institute of Technology Patna is one of the new IITs
        established by an Act of
        the Indian Parliament on August 06, 2008. Offering various undergraduate, postgraduate, and
        post-doctoral degrees, it is one of the fastest developing colleges in India.<br /><br />
        Emerging as a center of thriving excellence, the lush green campus of IIT Patna spans 500 acres. Many
        inquisitive minds, eager to expand their technical prowess, are ably supported by astute professors and
        state-of-the-art laboratories.<br /><br />
        As the site for vibrant fests – Nebula, Reverberance, Celesta, Anwesha, Infinito– IIT Patna sees
        overwhelming participation from all over the country. TEDxIITPatna is one of the more formal events in
        this Institute of National Importance. IIT Patna is committed to providing the nation with well-rounded
        individuals with professional and scientific competence of the highest degree.</div>
      <div class="tedx_pic"><img src="../assets/images/tedxiitpatna_logo-2B.png" alt="">
      </div>
    </section>
    <section class="about_section about2">
      <h5>ABOUT</h5>
      <h1>TED</h1>
      <div class="about_text2 about_text_web2">
        TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in
        California 30 years ago, TED has grown to support its mission with multiple initiatives. The two annual
        TED Conferences invite the world's leading thinkers and doers to speak for 18 minutes or less. Many of
        these talks are then made available, free, at TED.com. TED speakers have included Bill Gates, Jane
        Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala,
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
        Facebook at <a href="http://www.facebook.com/TED">http://www.facebook.com/TED</a>.
      </div>
      <div class="tedx_pic tedx_pic2"><img src="../assets/images/tedxiitpatna_logo-2B.png" alt="">
      </div>
    </section>

    <!-- NOTE: Faculty -->
    <section class="about_section about3">
      <div class="team_redbox" id="team_redbox"><span id="redbox_text1">Team.</span></div>
      <h5>TEAM</h5>
      <h1>Faculty</h1>
      <div class="hr"></div>
      <div class="about_text about_text_web">
        <div class="card card-fac" style="width: 18vw;">
          <img src="../assets/images/Team_Image/prof.png" class="card-img-top" alt="...">
          <div class="card-body">
            <div class="row name name-web">
              <div class="col">
                Dr.Sujoy Kumar Samanta
              </div>
            </div>
            <div class="row post post-web">
              <div class="col">
                Professor-In-Charge<br />(PIC)
              </div>
            </div>
            <div class="row icon icon-web">
              <div class="col">
                <a href="#" target="_blank"><i class="fa-brands fa-facebook-f mx-3 fa-xl"></i></a>
                <a href="#" target="_blank"><i class="fa-brands fa-linkedin mx-3 fa-xl"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tedx_pic tedx_pic2"><img src="../assets/images/tedxiitpatna_logo-2B.png" alt="">
      </div>
    </section>

    <!-- NOTE: Cards of Coordinators-->
    <section class="about_section about3" v-for="(items, name) in team" :key="items">
      <h5>TEAM</h5>
      <h1>{{ name }}</h1>
      <div class="hr"></div>
      <div class="about_text about_text_web">
        <div class="card card-web max-3" style="width: 18vw;" v-for="person in items" :key="person.index">
          <img :src="person.Path" class="card-img-top" alt="...">
          <div class="card-body">
            <div class="row name name-web">
              <div class="col">
                {{ person.Name }}
              </div>
            </div>
            <div class="row post post-web">

              <div class="col">
                {{ person.Committee }}
              </div>
            </div>
            <div class="row icon icon-web">
              <div class="col">
                <a target="__blank" href="#"><i class="fa-brands fa-facebook-f mx-3 fa-xl"></i></a>
                <a target="__blank" :href="person.Linkedin"><i class="fa-brands fa-linkedin mx-3 fa-xl"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tedx_pic tedx_pic2"><img src="../assets/images/tedxiitpatna_logo-2B.png" alt="">
      </div>
    </section>
  </section>

  <section class="mobileview" v-else-if="screen < 1000">
    <AboutmobileVue />
  </section>

  <Footer />

</template>


<script scoped>
import Nav from '@/components/Nav.vue'
import BackButton from '@/components/BackButton.vue'
import Teamweb from '@/components/Teamweb.vue'
import AboutmobileVue from '@/components/Aboutmobile.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'AboutView',
  data() {
    return {
      team: {
        Organisers: [
          {
            index: "1",
            Name: "Palak Totala",
            Committee: "Organiser",
            Roll: "2001CS84",
            Path: require('@/assets/images/Team_Image/1.jpg'),
            Linkedin: "https://www.linkedin.com/in/palak-totala-510875203/"
          },
          {
            index: "2",
            Name: "Nischal Jain",
            Committee: "Co-organiser",
            Roll: "2001ME41",
            Path: require('@/assets/images/Team_Image/2.jpg'),
            Linkedin: "https://www.linkedin.com/in/nischal-jain-4ab036195/"
          },
        ],
        PnC: [
          {
            index: "6",
            Name: "Pradipti Mondal",
            Committee: "Co-ordinator",
            Roll: "2001EE44",
            Path: require('@/assets/images/Team_Image/6.jpg'),
            Linkedin: "https://www.linkedin.com/in/pradipti-mondal-3146ac/"
          },
          {
            index: "16",
            Name: "Ashfaq Ahmed",
            Committee: "Co-ordinator",
            Roll: "2001EE44",
            Path: require('@/assets/images/Team_Image/16.jpg'),
            Linkedin: "https://www.linkedin.com/in/ashfaq-iitp/"
          },
          {
            index: "20",
            Name: "Shaheer tanveer",
            Committee: "Co-ordinator",
            Roll: "2001EE44",
            Path: require('@/assets/images/Team_Image/20.jpg'),
            Linkedin: "https://www.linkedin.com/in/shaheertanveer/"
          },
        ],
        Sponsorship: [
          {
            index: "7",
            Name: "Sai Nandan",
            Committee: "Co-ordinator",
            Roll: "2001CB46",
            Path: require('@/assets/images/Team_Image/7.jpg'),
            Linkedin: "https://www.linkedin.com/in/sai-nandan-panigrahy/"
          },
          {
            index: "8",
            Name: "Athul Krishna K",
            Committee: "Co-ordinator",
            Roll: "2001ME85",
            Path: require('@/assets/images/Team_Image/8.jpg'),
            Linkedin: "https://www.linkedin.com/in/athul-krishna-k-688262223/"
          },
          {
            index: "14",
            Name: "Rohit Sinha",
            Committee: "Co-ordinator",
            Roll: "2001MM26",
            Path: require('@/assets/images/Team_Image/14.jpg'),
            Linkedin: "https://www.linkedin.com/in/rohit-sinha-1282a821b/"
          },
        ],
        Production: [
          {
            index: "9",
            Name: "Devna Srivastava",
            Committee: "Co-ordinator",
            Roll: "2001MM13",
            Path: require('@/assets/images/Team_Image/9.jpg'),
            Linkedin: "https://www.linkedin.com/in/devna-srivastava-58040621a/"
          },
          {
            index: "18",
            Name: "Abhimanyu Singh",
            Committee: "Prod",
            Roll: "2001MM13",
            Path: require('@/assets/images/Team_Image/18.jpg'),
            Linkedin: "https://www.linkedin.com/in/abhimanyu-singh-bisht-91b3b0200/"
          },
          {
            index: "19",
            Name: "Yash Ajitsaria",
            Committee: "Co-ordinator",
            Roll: "2001MM13",
            Path: require('@/assets/images/Team_Image/19.jpg'),
            Linkedin: "https://www.linkedin.com/in/yash-ajitsaria-0b56a11bb/"
          },
        ],
        Webnapp: [
          {
            index: "3",
            Name: "Pratyush Kumar",
            Committee: "Co-ordinator",
            Roll: "2001ME51",
            Path: require('@/assets/images/Team_Image/3.jpg'),
            Linkedin: "https://www.linkedin.com/in/pratyushkumar1032/"
          },
          {
            index: "4",
            Name: "Suyog Chaudhari",
            Committee: "Co-ordinator",
            Roll: "2001EE77",
            Path: require('@/assets/images/Team_Image/4.jpg'),
            Linkedin: "https://www.linkedin.com/in/suyog-chaudhari-5b95021b9/"
          },
        ],
        Registration: [
          {
            index: "10",
            Name: "Abhinav Mishra",
            Committee: "Co-ordinator",
            Roll: "2001MM01",
            Path: require('@/assets/images/Team_Image/10.jpg'),
            Linkedin: "https://www.linkedin.com/in/abhinav2901/"
          },
          {
            index: "11",
            Name: "M.L.N. Keertana",
            Committee: "Co-ordinator",
            Roll: "2001CS47",
            Path: require('@/assets/images/Team_Image/11.jpg'),
            Linkedin: "https://www.linkedin.com/in/mln-keertana-5aab50217/"
          },
        ],
        MPR: [
          {
            index: "13",
            Name: "Hardik Tiwari",
            Committee: "Co-ordinator",
            Roll: "2001MM15",
            Path: require('@/assets/images/Team_Image/13.jpg'),
            Linkedin: "https://www.linkedin.com/in/hardiktiwari/"
          },
          {
            index: "15",
            Name: "Aarav Arya",
            Committee: "Co-ordinator",
            Roll: "2001ME01",
            Path: require('@/assets/images/Team_Image/15.jpg'),
            Linkedin: "https://www.linkedin.com/in/aarav-arya-b80909239/"
          }
        ],
        Editorial: [
          {
          index: "12",
          Name: "Khushi Shah",
          Committee: "Co-ordinator",
          Roll: "2001EE91",
          Path: require('@/assets/images/Team_Image/12.jpg'),
          Linkedin: "https://www.linkedin.com/in/khushishah8221/"
        }, ],
        Hospitality: [
          {
          index: "5",
          Name: "Vani Grover",
          Committee: "Co-ordinator",
          Roll: "2001CE68",
          Path: require('@/assets/images/Team_Image/5.jpg'),
          Linkedin: "https://www.linkedin.com/in/vani-grover-77078a207/"
        }, ],
        CnD: [
          {
          index: "17",
          Name: "Farhaan Alam",
          Committee: "Co-ordinator",
          Roll: "2001ME25",
          Path: require('@/assets/images/Team_Image/17.jpg'),
          Linkedin: "https://www.linkedin.com/in/farhaan-alam/"
        }, ],
        Convener: [
          {
            index: "21",
            Name: "Deepshikha",
            Committee: "Convener",
            Roll: "2001MM15",
            Path: require('@/assets/images/Team_Image/21.jpg'),
            Linkedin: "https://www.linkedin.com/in/deepshikha-1234/"
          },
          {
            index: "22",
            Name: "Sajal Kumar",
            Committee: "Convener",
            Roll: "2001ME01",
            Path: require('@/assets/images/Team_Image/22.jpg'),
            Linkedin: "https://www.linkedin.com/in/sajalkumar247/"
          }
        ]
      },
      screen: screen.width,
    }
  },
  components: {
    Nav,
    BackButton,
    Footer,
    AboutmobileVue,
    Teamweb,
    Footer
  },
  mounted() {
    window.onscroll = function () {
      var redbox = document.getElementById('about_redbox');
      var redbox1 = document.getElementById('team_redbox');
      var height1 = document.querySelector(".about1").clientHeight;
      var height2 = document.querySelector(".about2").clientHeight; 
      console.log(height1);
      if (window.pageYOffset > (height1 + height2)) {
        redbox.classList.add("none1");
        redbox1.classList.remove("none1");
      } else {
        redbox.classList.remove("none1");
        redbox1.classList.add("none1");
      }
    };
    
  }
}
</script>

<style scoped>
@import '@/assets/css/about.css';
@import '@/assets/css/about.content.css';
@import '@/assets/css/about.mobile.css';
</style>