<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  watch: {
    $route: {
      setImmediate: true,
      handler(to, from){
        document.title = `TEDxIITPatna | ${to.meta.title}`
      }
    }
  }
}
</script>

<style>
@import '@/assets/css/global.css';
</style>
