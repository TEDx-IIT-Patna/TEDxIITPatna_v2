<template>
  <div class="nav">
    <div class="close">
      <router-link to="/">Close</router-link>
      <router-view/>
    </div>
    <div class="options">
      <ul>
         <li>
          <router-link :key="$route.fullPath" to="/">Home</router-link>
        </li>
        <li>
          <router-link :key="$route.fullPath" to="/team">Team</router-link>
        </li>
        <li>
          <router-link :key="$route.fullPath" to="/past_events">Past Events</router-link>
        </li>
        <li>
          <router-link :key="$route.fullPath" to="/partners">Partners</router-link>
        </li>
        <li>
          <router-link :key="$route.fullPath" to="/about">About</router-link>
        </li>
      </ul>
    </div>
    <div>
      <div class="d-flex justify-content-center" id="nav_div">
        <img id="nav_img" src="../assets/navpicture.png" height="400" width="350" />
      </div>
    </div>
  </div>
  
</template>

<style>

.nav {
  background-color: black;
  height: 100vh;
  overflow: hidden;
}

.close{
  display: block;
  width: 100%;
  text-align: right;
  padding: 5%;
}
.close a{
  text-decoration: none;
  color: white;

}
ul {
  margin-top: 1rem;
  list-style: none;
  text-align: center;
}
li a{
  text-decoration: none;
  color: white;
  font-size: 150%;
}
#nav_img {
  width: 100vw;
}

</style>
<!-- <template>
  <span class="show-panel" style="top:-2rem !important; right:0rem !important;" @click="this.state = 'show'">
    <div class="menu">
      <i id="bar" class="fa fa-bars"></i>
    </div>
  </span>
  <nav :class="['nav', this.state]">
    <div class="close" @click="this.state = 'hidden'">Close</div>
    <div class="links">
      <router-link to="/"><span>Home</span></router-link>
      <router-link to="/pastevents"><span>Past Events</span></router-link>
      <router-link to="/team"><span>Team</span></router-link>
      <router-link to="/partners"><span>Partners</span></router-link>
      <router-link to="/about"><span>About</span></router-link>
    </div>
    <img src="@/assets/images/Flower-cropped.png" class="flower">
  </nav>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      state: 'hidden'
    }
  }
}
</script>

<style scoped>
@import '@/assets/css/nav.css'
</style> -->