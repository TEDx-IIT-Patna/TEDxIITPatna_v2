<template>
  <div class="wrapper" id="wrapper">

    <section>
      <div class="first" id="first">
        <nav>
          <navbarVue />
        </nav>
        <div class="timer-container">
          <h1 id="headline" class="timer-text">live in</h1>
          <div id="countdown">
            <ul>
              <li class="timer-li"><span id="days" class="timer"></span>days</li>
              <li class="timer-li"><span id="hours" class="timer"></span>Hours</li>
              <li class="timer-li"><span id="minutes" class="timer"></span>Minutes</li>
              <li style="display: none" class="timer-li"><span id="seconds" class="timer"></span>Seconds</li>
            </ul>
          </div>
        </div>
        <div class="section1_images">
          <div class="x_1_img tedx_img"></div>
          <div class="x_2_img tedx_img"></div>
          <div class="x_3_img tedx_img"></div>
          <div class="black_bg" id="black_bg">
          </div>
        </div>
      </div>
    </section>

  <section class="second_and_third">
    <section class="second_section">
      <div class="second second_item" id="second">
        <img v-motion :initial="{ opacity: 0, y: 0 }"
          :visible="{ opacity: 1, y: 0, scale: 1, transition: { duration: 500, type: 'keyframes', ease: 'linear', } }"
          class="inf_black inf_black_1 second_item" src="../assets/Infinity_Logo/Infinity_Layer_1.png" alt="" />
        <img v-motion :initial="{ opacity: 0, y: 0 }"
          :visible="{ opacity: 1, y: 0, scale: 1, transition: { duration: 500, type: 'keyframes', ease: 'linear', } }"
          :delay="300" class="inf_black inf_black_2 second_item" src="../assets/Infinity_Logo/Infinity_Layer_2.png"
          alt="" />
        <img v-motion :initial="{ opacity: 0, y: 0 }"
          :visible="{ opacity: 1, y: 0, scale: 1, transition: { duration: 500, type: 'keyframes', ease: 'linear', } }"
          :delay="600" class="inf_black inf_black_3 second_item" src="../assets/Infinity_Logo/Infinity_Layer_3.png"
          alt="" />
        <img v-motion :initial="{ opacity: 0, y: 0 }"
          :visible="{ opacity: 1, y: 0, scale: 1, transition: { duration: 500, type: 'keyframes', ease: 'linear', } }"
          :delay="900" class="inf_black inf_black_4 second_item" src="../assets/Infinity_Logo/Infinity_Layer_4.png"
          alt="" />
          <!-- <div class="white_infinity">

          </div> -->
        <div class="inf_black_text second_item">
          <span id="inf_aff_white">INFINITE AFFINITES</span>
        </div>
      </div>
    </section>

    <section>
      <div class="third">
        <img v-motion :initial="{ opacity: 0, y: 0 }"
          :visible="{ opacity: 1, y: 0, scale: 1, transition: { duration: 700, type: 'keyframes', ease: 'linear', } }"
          class="inf_black inf_white_1" src="../assets/Infinity_Logo/Infinity_Layer_1.png" alt="" />
        <img v-motion :initial="{ opacity: 0, y: 0 }"
          :visible="{ opacity: 1, y: 0, scale: 1, transition: { duration: 700, type: 'keyframes', ease: 'linear', } }"
          :delay="300" class="inf_black inf_white_2" src="../assets/Infinity_Logo/Infinity_Layer_2.png" alt="" />
        <img v-motion :initial="{ opacity: 0, y: 0 }"
          :visible="{ opacity: 1, y: 0, scale: 1, transition: { duration: 700, type: 'keyframes', ease: 'linear', } }"
          :delay="600" class="inf_black inf_white_3" src="../assets/Infinity_Logo/Infinity_Layer_3.png" alt="" />
        <img v-motion :initial="{ opacity: 0, y: 0 }"
          :visible="{ opacity: 1, y: 0, scale: 1, transition: { duration: 700, type: 'keyframes', ease: 'linear', } }"
          :delay="900" class="inf_black inf_white_4" src="../assets/Infinity_Logo/Infinity_Layer_4.png" alt="" />
        <div class="inf_white_text" v-motion :initial="{ opacity: 0, y: 0 }"
          :visible="{ opacity: 1, y: 50, transition: { duration: 700, type: 'keyframes', ease: 'linear', } }"
          :delay="1200" :leave="{ opacity: 0}">
          INFINITE AFFINITES
        </div>
      </div>
    </section>
    </section>

    <section class="homepage_content">
      <home_contentVue />
    </section>

    <section class="footer">
      <footerVue />
    </section>
    
  </div>
</template>

