import 'animate.css/animate.min.css';
import {routes} from './routes'

import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'

import { store } from './store/store'

Vue.use(VueRouter);

const router = new VueRouter({
    routes
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
