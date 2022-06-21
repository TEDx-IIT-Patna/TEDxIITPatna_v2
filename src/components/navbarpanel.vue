<template>
  <div class="nav">
    <div class="close">
      <router-link to="/team">Close</router-link>
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
    <div class="nav_img_container">
      <div class="d-flex justify-content-center" id="nav_div">
        <img id="nav_img" src="../assets/navpicture.png" height="400" width="350" />
      </div>
    </div>
  </div>
  
</template>

<style scoped>

.nav {
  background-color: black;
  height: 100vh;
  overflow: hidden;
  width: 50vw;
  margin-left: 50vw;
}

.close{
  display: block;
  width: 100%;
  text-align: right;
  padding: 5%;
  top: -16vh;
  position: relative;
  right: -12vh;
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
.options{
  position: relative;
  top: -17vh;
  left: -5vw
}
.nav_div{
  position: absolute;
}
li a{
  text-decoration: none;
  color: white;
  font-size: 150%;
}
#nav_img {
  width: 38vw;
}

.nav_img_container{
  position: relative;
    top: -12vh;
    right: -4vw;
}
</style>