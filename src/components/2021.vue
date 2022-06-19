<template>
  <div class="e2021 container-fluid" >
    <NavVue/>
      <div class="all container-fluid">
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
import Speakers from './Speakers/Speakers2021';
import Speakers2 from './Speakers/Speakers2021mobile';
import EventGallery from './EventGallery/EventGallery2021.vue';
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
  background-image: url("https://drive.google.com/uc?export=view&id=1ZrmLIf0YGcE4i0P7p-iknJLw6K7Ty_Cr");
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
  }
  .all
{
  width:101vw;
  overflow-x: hidden;
  
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

@media screen and (min-width: 600px) and (max-width: 990px) {
  .header {
  background-image: url("https://drive.google.com/uc?export=view&id=1DwiZyMs5mAado8IhyEGmpz_bVkFIGbdS");
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
  background-image: url("https://drive.google.com/uc?export=view&id=14zw7Kcg1NQRruqxLf83VKXKzZSGSTcri");
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