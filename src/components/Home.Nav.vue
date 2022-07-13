<!--
    Special nav element for web view of homepage.
    The vertical navbar in homepage.
-->
<!--
    Usage:
    <template>
        ...
        <HomeNav />
        ...
    </template>
    <script scoped>
        ...
        import HomeNav from '@/components/Home.Nav.vue'
        ...
        export default {
            ...
            components: {
                ...
                HomeNav,
                ...
            }
        }
    </script>
-->

<template>
    <nav class="navbar-web">
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