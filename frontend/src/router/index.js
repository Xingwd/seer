import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/xuangu',
    redirect: { name: 'hs300' },
    component: () => import(/* webpackChunkName: "xuangu" */ '../views/xuangu/XuanGu.vue'),
    children: [
      {
        path: '/hs300',
        name: 'hs300',
        component: () => import(/* webpackChunkName: "xuangu" */ '../views/xuangu/HS300.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
