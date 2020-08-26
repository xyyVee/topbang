<template>
  <div class="main">

    <el-card>
      <div class="title">
        <svg-icon icon-class="arrow-down" />个人信息
      </div>
      <el-row class="row">
        <el-col :span="8">
          <div>用户名</div>
        </el-col>
        <el-col :span="12">
          <div class="grey">xxx</div>
        </el-col>
      </el-row>

      <el-row class="row">
        <el-col :span="8">
          <div>用户类型</div>
        </el-col>
        <el-col :span="12">
          <div class="grey">个人用户</div>
        </el-col>
        <el-col :span="4">
          <el-button type="text">查看</el-button>
        </el-col>
      </el-row>

      <el-row class="row">
        <el-col :span="8">
          <div>真实姓名</div>
        </el-col>
        <el-col :span="12">
          <div class="grey">钟*|3*****************|已认证</div>
        </el-col>
        <el-col :span="4">
          <el-button type="text">查看</el-button>
        </el-col>
      </el-row>

      <el-row class="row">
        <el-col :span="8">
          <div>邮箱</div>
        </el-col>
        <el-col :span="12">
          <div class="grey">zho****@136.com 已绑定</div>
        </el-col>
        <el-col :span="4">
          <el-button type="text">修改</el-button>
        </el-col>
      </el-row>

      <el-row class="row">
        <el-col :span="8">
          <div>手机</div>
        </el-col>
        <el-col :span="12">
          <div class="grey">159******26 已绑定</div>
        </el-col>
        <el-col :span="4">
          <el-button type="text">修改 | 解绑</el-button>
        </el-col>
      </el-row>

      <el-row class="row">
        <el-col :span="8">
          <div>用户头像</div>
        </el-col>
        <el-col :span="12">
          <img class="avatar" src="@/assets/pics/scroll-banner.png">
        </el-col>
        <el-col :span="4">
          <el-button type="text">修改</el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<style lang="scss" scoped>
.main {
  width: 970px;
  .title {
    font-weight: 600;
  }
  .row {
    line-height: 100px;
  }
  .avatar {
    width: 80px;
    height: 80px;
    border-radius: 100px;
  }
  .grey {
    color: #888;
  }
}
</style>
