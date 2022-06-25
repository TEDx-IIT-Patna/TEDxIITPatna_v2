<template>
  <div class="e2016 container-fluid">
    <NavVue />
    <div class="all container-fluid">
      <div class="header container-fluid">
        <div class=" text">

          <router-link to="/past_events"><button class="btn btn-outline-danger back"> Go Back </button></router-link>
          <h1>
            SHEDDING OFF FEATHERS | 2016
          </h1>
          As Socrates said, the secret of change is to focus all your energy not on fighting the old but on building the new, 
          our first edition of TEDxIITPatna told us that making anything unique is possible only when we let go of the old. 
          Just as birds shed their feathers, allowing the new ones to embrace. 
          Bringing out change is an inevitable part of one's life to keep walking the course of life. 
          This theme reflected the urge to keep our arms open to change. 

          <!-- <br> Window width: {{ windowwidth }} <br/> -->

        </div>
        <h1 class="speaker-head" v-if="windowwidth < 600">SPEAKERS.
        </h1>
      </div>
      <section>
        <Speakers v-if="windowwidth > 990" />
      </section>
      <section>
        <Speakers2 v-if="windowwidth <= 990" />
      </section>
      <section>
        <EventGallery />
      </section>
    <Footer/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Speakers from './Speakers/Speakers2016';
import EventGallery from './EventGallery/EventGallery2016.vue';
import Speakers2 from './Speakers/Speakers2016mobile';
import NavVue from './Nav.vue';
import Footer from './footer.vue';
export default {
  name: '2016',

  data() {
    return {
      illustrations: ["https://drive.google.com/uc?export=view&id=1xouLV0haUBa0AKCS4jp4W2t4y1LJx5rW"],
      windowwidth: window.innerWidth,

    }
  },


  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },

  methods: {
    onResize() {
      this.windowwidth = window.innerWidth
    }
  },
  components:
  {
    Speakers,
    EventGallery,
    Speakers2,
    NavVue,
    Footer
}

}
</script>

<style scoped>
.header {
  background-image: url("https://drive.google.com/uc?export=view&id=19FzGZmje31Caqc9McsR5sfrJA5Nvjj_6");
  height: 768px;
}


.speaker-head
{
  margin-top: 15%;
  text-decoration: underline red solid 10px;
  text-align: center;
  font-family: GothamBold;
}
.all {
  height: 2500px;
  background-color: black;
  width: 100vw;
  margin-left: -2%;
  color: #fff;
  overflow-x: hidden;
}

.e2016 {
  background-color: black;
  color: white;
  height: 100vh;
}


.text {
  height: 110vh;
  width: 60vw;
  padding-top: 30vh;
  padding-left: 5vw;
  font-style: normal;
  font-weight: 200;
  font-size: 18px;
  font-family: GothamLight;
  text-align: left;
}

h1 {
  font-size: 40px;
  margin-bottom: 3vh;
  font-family: GothamMedium;
  font-weight: 700;
}

.back {
  margin-bottom: 10px;
}

.section {
  min-height: 100vh;
}

@media screen and (max-width: 600px) {
  .e2021 {
    background-color: black;
  }

  .all {
    width: 101vw;
    overflow-x: hidden;

  }

  .header {
    background-image: url("https://drive.google.com/uc?export=view&id=1qFHq-x92QmVmi9PW2vV0BzDYJqddQero");
    height: 1000px;
    width: 100%;

  }

  .text {
    font-size: 15px;
    padding-top: 25vh;
  }
  .main-head
{
  font-size: 30px;
}
}

@media screen and (min-width: 600px) and (max-width: 990px) {
  .header {
    background-image: url("https://drive.google.com/uc?export=view&id=1-UdDn-jp0OkpbpEuRNdFJ8V3lgsSPjPx");
    width: 100%;
    height: 768px;
  }

  .text {
    font-size: 15px;
  }

  .all {
    width: 101vw;
    overflow-x: hidden;

  }

}

@media screen and (min-width: 990px) and (max-width: 1200px) {
  .header {
    background-image: url("https://drive.google.com/uc?export=view&id=1cfvIlfncEpelpVyTm3ygUcN1DteO4MFD");
    width: 100%;
    height: 768px;
  }

  .all {
    width: 101vw;
    overflow-x: hidden;

  }

  .text {
    font-size: 15px;
    padding-top: 25vh;
  }
}
@media screen and (min-width: 1400px) and (max-width:3000px) 
{
  .header {
    background-size: cover ;
    height: 100vh;
    background-repeat: no-repeat;
		background-color: black;
  }
  .e2021{
    background-color: black;
    font-size: 1vw;
    overflow-x: hidden;
  }
  .text{
    font-size: 1.5vw;
  }
  h1
  {
    font-size: 3vw;
  }
  button
  {
    font-size: 2vw;
  }
  section{
    background-color: black;
    margin-top: -10vh;
  }
  .all{
    overflow-x: hidden;
  }
}
</style>

