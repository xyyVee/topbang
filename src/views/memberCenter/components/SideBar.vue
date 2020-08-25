<template>
  <div class="sideBar">
    <el-menu :default-openeds="defaultOpeneds">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>用户中心</template>
        <el-menu-item-group>
          <el-menu-item index="1-1">
            <router-link class="item" to="/MemberCenter/information" v-text="'个人信息'" />
          </el-menu-item>
          <el-menu-item index="1-2">            
            <router-link class="item" to="/MemberCenter/security" v-text="'账户安全'" />
            </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>试用管理</template>
        <el-menu-item-group>
          <el-menu-item index="2-1">
            <router-link class="item" to="/MemberCenter/tryout" v-text="'我的试用'" />
          </el-menu-item>
          <el-menu-item index="2-2">我的评价</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>我的消息</template>
        <el-menu-item-group>
          <el-menu-item index="3-1">所有消息</el-menu-item>
          <el-menu-item index="3-2">消息设置</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title"><i class="el-icon-setting"></i>我的关注</template>
        <el-menu-item-group>
          <el-menu-item index="4-1">我的点赞</el-menu-item>
          <el-menu-item index="4-2">我的收藏</el-menu-item>
          <el-menu-item index="4-3">我的浏览记录</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title"><i class="el-icon-setting"></i>客户服务</template>
        <el-menu-item-group>
          <el-menu-item index="5-1">在线客服</el-menu-item>
          <el-menu-item index="5-2">举报中心</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {

  data() {
    return {
      defaultOpeneds:['1','2', '3','4','5']
    }
  },
}
</script>
<style lang="scss" scoped>
.sideBar{
  margin-top: 90px;
}
</style>
