<template>
  <div class="nav">
    <div class="close">
      <router-link to="/">Close</router-link>
      <router-view/>
    </div>
    <div class="options">
      <ul>
        <li>
          <router-link to="/">Speakers</router-link>
        </li>
        <li>
          <router-link to="/">Past Events</router-link>
        </li>
        <li>
          <router-link to="/">Partners</router-link>
        </li>
        <li>
          <router-link to="/">About</router-link>
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
  text-align: left;
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