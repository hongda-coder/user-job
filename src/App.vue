<template>
  <div id="app">
    <router-view/>
    <NavFooter v-show="$route.meta.navShow" />
  </div>
</template>
<script>
import NavFooter from './components/footer/NavFooter'
export default {
  name: 'App',
  components: {
    NavFooter
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
