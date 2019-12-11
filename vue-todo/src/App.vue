<template>
  <div id="app" class="grid">
    <Header />
  </div>
</template>

<script>
import Header from './components/Header.vue'


export default {
  name: 'app',
  components: {
    Header
  },
}
</script>

<style lang="scss">
body {
  background: $bg-color;
  color: $text-color;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
