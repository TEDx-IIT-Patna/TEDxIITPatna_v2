<template>
  <div class="e2021 container-fluid" >
    <NavVue/>
      <div class="all container-fluid">
    <div class="header container-fluid">
      <div class=" text">

        <router-link to="/past_events"><button class="btn btn-outline-danger back"> Go Back </button></router-link>
        <h1>
          SHEDDING OFF FEATHERS | 2016
        </h1>
        Our very first edition in 2016 was kick started with the theme of Shedding Off Feathers.  
"The secret of change is to focus all your energy not on fighting the old, but on building the new"
 Just as birds shed their feathers allowing the new ones to embrace them taking them afresh to infinite skies, bringing out change is an inevitable part of one's life to keep walking the course of life. 'Shedding off feathers' basically reflects the same urge to always keep our arms open to change. Change within us to become a better person or to this society to make this a better place to live in.

        <!-- <br> Window width: {{ windowwidth }} <br/> -->

      </div>

    </div>
    <section>
    <Speakers v-if="windowwidth > 990"/>
    </section>
    <section>
      <Speakers2 v-if="windowwidth <= 990"/>
    </section>
    <section>
      <EventGallery/>
    </section>
    
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Speakers from './Speakers/Speakers2016';
import EventGallery from './EventGallery/EventGallery2016.vue';
import Speakers2 from './Speakers/Speakers2016mobile';
import NavVue from './Nav.vue';
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
    Speakers, EventGallery, Speakers2, NavVue

  }

}
</script>

<style scoped>
.header {
  background-image: url("https://drive.google.com/uc?export=view&id=19FzGZmje31Caqc9McsR5sfrJA5Nvjj_6");
  height: 768px;
}
.all
{
  height: 2500px;
  background-color: black;
  width:100vw;
  margin-left:-2%;
}
.e2021 {
  background-color: black;
  color: white;
  height: 100vh;
  }


.text {
  height: 110vh;
  width: 60vw;
  padding-top: 40vh;
  padding-left: 5vw;
  font-style: normal;
  font-weight: 200;
  font-size: 18px;
  font-family:GothamLight;
  text-align: left;
}

h1 {
  font-size: 40px;
  margin-bottom: 3vh;
  font-family:GothamMedium;
  font-weight: 700;
}

.back {
  margin-bottom: 10px;
}
.section
{
  min-height: 100vh;
}
@media screen and (max-width: 600px) {
  .e2021
  {
    background-color: black;
    width: fit-content;
  }
  .header {
  background-image: url("https://drive.google.com/uc?export=view&id=1qFHq-x92QmVmi9PW2vV0BzDYJqddQero");
  height:1000px;
  width:100vw;

}
.text{
  font-size: 12px;
}
  .all
{
  width:101vw;
  overflow-x: hidden;
  
}
}
@media screen and (min-width: 600px) and (max-width: 990px) {
  .header {
  background-image: url("https://drive.google.com/uc?export=view&id=1-UdDn-jp0OkpbpEuRNdFJ8V3lgsSPjPx");
  width:100%;
  height: 768px;
}
.text{
  font-size: 15px;
}
  .all
{
  width:101vw;
  overflow-x: hidden;
  
}
}
@media screen and (min-width: 990px) and (max-width: 1200px) {
  .header {
  background-image: url("https://drive.google.com/uc?export=view&id=1cfvIlfncEpelpVyTm3ygUcN1DteO4MFD");
  width:100%;
  height: 768px;
}
  .all
{
  width:101vw;
  overflow-x: hidden;
  
}
}
</style>