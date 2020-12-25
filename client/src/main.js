import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Categorii from '../src/components/CategoriiComponent';
import Produse from '../src/components/ProduseComponent';

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
    { path: '/categorii', component: Categorii },
    { path: '/produse', component: Produse }
]

const router = new VueRouter({
    mode: "history",
    routes: routes
})

new Vue({
    render: h => h(App),
    router: router
}).$mount('#app')