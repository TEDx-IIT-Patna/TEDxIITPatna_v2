<template>
  <div class="e2019 container-fluid">
    <NavVue />
    <div class="all container-fluid">
      <div class="container-fluid header">
        <div class=" text">
          <router-link to="/past_events"><button class="btn btn-outline-danger back"> Go Back </button></router-link>
          <h1 class="main-head">
            METAMORPHOSIS | 2019
          </h1>
          Our second edition of TEDxIIT Patna depicted," change is the only constant, the only inevitable." Permanence
          is an illusion, and whether it is nature transitioning from one season to another. The same applies to the pain that man is agonises over. The darkness today will have to change into
          the brightest light tomorrow. Hence, going with "Metamorphosis" as the theme, the idea is to hear from the
          experts themselves on how change has affected today's technology, entertainment and most importantly, the
          people and the society.

        </div>
        <h1 class="speaker-head" v-if="windowwidth < 600">SPEAKERS.</h1>
        <!-- Window width: {{ windowwidth }} -->
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
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Speakers from './Speakers/Speakers2019';
import Speakers2 from './Speakers/Speakers2019mobile';
import EventGallery from './EventGallery/EventGallery2019.vue';
import NavVue from './Nav.vue';
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
    Speakers, EventGallery, Speakers2, NavVue

  }

}
</script>

<style scoped>
.header {
  background-image: url("https://drive.google.com/uc?export=view&id=1Y9yh01LAt2rb734XIeB74fx74NT5KbOl");
  height: 768px;
}


.speaker-head
{
  text-decoration: underline red solid 10px;
  text-align: center;
  font-family: GothamBold;
  margin-top: 15%;
}
.all {
  height: 3200px;
  background-color: black;
  width: 100vw;
  margin-left: -2%;
  color: #fff;
}

.e2021 {
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
    background-image: url("https://drive.google.com/uc?export=view&id=1x7MR3YIV3lRJxHTcrwXeTyFSxNd_tqWd");
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
    background-image: url("https://drive.google.com/uc?export=view&id=1zfawW9dklKN0hjffh_rOpb4udmJQ0grP");
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
    background-image: url("https://drive.google.com/uc?export=view&id=12uO7YqP_GJWfzBuU4Wpiv2-QLoJ3GYke");
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
</style>

