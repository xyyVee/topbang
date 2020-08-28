<template>
  <div class="main">
    <div class="header">
      <div class="title" :class="[tab?'':'tab']" @click="next(0)">
        <img src="@/assets/icons/auth.png" alt="">
        <span>个人账户</span>
      </div>
      <div class="title" :class="[tab?'tab':'']" @click="next(1)">
        <img src="@/assets/icons/auth.png" alt="">
        <span>企业账户</span>
      </div>
    </div>
    <div class="form">
      <el-form ref="form" :model="form" label-width="320px">
        <el-form-item v-if="!tab" label="真实姓名" :rules="[{ required: true}]">
          <el-input placeholder="请填写真实姓名" class="input" />
        </el-form-item>
        <el-form-item v-if="!tab" label="证件类型" :rules="[{ required: true}]">
          <el-select v-model="value" placeholder="请选择证件类型" class="input">
            <el-option label="身份证" value="1" />
            <el-option label="其他" value="2" />
          </el-select>
        </el-form-item>
        <el-form-item v-if="!tab" label="证件号码" :rules="[{ required: true}]">
          <el-input placeholder="请填写证件上的号码" class="input" />
        </el-form-item>
        <el-form-item v-if="tab" label="企业全称" :rules="[{ required: true}]">
          <el-input placeholder="请输入营业执照上的公司名称" class="input" />
        </el-form-item>
        <el-form-item v-if="tab" label="邮箱" :rules="[{ required: true}]">
          <el-input placeholder="请设置登录邮箱" class="input" />
        </el-form-item>
        <el-form-item v-if="tab" label="负责人" :rules="[{ required: true}]">
          <el-input placeholder="请输入账号负责人" class="input" />
        </el-form-item>
        <el-form-item label="站内身份" :rules="[{ required: true}]">
          <el-select v-model="value" placeholder="请选择站内身份" class="input">
            <el-option label="买家" value="1" />
            <el-option label="卖家" value="2" />
          </el-select>
        </el-form-item>

        <el-form-item label="登录密码" :rules="[{ required: true}]">
          <el-input placeholder="请设置登录密码" class="input" />
        </el-form-item>

        <el-form-item label="确认密码" :rules="[{ required: true}]">
          <el-input placeholder="请再次输入登录密码" class="input" />
        </el-form-item>

        <el-form-item label="手机号码" :rules="[{ required: true}]">
          <el-input placeholder="请输入手机号码" class="input" />
        </el-form-item>
        <el-form-item label="手机验证码" :rules="[{ required: true}]">
          <el-input placeholder="请输入手机验证码" style="width:150px" />
          <el-button plain type="danger" class="btn">发送验证码</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      imageUrl: '',
      value: '',
      value1: '',
      value2: '',
      form: {},
      tab: 0
    }
  },
  methods: {
    next(v) {
      this.tab = v
      this.$emit('tabVal', v)
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  line-height: 70px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  padding: 0 150px;
  .title {
    font-size: 26px;
    font-weight: bold;
    display: flex;
    align-items: center;
    img {
      margin-right: 10px;
    }
  }
  .tab {
    border-bottom: 4px solid #c34840;
  }
}
.input {
  width: 300px;
}
.btn {
  margin: 0 10px;
}
.tip {
  .blue {
    color: #409eff;
  }
}

.avatar-uploader {
  width: 120px;
  display: inline-block;
  margin-right: 20px;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 120px;
  height: 120px;
  line-height: 120px;
  text-align: center;
}
.avatar {
  width: 120px;
  height: 120px;
  display: block;
}
</style>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.el-checkbox__input {
  vertical-align: super;
}
</style>
