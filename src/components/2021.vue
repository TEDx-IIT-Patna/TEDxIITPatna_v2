<template>
  <div class="e2021 container-fluid" >
    <div class="header container-fluid">
      <div class=" text">

        <router-link to="/past_events"><button class="btn btn-outline-danger back"> Go Back </button></router-link>
        <h1>
          ROAR | 2021
        </h1>
        It was the 3rd edition of TEDxIIT Patna. 
        The theme represented that strength doesn't come from winning, but your struggles and fighting spirit develop your strength. 
        The moment we rise above our fear of being judged and listen to our inner self, we start becoming the brave heart, just like a Lion. 
        Our hard work, talents and determination to achieve our goals roar enough to drown others' disheartening opinions. 
        At last, we unleash that roar of freedom within us. 
        <!-- <br> Window width: {{ windowwidth }} <br/> -->

      </div>

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
import Speakers from './Speakers/Speakers2021';
import Speakers2 from './Speakers/Speakers2021mobile';
import EventGallery from './EventGallery/EventGallery2021.vue';
import EventGallery2 from './EventGallery/EventGallery2021mobile.vue';
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
.header {
  background-image: url("https://drive.google.com/uc?export=view&id=1ZrmLIf0YGcE4i0P7p-iknJLw6K7Ty_Cr");
  height: 115vh;
}

.e2021 {
  background-color: black;
  color: white;
}


.text {
  height: 110vh;
  width: 60vw;
  padding-top: 40vh;
  padding-left: 5vw;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  text-align: left;
}

h1 {
  font-size: 40px;
  margin-bottom: 3vh;
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
  }
  .header {
  background-image: url("https://drive.google.com/uc?export=view&id=1-p9OurCPIW_ckXbCbOjNLRRGbLeDt_rf");
  height:1000px;
  width:100%;

}
.text{
  font-size: 15px;
}
}
</style>