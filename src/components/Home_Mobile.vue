<template>
    <section>
      <nav>
        <router-link to="/nav-mob-panel">Navigation Panel</router-link>
      </nav>
      <router-view/>

      <div class="timer-container">
        <h1 id="headline" class="timer-text">LIVE IN</h1>
        <div id="countdown">
          <ul>
            <li class="timer-li"><span id="days" class="timer"></span> days,</li>
            <li class="timer-li"><span id="hours" class="timer"></span> Hours</li>
            <li style="display: none" class="timer-li"><span id="minutes" class="timer"></span>Min</li>
            <li style="display: none" class="timer-li"><span id="seconds" class="timer"></span>Sec</li>
          </ul>
        </div>
      </div>
      <div class="continer d-flex justify-content-center">
        <div class="row">
          <div class="images d-flex justify-content-center" id="x_div">
            <img id="x_img" src="../assets/xxx_img.png" height="280" width="280" />
          </div>
          <div class="images d-flex justify-content-center my-5">
            <img id="ted_img" src="../assets/logo.png" height="100" width="150" />
          </div>
        </div>
      </div>
    </section>
    <section class="inf_sec">
      <div class="images d-flex justify-content-center" id="inf_div">
        <img id="inf_img" src="../assets/Infaffinitypsd.png" alt="" />
        <p class="text_img"> INFINTE  AFFINITIES</p>
      </div>
    </section>
    <contents_mobile/>
   







  
    <!-- <footers/> -->
    <section class="speaker_nomination">
      <span class="nom_heading">Want to feature in the 4th edition of Tedx IITPatna</span>
      <span class="speaker_nom_text">Click the button for register as a speaker</span>
      <button class="custom-btn btn-7"><span>Apply Now!</span></button>
    </section>
</template>


<style scoped>

html {
  overflow-x: hidden;
}

body {
  overflow-x: hidden;
}

nav {
  padding: 5%;
  position: relative;
  left: 25%;
}

nav a {
  font-size: 0.6rem;
  font-weight: bold;
  font-family: gothambold;
  text-decoration: none;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}


.images {
    display: flex;
    justify-content: middle;
}
#x_div {
  background-color: #D82148;
  display: inline-block;
  position: relative;
  /* right: 25%; */
  margin-bottom: 2%;
  margin-left: 28%;
  margin-top: 20%;
  align-content: center;
  z-index: 0;
  width: 40vw;
  height: 40vh;
}
#x_img {
  position: absolute;
  top: 0%;
  z-index: 1;
  height: 49vh;
  width: 70vw;
  right: -9%;
  
}
#ted_img {
  margin-top: 20%;
  width: 20vw;
  height: 10vh;
}
#inf_img {
  margin: 5rem auto;
  height: 100vh !important;
  position: relative;
  /* padding-left: 80px; */
}
.text_img
{
  position: absolute;
  display: flex;
  padding-top: 60vh;
  letter-spacing: 10px;
  color:white;
}

#inf_div{
  height: 200vh;
  background-color: black;

}

#inf_img{
  height: 100vh;
  
}
.timer-container {
  /* position: absolute; */
  bottom: 0px;
  font-family: gothambold;
  width: 100%;
  /* display: flex; */
  align-items: center;
    font-family: gothambold;
    width: 100%;
    /* display: flex; */
    align-items: center;
    bottom: 736px;
}

/* The LIVE IN written beside the timer */

