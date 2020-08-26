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
  // 全行业
  {
    path: '/allIndustry',
    name: 'AllIndustry',
    component: () => import('../views/industry/allIndustry.vue')
  },
  // 热门行业
  {
    path: '/industry',
    name: 'Industry',
    component: () => import('../views/industry/industry.vue')
  },
  // 垂直行业
  {
    path: '/verticalIndustry',
    name: 'VerticalIndustry',
    component: () => import('../views/industry/verticalIndustry.vue')
  },
  // 行业目录
  {
    path: '/industryTable',
    name: 'IndustryTable',
    component: () => import('../views/industry/industryTable.vue')
  },
  // 公司主页
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
    path: '/memberCenter',
    component: () => import('@/views/memberCenter/index.vue'),
    redirect: '/memberCenter/home',
    children: [
      {
        path: 'buyerHome',
        name: '买家主页',
        component: () => import('@/views/memberCenter/buyerHome.vue')
      },
      {
        path: 'sellerHome',
        name: '卖家主页',
        component: () => import('@/views/memberCenter/sellerHome.vue')
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
      },
      {
        path: 'comment',
        name: '我的评价',
        component: () => import('@/views/memberCenter/comment.vue')
      },
      {
        path: 'allMsgs',
        name: '所有消息',
        component: () => import('@/views/memberCenter/allMsgs.vue')
      },
      {
        path: 'setMsgs',
        name: '消息设置',
        component: () => import('@/views/memberCenter/setMsgs.vue')
      },
      {
        path: 'videoRelease',
        name: '发布视频',
        component: () => import('@/views/memberCenter/videoRelease.vue')
      },
      {
        path: 'videoPosted',
        name: '已发布的视频',
        component: () => import('@/views/memberCenter/videoPosted.vue')
      },
      {
        path: 'funding',
        name: '资金详情',
        component: () => import('@/views/memberCenter/funding.vue')
      }
    ]
  },
  // 认证
  {
    path: '/authentication',
    name: 'authentication',
    component: () => import('@/views/authentication/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
