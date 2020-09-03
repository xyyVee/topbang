<template>
  <div class="app">
    <Header />
    <div class="container">
      <SideBar />
      <!-- 嵌套的子路由 -->
      <router-view />
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
  background: #f0f0f0;
  height: 100%;
  overflow: scroll;
  .container {
    display: flex;
    height: 100%;
    justify-content: center;
    margin-top: 90px;
    padding-top: 20px;
  }
}
</style>
<style lang="scss">
.bg-2 {
  background: url(../../assets/center/bg-2.png) no-repeat;
  background-size: cover;
  background-color: #fff;
  background-position: center;
}
.bg-1 {
  background: url(../../assets/center/bg-1.png) no-repeat;
  background-size: contain;
  background-color: #fff;
  background-position-x: right;
  background-position-y: center;
}
</style>
