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
        <NavLinks />
    </nav>
</template>

<script>
import NavLinks from '@/components/NavLinks.vue'

export default {
    name: "Home.Nav",
    components: {
        NavLinks,
    }
}
</script>

<style scoped>
@import '@/assets/css/home.nav.css';
</style>