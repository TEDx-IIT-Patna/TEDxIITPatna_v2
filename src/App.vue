<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  watch: {
    $route: {
      setImmediate: true,
      handler(to, from) {
        // checks the title attribute of each route and updates the <title> of the page
        document.title = `TEDxIITPatna | ${to.meta.title}`
      }
      // this can be extended to add custom meta tags on each page
      // these attributes are defined in /src/router/index.js

      // alternate implementations also exist
    }
  }
}
</script>

<style>
/* these are applied on all pages. You might want to read Vue Router documentation (https://router.vuejs.org/) */
@import '@/assets/css/_global.css';
</style>
