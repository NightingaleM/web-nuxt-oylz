import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5682fe54 = () => interopDefault(import('../pages/404page.vue' /* webpackChunkName: "pages/404page" */))
const _3ed8f91e = () => interopDefault(import('../pages/resume/index.vue' /* webpackChunkName: "pages/resume/index" */))
const _772b06f1 = () => interopDefault(import('../pages/welcome.vue' /* webpackChunkName: "pages/welcome" */))
const _50e4d1b0 = () => interopDefault(import('../pages/article/_id.vue' /* webpackChunkName: "pages/article/_id" */))
const _08666e21 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/404page",
      component: _5682fe54,
      name: "404page"
    }, {
      path: "/resume",
      component: _3ed8f91e,
      name: "resume"
    }, {
      path: "/welcome",
      component: _772b06f1,
      name: "welcome"
    }, {
      path: "/article/:id?",
      component: _50e4d1b0,
      name: "article-id"
    }, {
      path: "/",
      component: _08666e21,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
