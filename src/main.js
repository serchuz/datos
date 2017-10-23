import Vue from 'vue'
import VueRouter from 'vue-router'
import VueGoodTable from 'vue-good-table';

import App from './App.vue'
import Home from './pages/Home.vue'
import Datos from './pages/Datos.vue'
import Mapa from './pages/Mapa.vue'
import Graficos from './pages/Graficos.vue'
import config from '../config'

Vue.use(VueRouter);
Vue.use(VueGoodTable);

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/datos', component: Datos },
    { path: '/mapa', component: Mapa },
    { path: '/graficos', component: Graficos }    
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
