<template>
  <div class="main">
    <!-- 个人信息 -->
    <el-card v-if="role==='buyer'">
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
    <!-- 公司信息 -->
    <el-card v-else>
      <div class="title">
        <svg-icon icon-class="arrow-down" />公司信息
      </div>
      <el-row class="row">
        <el-col :span="8">
          <div>用户名</div>
        </el-col>
        <el-col :span="12">
          <div class="grey">杭州域加网络科技有限公司</div>
        </el-col>
      </el-row>

      <el-row class="row">
        <el-col :span="8">
          <div>用户类型</div>
        </el-col>
        <el-col :span="12">
          <div class="grey">企业账户</div>
        </el-col>
      </el-row>

      <el-row class="row">
        <el-col :span="8">
          <div>员工规模</div>
        </el-col>
        <el-col :span="12">
          <div class="grey">20人一下</div>
        </el-col>
        <el-col :span="4">
          <el-button type="text">修改</el-button>
        </el-col>
      </el-row>

      <el-row class="row">
        <el-col :span="8">
          <div>业务范畴</div>
        </el-col>
        <el-col :span="12">
          <div class="grey">信息服务业务</div>
        </el-col>
      </el-row>

      <el-row class="row">
        <el-col :span="8">
          <div>法定代表人</div>
        </el-col>
        <el-col :span="12">
          <div class="grey">钟*|3*****************|已认证</div>
        </el-col>
      </el-row>

      <el-row class="row">
        <el-col :span="8">
          <div>用户头像</div>
        </el-col>
        <el-col :span="12" class="avatar">
          <img src="@/assets/pics/scroll-banner.png">
        </el-col>
        <el-col :span="4">
          <el-button type="text">修改</el-button>
        </el-col>
      </el-row>

      <el-row class="row bot">
        <el-col :span="8">
          <div>公司简介</div>
        </el-col>
        <el-col :span="12">
          <div class="grey">
            但当我们使用广域网和互联网时，我们只需要知道是什么样的接入网和用户名、密码就可以连接到广域网和互联网，并不需要知道广域网和互联网中到底有多少台交换机、路由器、防火墙和服务器，不需要知道数据是通过什么样的路由到达我们的电脑，也不需要知道网络中的服务器分别安装了什么软件，更不需要知道网络中各设备之间采用了什么样的连接线缆和端口。　广域网和互联网对于具体的使用者是完全透明的，我们经常用一个云状的图形来表示广域网和互联网，如下图：
          </div>
        </el-col>
        <el-col :span="4">
          <el-button type="text">修改</el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      role: ''
    }
  },
  created() {
    this.role = localStorage.role
  }
}
</script>
<style lang="scss" scoped>
.main {
  width: 970px;
  .title {
    font-weight: 600;
  }
  .row {
    line-height: 100px;
    display: flex;
    align-items: center;
  }
  .avatar {
    display: flex;
    align-items: center;
    img {
      width: 80px;
      height: 80px;
      border-radius: 100px;
    }
  }
  .grey {
    padding: 0 10px;
    color: #888;
    line-height: 1.5;
  }
  .bot {
    display: flex;
    align-items: baseline;
  }
}
</style>
