<template>
    
    <div class="navbar">
        <img src="../assets/Barcode.png" alt="Barcode" class="barcode">
        <img src="../assets/logo.png" alt="" class="logo"/>
        <ul class="navlist">
            <router-link :key="$route.fullPath" to="/"><li class="navs">HOME</li></router-link>
            <router-link :key="$route.fullPath" to="/team"><li class="navs">TEAM</li></router-link>
            <router-link :key="$route.fullPath" to="/past_events"><li class="navs">PAST EVENTS</li></router-link>
            <router-link :key="$route.fullPath" to="/partners"><li class="navs">PARTNERS</li></router-link>
            <router-link :key="$route.fullPath" to="/about"><li class="navs">ABOUT</li></router-link>
        </ul>
    </div>
        <router-view />
</template>

<script>
export default {
  name: 'navbar'
  
}
</script>

<style scoped>
    @font-face {
    font-family: gothambold;
    src: url(../assets/fonts/FontsFree-Net-Gotham-Bold.ttf);
}

a{
    text-decoration: none;
    color:black
}

.navbar{
    width:50%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
}

.logo{
    width:20%;
    height:auto;
    
}

.barcode{
    height: 11vh;
    margin-right: 2vh;
}

.navs {
    font-family: gothambold;
    display: inline;
    writing-mode: vertical-rl;
    margin-right: 10px;
    transform: rotate(180deg);
    letter-spacing: 6px;
  }

.navs:hover{
    color: red;
}
.navlist{
    margin-left: auto;
    margin-right: 18vh;
    margin-bottom: 0px;
}

.navs :hover{
    background-color: red;
}

li.active:hover{
    color: red;
}

</style>