<script>
import navbarVue from '@/components/navbar.vue'
import home_contentVue from '@/components/homecontent.vue'
import footerVue from '@/components/footer.vue'
import chroma from "chroma-js"
import gsap from "gsap"

export default {
  name: 'home',
//   computed: {
//   show () {
//     return this.$route.meta.show
//   }
// },
  components: {
    navbarVue,
    home_contentVue,
    footerVue
  },
  // Logic for the parallax
  // mounted() {
  // window.addEventListener('scroll', function () {
  //   console.log(window.scrollY);
  //   let value = window.scrollY;
  //   document.getElementById('tedx_x').style.left = 2 * value + 'px'
  //   document.getElementById('black_bg').style.width = 50 + (0.08 * value) + '%'

  // document.getElementById('second').style.animation = `${value>1200?"linear infinite fade":""}`
  // document.getElementById('second').style.backgroundColor = `rgba(0,0,0,${value>1200?1-(value*2/1000):1})`
  // document.getElementById('second').style.backgroundSize = `${200-( 10* value)}% 100%`
  // Array.from(document.getElementsByClassName('second_item')).forEach.style.width = 0.001 * value + 'px'
  // })
  // },
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
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)) < 10 ? "0" + Math.floor((distance % (hour)) / (minute)) : Math.floor((distance % (hour)) / (minute)),
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
  },
  mounted() {

    var controller = new ScrollMagic.Controller();
    var controller1 = new ScrollMagic.Controller();
    var controller2 = new ScrollMagic.Controller();
    var controller3 = new ScrollMagic.Controller();
    // Timeline for first section
    var tl = new gsap.timeline()
    tl.fromTo(".black_bg", 1.5, { width: screen.width / 2 }, { width: 2*screen.width, ease: Linear.easeNone }, 0);
    tl.fromTo(".x_3_img", 1.5, { opacity: 1 }, { opacity: 0, ease: Linear.easeNone }, 0)
    tl.fromTo(".x_2_img", 1.5, { opacity: 1 }, { opacity: 0, ease: Linear.easeNone }, 0)
    tl.fromTo(".x_1_img", 1.5, { xPercent:0, opacity: 1 }, { xPercent: 50, opacity: 0, ease: Linear.easeNone }, 0)
    // tl.fromTo(".x_1_img", 1.5, { scale: 1.2, opacity: 1 }, { scale: 0, opacity: 0, ease: Linear.easeNone }, 2)
    // tl.fromTo(".x_1_img",1.5,{opacity:1,xPercent:0,yPercent:0},{opacity:0,xPercent:70,yPercent:-70, ease: Linear.easeNone},2)
    tl.fromTo(".logo", 1.5, { opacity: 1, yPercent: 0 }, { opacity: 0, yPercent: -200, ease: Linear.easeNone }, 0)
    tl.fromTo(".navbar", 1.5, { opacity: 1, yPercent: 0 }, { opacity: 0, yPercent: -400, ease: Linear.easeNone }, 0)
    tl.fromTo("#countdown", 1.5, { opacity: 1, yPercent: 0 }, { opacity: 0, yPercent: 200, ease: Linear.easeNone }, 0)
    tl.fromTo(".barcode", 1.5, { opacity: 1, xPercent: 0 }, { opacity: 0, xPercent: -100, ease: Linear.easeNone }, 0)
    tl.fromTo(".timer-text", 1.5, { opacity: 1, xPercent: 0 }, { opacity: 0, xPercent: -300, ease: Linear.easeNone }, 0)

    //Timeline for the second section
    var tl2 = new gsap.timeline()
    tl2.fromTo(".wrapper", { css: { backgroundColor: "black" } }, { css: { backgroundColor: "white" }, ease: Linear.easeNone })
    tl2.fromTo(".inf_black_1", 0.5, { opacity: 1 }, { opacity: 0, ease: Linear.easeNone }, 0)
    tl2.fromTo(".inf_black_2", 0.5, { opacity: 1 }, { opacity: 0, ease: Linear.easeNone }, 0)
    tl2.fromTo(".inf_black_3", 0.5, { opacity: 1 }, { opacity: 0, ease: Linear.easeNone }, 0)
    tl2.fromTo(".inf_black_4", 0.5, { opacity: 1 }, { opacity: 0, ease: Linear.easeNone }, 0)
    tl2.fromTo(".inf_black_text", 1, { opacity: 1 }, { opacity: 0, ease: Linear.easeNone }, 0)

    //Timeline for the third section
    var tl3 = new gsap.timeline()
    tl2.fromTo(".inf_black_1", 0.5, { opacity: 1, css:{display: "block"} }, { opacity: 0, css:{display: "none"}, ease: Linear.easeNone }, 0)
    tl2.fromTo(".inf_black_2", 0.5, { opacity: 1, css:{display: "block"} }, { opacity: 0, css:{display: "none"}, ease: Linear.easeNone }, 0)
    tl2.fromTo(".inf_black_3", 0.5, { opacity: 1, css:{display: "block"} }, { opacity: 0, css:{display: "none"}, ease: Linear.easeNone }, 0)
    tl2.fromTo(".inf_black_4", 0.5, { opacity: 1, css:{display: "block"} }, { opacity: 0, css:{display: "none"}, ease: Linear.easeNone }, 0)
    tl3.fromTo(".inf_white_1", 1, { opacity: 1, css:{display: "none"} }, { opacity: 1, css:{display: "block"}, ease: Linear.easeNone })
    tl3.fromTo(".inf_white_2", 1, { opacity: 1, css:{display: "none"} }, { opacity: 1, css:{display: "block"}, ease: Linear.easeNone })
    tl3.fromTo(".inf_white_3", 1, { opacity: 1, css:{display: "none"} }, { opacity: 1, css:{display: "block"}, ease: Linear.easeNone })
    tl3.fromTo(".inf_white_4", 1, { opacity: 1, css:{display: "none"} }, { opacity: 1, css:{display: "block"}, ease: Linear.easeNone })
    // tl2.fromTo(".inf_white_text", 1, { opacity: 1 }, { opacity: 0, ease: Linear.easeNone, delay:2 }, 0)
    tl2.fromTo(".inf_white_text", 1, { opacity: 1 }, { opacity: 0, ease: Linear.easeNone }, 0)

    // Timeline for the first div of the content section
    var tl4 = new gsap.timeline()
    tl4.fromTo(".image-1", 1.5, { xPercent: -screen.width/2 }, { xPercent: 0, ease: Linear.easeNone }, 0)
    tl4.fromTo(".content1", 1.5, { xPercent: screen.width/2 }, { xPercent: 0, ease: Linear.easeNone }, 0)

    // Timeline for the second div of the content section
    var tl5 = new gsap.timeline()
    tl4.fromTo(".image-2", 1.5, { xPercent: screen.width/2 }, { xPercent: 0, ease: Linear.easeNone }, 1)
    tl4.fromTo(".content2", 1.5, { xPercent: -screen.width/2 }, { xPercent: 0, ease: Linear.easeNone }, 1)

    // Timeline for the third div of the content section
    tl5.fromTo(".image-3", 1.5, { xPercent: -screen.width/2 }, { xPercent: 0, ease: Linear.easeNone }, 0)
    tl5.fromTo(".content3", 1.5, { xPercent: screen.width/2 }, { xPercent: 0, ease: Linear.easeNone }, 0)



    // All the scenes for the ScrollMagic in the same order as of tweens in timeline
    var scene1 = new ScrollMagic.Scene({
      triggerElement: "#wrapper",
      triggerHook: "onLeave",
      duration: "300%"
    })
      .setPin("#wrapper")
      .setTween(tl)
      .addIndicators({
        colorTrigger: "white",
        colorStart: "white",
        colorEnd: "white",
        indent: 40
      })
      .addTo(controller);

    var scene2 = new ScrollMagic.Scene({
      triggerElement: ".second",
      triggerHook: "onLeave",
      duration: "200%"
    })
      .setPin(".second", { pushFollowers: true })
      .setTween(tl2)
      .addIndicators({
        colorTrigger: "white",
        colorStart: "white",
        colorEnd: "white",
        indent: 40
      })
      .addTo(controller1);

    var scene3 = new ScrollMagic.Scene({
      triggerElement: ".third",
      triggerHook: "onLeave",
      duration: "20%"
    })
      .setPin(".third")
      .setTween(tl3)
      .addIndicators({
        colorTrigger: "white",
        colorStart: "white",
        colorEnd: "white",
        indent: 40
      })
      .addTo(controller2);

    var scene4 = new ScrollMagic.Scene({
      triggerElement: ".third",
      triggerHook: "onLeave",
      duration: "250%"
    })
      .setTween(tl4)
      .addIndicators({
        colorTrigger: "white",
        colorStart: "white",
        colorEnd: "white",
        indent: 40
      })
      .addTo(controller3);

    var scene5 = new ScrollMagic.Scene({
      triggerElement: ".content1",
      triggerHook: "onLeave",
      duration: "150%"
    })
      .setTween(tl5)
      .addIndicators({
        colorTrigger: "white",
        colorStart: "white",
        colorEnd: "white",
        indent: 40
      })
      .addTo(controller);

  }
}

// Used Chroma-Js library for color transition from black to white
var scale = chroma.scale(['#000000', '#ffffff']).domain([3120, 3900]);
window.addEventListener('scroll', function () {
  console.log(window.scrollY);
  document.getElementById('second').style.backgroundColor = scale(window.pageYOffset);
});

</script>