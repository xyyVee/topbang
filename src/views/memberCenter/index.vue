<template>
  <div class="main">
    <Header />
    <el-container>
      <SideBar />
      <!-- 嵌套的子路由 -->
      <router-view></router-view>
    </el-container>
  </div>
</template>

<script>

import Header from '@/components/Header'
import SideBar from './components/SideBar'

export default {

  components: {
    Header,
    SideBar
  }
}
</script>

<style lang="scss" scoped>
</style>
