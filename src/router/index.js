import Vue from 'vue'
import Router from 'vue-router'

import Main from '../components/Main'

Vue.use(Router)

const routes = [
  {
    path: '/main',
    name: 'Main',
    component: Main
  }
]

const router = new Router({
  mode: 'history',
  routes: routes
})

export default router
