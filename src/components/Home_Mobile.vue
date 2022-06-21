<template>
    <section>
      <nav>
        <router-link to="/nav-panel">Navigation Panel</router-link>
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
      </div>
    </section>
    
</template>

<style>

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
  top: -32%;
  z-index: 1;
  height: 80vh;
  width: 70vw;
  right: -25%;
  
}
#ted_img {
  margin-top: 20%;
  width: 20vw;
  height: 10vh;
}
#inf_img {
  margin: 5rem auto;
  height: 100vh !important;
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
    margin-bottom: 0;
    letter-spacing: .125rem;
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
  
  
</style>

<script >
import chroma from 'chroma-js'
export default {
  name: 'home_mobile',

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