<template>
  <div class="main">
    <!-- 个人信息 -->
    <el-card v-if="role==='buyer'" class="bg-2">
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
        <el-col :span="12" class="avatar">
          <img src="@/assets/pics/scroll-banner.png">
        </el-col>
        <el-col :span="4">
          <el-button type="text">修改</el-button>
        </el-col>
      </el-row>
    </el-card>
    <!-- 公司信息 -->
    <el-card v-else class="bg-2">
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
            成立于2009年，专门从事计算机主板/工业控制板/通信网络设备的主芯片的销售。产品包括各种主要芯片：北桥芯片，南桥芯片，VGA芯片，NIC芯片，内部存储器，RAM芯片，互联网服务器芯片，交换芯片，通信网络控制芯片以及音频和视频图像处理芯片，以及其他相关芯片的多年电子分销经验，标准的管理，良好的质量，使N-south的有效操作程序可以帮助我们的客户在市场上获得优势。位于深圳，我们享有便利的主要交通网络。我们公司占地面积42平方米，拥有约8名员工。
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
