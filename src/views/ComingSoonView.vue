<template>
 <section class="wrapper full">
        <div class="pastevents-wrapper">
            <div class="title"><span style="color: white">O</span>ur Partners.</div>
            <div class="white-box">

            </div>
        
        
         <div class="main">
        <!-- logos of 2016 -->
        <!-- <div class="year_1">2016</div> -->
        <div class="row row-cols-2 row-cols-sm-3 row-cols-lg-4 logo_conatiner">
                <div class="col my-5 ">
                    <img class="logo" src="..\assets\2016_past_events_logos\past_events_1.jpg">
                </div>
                <div class="col my-5">
                    <img class="logo" src="..\assets\2016_past_events_logos\past_events_9.png">
                </div>
                <div class="col   my-5">
                    <img class="logo" src="..\assets\2016_past_events_logos\past_events_8.png">
                </div>
                <div class="col  my-5">
                    <img class="logo" src="..\assets\2016_past_events_logos\past_events_6.png">
                </div>
                <div class="col  my-5">
                    <img class="logo" src="..\assets\2016_past_events_logos\past_events_5.png">
                </div>
                <div class="col  my-5">
                    <img class="logo" src="..\assets\2016_past_events_logos\past_events_4.png">
                </div>
                <div class="col  my-5">
                    <img class="logo" src="..\assets\2016_past_events_logos\past_events_7.png">
                </div>
                <div class="col-sm-6 col-lg-3 my-5">
                    <img class="logo" src="..\assets\2016_past_events_logos\past_events_3.png">
                </div>
                <div class="col my-5 ">
                    <img class="logo" src="..\assets\2019_past_events_logos\past_events_1.png">
                </div>
                <div class="col-sm-6 col-lg-3 my-5">
                    <img class="logo" src="..\assets\2019_past_events_logos\past_events_2.png">
                </div>
                <div class="col  my-5">
                    <img class="logo" src="..\assets\2019_past_events_logos\past_events_5.png">
                </div>
                <div class="col-sm-6 col-lg-3 my-5">
                    <img class="logo" src="..\assets\2019_past_events_logos\past_events_3.jpg">
                </div>
                <div class="col  my-5">
                    <img class="logo" src="..\assets\2019_past_events_logos\past_events_4.png">
                </div>
                <div class="col-sm-6 col-lg-3 my-5">
                    <img class="logo" src="..\assets\2019_past_events_logos\past_events_6.png">
                </div>
                <div class="col my-5 ">
                    <img class="logo" src="..\assets\2021_past_events_logos\past_events_1.png">
                </div>
            </div>

        </div>
        </div>
    </section>
</template>

<script>
export default {
  name: "ComingSoonView",
//   data() {
//     return {
//       screenWidth: window.innerWidth,
//     }
//   },
//   methods: {
//     onResize() {
//       this.screenWidth = window.innerWidth
//     },
//   },
//   mounted() {
//     this.$nextTick(() => {
//       window.addEventListener('resize', this.onResize)
//     })
//   },
//   beforeDestroy() {
//     window.removeEventListener('resize', this.onResize)
//   }
}
</script>

<style scoped>
.wrapper{
    position: relative;
    
    padding: 0 0 0 5%;
    place-content: unset;
    font-family: gothambold;
    overflow: hidden ;
    overflow-x: hidden;
    overflow-y: hidden;
    /* height: 100vh; */
}
.wrapper::before{
    content: '';
    display: block;
    position: absolute;
    top: 0px;
    left: 10%;
    width: 7vw;
    min-width: 15px;
    max-width: 48px;
    height: 100%;
    background-color: #FF0039;
    z-index: -1;
   
    
}

.wrapper .pastevents-wrapper {
    /* padding: max(10vh, 5rem) 0; */
    width: 100%;
    padding: 0;
    /* margin-top: calc(min(20vh, 150px) + calc(120 * (clamp(300px, 80vw, 600px) / 1080)) + 2rem); */
    /* height: calc(100vh - min(20vh, 150px) - calc(120 * (clamp(300px, 80vw, 600px) / 1080)) - 2rem); */
    overflow-y: auto;

}

.wrapper .pastevents-wrapper .title{
    position: fixed;
    /* top: min(20vh, 150px);    */
    padding-left: 5vw;
    font-size: calc(120 * (clamp(300px, 80vw, 600px) / 1080));
    z-index: 50;

}

.white-box{
        width: 84vw;
    height: 10vh;
    background-color: white;
    position: fixed;
    left: 67px;
    z-index: 45;
}
.main{
    overflow-x: hidden;
    overflow-y: hidden;
}
.logo_conatiner{
    margin-left: 10.5vw;
    margin-top: 15vh;
    /* overflow: auto; */
}
.logo {
        height: auto !important;
        width: 180px !important;
    }
.year_1{
    position: relative;
    top:15vh;
    left: 12vw;
    font-size: x-large;
    /* margin-left: 20vw; */
    width: 65px;
    height: 35px;
    color: #FF0039;
    padding-left:4px ;
    z-index: 0;
    margin-bottom: 5vh;
}
.year_1:hover{
    width:65px;
    color:white;
    background-color: #FF0039;
}
.year_2{
    position: relative;
    font-size: x-large;
    width: 65px;
    height: 35px;
    color: #FF0039;
    padding-left:4px;
    left: 12vw;
}
.year_2:hover{
    width:65px;
    color:white;
    background-color: #FF0039;
}
/* .logo:hover{
    height: auto !important;
    width: 200px !important;
    border-left: solid 5px #FF0039;
    border-bottom: solid 5px #FF0039;
    border-radius: 10px;
    padding: 5px;

} */
/* .logo:hover{
    height: auto !important;
    width: 200px !important;
    border-left: solid 5px #FF0039;
    border-bottom: solid 5px #FF0039;
    border-radius: 10px;
    padding: 5px;

} */

.white-box{
        width: 84vw;
    height: 10vh;
    background-color: white;
    position: fixed;
    left: 17vw;
    z-index: 45;
}
@media (max-width: 700px)
{
    .logo{
         height: auto !important;
        width: 150px !important;
    }
}
/* // @import '@/assets/css/coming_soon.css'; */
</style>
