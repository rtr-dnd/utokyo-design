import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/check',
    name: 'check',
    component: () => import(/* webpackChunkName: "about" */ '../views/Check.vue')
  },
  {
    path: '/try',
    name: 'try',
    component: () => import(/* webpackChunkName: "about" */ '../views/Try.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
