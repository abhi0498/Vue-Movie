import TopRated from '../components/TopRated'
import Upcoming from '../components/Upcoming'
import ErrorPage from '../components/ErrorPage'
import MovieDetails from '../components/MovieDetails'
import Home from '../components/Home'


import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)
const routes = [
    { path: '/', component: Home },
    { path: '/top-rated', component: TopRated },
    { path: '/upcoming', component: Upcoming },
    { path: '/movie/:movie_id', component: MovieDetails },
    { path: '/*', component: ErrorPage }

]


const router = new VueRouter({
    routes
})

export default router;
