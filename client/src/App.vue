<template>
  <div id="app">
    <top-nav></top-nav>
    <router-view></router-view>
  </div>
</template>

<script>
//import Categorii from './components/CategoriiComponent.vue';
//import Categorii from './components/CategoriiComponent.vue';
//import Retururi from './components/RetururiComponent.vue';
//import Vanzari from './components/VanzariComponent.vue';

import TopNav from './basic-components/TopNav';

export default {
  name: 'App',
  components: {
    TopNav
  }
}
</script>
