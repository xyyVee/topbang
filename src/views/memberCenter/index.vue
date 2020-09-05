<template>
  <div class="app">
    <Header />
    <div class="main">
      <div class="container">
        <SideBar />
        <!-- 嵌套的子路由 -->
        <router-view class="right-container" />
      </div>
      <div class="footer">
        <div class="text">关于我们 | 服务声明 | 加入我们 | 联系我们 | 合作伙伴计划 | 常见问题 | 网站导航 | 商家认证 | 客服中心</div>
        <div class="text">Copyright ©2004-2020 TOP帮版权所有</div>
      </div>
    </div>
  </div>
</template>

<script>

import Header from '@/components/Header'
import SideBar from './components/SideBar'
import '@/styles/index.scss'

export default {

  components: {
    Header,
    SideBar
  }
}
</script>

<style lang="scss" scoped>
.app {
  min-width: 1200px;
  background: #f0f0f0;
  .container {
    display: flex;
    justify-content: center;
    margin-top: 90px;
    padding-top: 20px;
  }
}

.main {
  .footer {
    font-size: 15px;
    padding: 50px 0 30px 0;
    background: #fff;
    .text {
      line-height: 2;
      text-align: center;
      color: #888;
    }
  }
}
</style>
<style lang="scss">
.bg-2 {
  min-width: 1000px;
  background: url(../../assets/center/bg-2.png) no-repeat;
  background-size: 100% auto;
  background-color: #fff;
  background-position: center;
}
.bg-1 {
  background: url(../../assets/center/bg-1.png) no-repeat;
  background-size: auto 80%;
  background-color: #fff;
  background-position-x: right;
  background-position-y: center;
}
</style>
