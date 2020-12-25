<template>
  <div id="app">
    <Categorii/>
  </div>
</template>

<script>
import Categorii from './components/CategoriiComponent.vue';
//import Categorii from './components/CategoriiComponent.vue';
//import Retururi from './components/RetururiComponent.vue';
//import Vanzari from './components/VanzariComponent.vue';


export default {
  name: 'App',
  components: {
    Categorii
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
