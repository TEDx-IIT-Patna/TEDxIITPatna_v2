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