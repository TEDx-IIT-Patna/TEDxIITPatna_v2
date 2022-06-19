<template>
  <nav>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </nav>
  <router-view />
</template>
<script>
{
  name: "App"
}
</script>

<style>
@font-face {
    font-family: GothamMedium;
    src: url('./assets/font-gotham/GothamMedium.ttf');
}
@font-face {
    font-family: GothamLight;
    src: url('./assets/font-gotham/GothamLight.ttf');
}

#app {
  font-family: GothamMedium;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: auto;
  overflow-x: hidden;
}


nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
