<template>
    <nav class="navbar-web">
        <router-link to="/">Home</router-link>
        <router-link to="/pastevents">Past Events</router-link>
        <router-link to="/partners">Partners</router-link>
        <router-link to="/about">About</router-link>
    </nav>
</template>

<script>
export default {
    name: "Home.Nav",
}
</script>

<style scoped>
@import '@/assets/css/home.nav.css';
</style>