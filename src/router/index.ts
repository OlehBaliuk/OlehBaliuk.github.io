import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import ScannerPage from '@/views/ScannerPage.vue'
import ResultPage from '@/views/ResultPage.vue'
import getJwt from '@/utils/getJwt'
import routePaths from '@/constants/routePaths'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: { name: 'scanner' }
  },
  {
    path: routePaths.login,
    name: 'login',
    component: LoginPage
  },
  {
    path: routePaths.scanner,
    name: 'scanner',
    component: ScannerPage,
    meta: { requiresAuth: true }
  },
  {
    path: routePaths.result,
    name: 'result',
    component: ResultPage,
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta?.requiresAuth && !getJwt()) {
    next(routePaths.login)
  } else {
    next()
  }
})

export default router
