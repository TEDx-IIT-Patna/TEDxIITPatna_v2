<template>
  <div class="e2019 container-fluid">
    <div class="container-fluid header">
      <div class=" text">
        <router-link to="/past_events"><button class="btn btn-outline-danger back"> Go Back </button></router-link>
        <h1>
          METAMORPHOSIS | 2019
        </h1>
        Our second edition of TEDxIIT Patna came, which depicted," change is the only constant, the only inevitable." 
        Permanence is an illusion, and everything lives in the process of continuous change. 
        Change, want it or not, has encroached and will encroach into each one of life's aspects; whether nature's transitions from one season to another, the transformation of a caterpillar to a beautiful butterfly, or the evolution of man from apes, everything in this universe is susceptible to change. 
        The same applies to the various pains in life that man is agonised over. 
        The darkness today will have to change into the brightest light tomorrow. 
        The gloom surrounding today is also evolving into the most joyous glee tomorrow. 
        So our theme of the 2nd edition of TEDxIITPatna was "Metamorphosis". 
        The idea is to hear from the experts themselves on how change has affected today's technology, entertainment and most importantly, the people and the society.
      </div>
  <!-- Window width: {{ windowwidth }} -->
    </div>
    <section>
      <Speakers v-if="windowwidth > 600"/>
    </section>
    <section>
      <EventGallery v-if="windowwidth > 600"/>
    </section>
    <section>
      <Speakers2 v-if="windowwidth < 600"/>
    </section>
    <section>
      <EventGallery2 v-if="windowwidth < 600"/>
    </section>
  </div>
  
</template>

<script>
// @ is an alias to /src
import Speakers from './Speakers/Speakers2019';
import Speakers2 from './Speakers/Speakers2019mobile';
import EventGallery from './EventGallery/EventGallery2019.vue';
import EventGallery2 from './EventGallery/EventGallery2019mobile.vue';
export default {
  name: '2021',

  data() {
    return {
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
    Speakers, EventGallery, Speakers2, EventGallery2

  }

}
</script>

<style scoped>
.e2019 {
  background-color: black;
}
.header {
  background-image: url("https://drive.google.com/uc?export=view&id=1Y9yh01LAt2rb734XIeB74fx74NT5KbOl");
  height:120vh;
  width:100vw;
}
.text {
  height: 100vh;
  width: 60vw;
  padding-top: 40vh;
  padding-left: 5vw;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  text-align: left;
  color: white;
}

h1 {
  font-size: 40px;
  margin-bottom: 3vh;
}
@media screen and (max-width: 600px) {
  .e2021
  {
    background-color: black;
  }
  .header {
  background-image: url("https://drive.google.com/uc?export=view&id=1x7MR3YIV3lRJxHTcrwXeTyFSxNd_tqWd");
  height:1000px;
  width:100%;

}
.text{
  font-size: 13px;
}
}
</style>