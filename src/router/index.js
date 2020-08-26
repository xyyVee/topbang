import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // 主页1
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // 主页2
  {
    path: '/main',
    name: 'Main',
    component: () => import('../views/Main.vue')
  },
  // 登陆
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  // 产品主页
  {
    path: '/productMain',
    name: 'ProductMain',
    component: () => import('../views/product/main.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // 会员中心
  {
    path: '/MemberCenter',
    component: () => import('@/views/MemberCenter/index.vue'),
    redirect: '/MemberCenter/home',
    children: [
      {
        path: 'home',
        name: '主页',
        component: () => import('@/views/MemberCenter/home.vue')
      },
      {
        path: 'information',
        name: '个人信息',
        component: () => import('@/views/MemberCenter/information.vue')
      },
      {
        path: 'security',
        name: '账户安全',
        component: () => import('@/views/MemberCenter/security.vue')
      },
      {
        path: 'tryout',
        name: '我的试用',
        component: () => import('@/views/MemberCenter/tryout.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
