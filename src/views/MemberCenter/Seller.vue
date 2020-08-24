<template>
  <div class="main">
    <el-container>
      <el-aside width="200px">
        <el-menu :default-openeds="'[1,2,3]'">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>用户中心</template>
            <el-menu-item-group>
              <el-menu-item index="1-1">个人信息</el-menu-item>
              <el-menu-item index="1-2">账户安全</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>交易管理</template>
            <el-menu-item-group>
              <el-menu-item index="2-1">已卖出的商品</el-menu-item>
              <el-menu-item index="2-2">评价管理</el-menu-item>
              <el-menu-item index="2-3">试用管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>商品管理</template>
            <el-menu-item-group>
              <el-menu-item index="3-1">发布商品</el-menu-item>
              <el-menu-item index="3-2">出售中的商品</el-menu-item>
              <el-menu-item index="3-3">商品直播</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header height=250>
          <div class="info">
            <img class="avatar" src="@/assets/pics/scroll-banner.png" />
            <div class="name">会员名称</div>
            <div class="icons">
              <img class="item" src="@/assets/icons/email.png" />
              <img class="item" src="@/assets/icons/phone.png" />
              <img class="item" src="@/assets/icons/member.png" />
            </div>
          </div>
        </el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<style lang="scss" scoped>
.main {
  width: 1200px;
  margin: 110px auto;
}
.info {
  width: 280px;
  padding: 35px 0 42px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 100px;
    object-fit: cover;
  }
}
</style>
