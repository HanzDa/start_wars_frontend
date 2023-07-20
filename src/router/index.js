import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/AboutView.vue')
  },
  {
    path: '/films',
    name: 'films',
    component: () => import(/* webpackChunkName: "films" */ '@/views/FilmsView.vue')
  },
  {
    path: '/film/:id',
    name: 'film_id',
    component: () => import(/* webpackChunkName: "film_id" */ '@/views/_FilmView.vue')
  },
  {
    path: '/planets',
    name: 'planets',
    component: () => import(/* webpackChunkName: "planets" */ '@/views/PlanetsView.vue')
  },
  {
    path: '/planet/:id',
    name: 'planet_id',
    component: () => import(/* webpackChunkName: "planet_id" */ '@/views/_PlanetView.vue')
  },
  {
    path: '/',
    name: 'characters',
    component: () => import(/* webpackChunkName: "characters" */ '@/views/CharactersView.vue')
  },
  {
    path: '/character/:id',
    name: 'character_id',
    component: () => import(/* webpackChunkName: "character_id" */ '@/views/_CharacterView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
