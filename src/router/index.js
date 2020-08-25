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
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/MemberCenter',
    component: () => import('@/views/memberCenter/index.vue'),
    redirect: '/MemberCenter/home',
    children: [
      {
        path: 'home',
        name: '主页',
        component: () => import('@/views/memberCenter/home.vue')
      },
      {
        path: 'information',
        name: '个人信息',
        component: () => import('@/views/memberCenter/information.vue')
      },
      {
        path: 'security',
        name: '账户安全',
        component: () => import('@/views/memberCenter/security.vue')
      },
      {
        path: 'tryout',
        name: '我的试用',
        component: () => import('@/views/memberCenter/tryout.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
