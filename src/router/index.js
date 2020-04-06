import TopRated from '../components/TopRated'
import Upcoming from '../components/Upcoming'

import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)
const routes = [
    { path: '/top-rated', component: TopRated },
    { path: '/upcoming', component: Upcoming },

]


const router = new VueRouter({
    routes
})

export default router;