h1 {
  width: 100%;
  text-align: center;
}
.timer-text {
    font-weight: normal;
    font-size: small;
    font-family: gothambold;
    /* position: relative;
    left: 4rem; */
    font-weight: lighter;
    margin-bottom: -136px;
    letter-spacing: .125rem;
    margin-left: -9vw;
    /* display: inline; */
    /* text-transform: uppercase; */
    /* text-align: center; */
    /* writing-mode: vertical-rl; */
    /* transform: rotate(180deg); */
  }
 
  /* The Days and hours text */
  .timer-li {
    display: inline;
    font-size: 0.75rem;
    font-weight: bold;
    letter-spacing: .125rem;
    list-style-type: none;
    padding: 0 1%;
    text-transform: uppercase;
  }
  #countdown {
    width: 100%;
    box-align: center;
        margin-left: 15vw;
    bottom: 2rem;
    /* margin-left: 4rem; */
    /* bottom: 2rem; */
    /* left: 3rem; */
  }
  
  
  /* The span that contains the timer numerals */
  .timer {
    display: inline;
    /* padding-left: 1rem; */
    font-size: 0.75rem;
    font-weight: bold;
    /* transform: scale(1, 1.5); */
    transform: scaleY(1.6);
  }
  
  #inf_img {
    height: 80vh;
    width: 100vw;
  }
  .speaker_nomination{
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.nom_heading{
  display: block;
  font-size: xx-large;
}

  .speaker_nom_text{
    margin-right: 20px;
    font-size: larger;
    margin-block: 4px;
  }
  
  .custom-btn {
    width: 130px;
    height: 40px;
    margin-block: 5px;
    color: #fff;
    border-radius: 5px;
    padding: 10px 25px;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
     box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
     7px 7px 20px 0px rgba(0,0,0,.1),
     4px 4px 5px 0px rgba(0,0,0,.1);
    outline: none;
  }
  .btn-7 {
    background: linear-gradient(0deg, #000000 0%, red 100%);
      line-height: 42px;
      padding: 0;
      border: none;
      border-radius: 10px;
    }
    .btn-7 span {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
    }
    .btn-7:before,
    .btn-7:after {
      position: absolute;
      content: "";
      right: 0;
      bottom: 0;
      background: rgba(251,75,2,1);
      box-shadow:
       -7px -7px 20px 0px rgba(255,255,255,.9),
       -4px -4px 5px 0px rgba(255,255,255,.9),
       7px 7px 20px 0px rgba(0,0,0,.2),
       4px 4px 5px 0px rgba(0,0,0,.3);
      transition: all 0.3s ease;
    }
    .btn-7:before{
       height: 0%;
       width: 2px;
    }
    .btn-7:after {
      width: 0%;
      height: 2px;
    }
    .btn-7:hover{
      color: #ff0039;
      background: transparent;
    }
    .btn-7:hover:before {
      height: 100%;
    }
    .btn-7:hover:after {
      width: 100%;
    }
    .btn-7 span:before,
    .btn-7 span:after {
      position: absolute;
      content: "";
      left: 0;
      top: 0;
      background: rgba(251,75,2,1);
      box-shadow:
       -7px -7px 20px 0px rgba(255,255,255,.9),
       -4px -4px 5px 0px rgba(255,255,255,.9),
       7px 7px 20px 0px rgba(0,0,0,.2),
       4px 4px 5px 0px rgba(0,0,0,.3);
      transition: all 0.3s ease;
    }
    .btn-7 span:before {
      width: 2px;
      height: 0%;
    }
    .btn-7 span:after {
      height: 2px;
      width: 0%;
    }
    .btn-7 span:hover:before {
      height: 100%;
    }
    .btn-7 span:hover:after {
      width: 100%;
    }
  
  
</style>

<script >
import chroma from 'chroma-js'
import footers from '../components/footers.vue'
import contents_mobile from '../components/contents_mobile.vue'

export default {
  name: 'home',
  components:{
    footers, 
    contents_mobile, 
  },

 methods: {

    // LOGIC for the timer
    function() {
      const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;


      let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "07/03/",
        birthday = dayMonth + yyyy;

      today = mm + "/" + dd + "/" + yyyy;
      if (today > birthday) {
        birthday = dayMonth + nextYear;
      }
      //end

      const countDown = new Date(birthday).getTime(),
        x = setInterval(function () {

          const now = new Date().getTime(),
            distance = countDown - now;

          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)) < 10 ? "0" + Math.floor((distance % (day)) / (hour)) : Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("countdown").style.display = "none";
            clearInterval(x);
          }
          //seconds
        }, 0)
    }
  },
  beforeMount() {
    this.function();
  }
}
var scale = chroma.scale(['#000000', '#ffffff']).domain([333, 1362]);
window.addEventListener('scroll', function () {
  
  console.log(window.scrollY);
  document.getElementById('inf_div').style.backgroundColor = scale(window.pageYOffset);
});


</script>