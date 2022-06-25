<template>
<nav class="navbar_team" style="color: white; top: 2vh; right: 2vw;">
      <Nav />
      </nav>
  <div class="about">
  <div class="soon">
  COMING SOON
  </div>
  <div class="soon2">
  WEBPAGE UNDER DEVELOPMENT PLEASE BE PATIENT WHILE WE GO SEARCH FOR  
  <br/> MORE LOVELY UNICORNS TO HELP US BUILD THIS SITE
  </div>
  
  </div>
</template>

<script>
import Nav from '@/components/navbarpanel.vue';
export default {
  name: 'about',
  components:
  {
    Nav
},
mounted() {
    if (localStorage.getItem('reloaded')) {
        // The page was just reloaded. Clear the value from local storage
        // so that it will reload the next time this page is visited.
        localStorage.removeItem('reloaded');
    } else {
        // Set a flag so that we know not to reload the page twice.
        localStorage.setItem('reloaded', '1');
        location.reload();
    }
}
}
</script>
<style scoped>

.about
{
  background-size: cover;
  height: 100vh;
  color: #fff;
  font-family: GothamMedium;
  background-image: url("https://drive.google.com/uc?export=view&id=1BwJtJl0VbjUZiue-dvfvuXag8M-tX5SR");
  display: flex;
    flex-direction: column;
    align-items: center;
}
.soon
{
  padding-top: 48vh;
  letter-spacing: 30px;
  font-size: 30px;
}
.soon2
{
  font-size: 10px;
  padding-top: 35vh;
}
</style>