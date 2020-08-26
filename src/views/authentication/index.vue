<template>
  <div class="app">
    <Header />
    <div class="container">
      <el-steps class="steps" :space="200" :active="active" finish-status="success">
        <el-step></el-step>
        <el-step></el-step>
        <el-step></el-step>
      </el-steps>
      {{active}}
      <div class="card">
        <div v-if="active===1">
          <PersonalAuth v-if="role==='buyer'" />
          <BusinessAuth v-else />
        </div>
        <div v-else class="step">
          <i class="el-icon-success"></i>
          <p>{{notice}}</p>
        </div>

        <div class="bot">
          <el-button class="btn" type="danger" @click="next()">{{btnText}}</el-button>
          <el-button class="btn" type="text">{{botText}}</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Header from '@/components/Header'
import PersonalAuth from './PersonalAuth'
import BusinessAuth from './BusinessAuth'
import '@/styles/index.scss'

export default {

  components: {
    Header,
    PersonalAuth,
    BusinessAuth
  },
  data() {
    return {
      active: 1
    }
  },
  created() {
    this.role = localStorage.role
  },
  computed: {
    btnText() {
      if (this.active === 1) {
        return '提交认证'
      } else if (this.active === 2) {
        return this.role === 'buyer' ? '前往实名认证' : '前往企业认证'
      } else {
        return '返回会员中心'
      }
    },
    botText() {
      if (this.active !== 1) {
        return '返回会员中心'
      }
    },
    notice(){
      if(this.active === 2){
        return this.role === 'buyer' ? '您的账号已注册成功！进行实名认证享受更多服务。' : '您的账号已注册成功！进行企业认证享受更多服务。'

      }else if(this.active === 3){
        return this.role === 'buyer' ? '已成功提交实名认证，请耐心等待审核。' : '已成功提交企业认证，请耐心等待审核。'
      }
    }
  },
  methods: {

    next() {
      if (this.active++ > 2) this.active = 0;
    }
  }
}
</script>

<style lang="scss" scoped>
.app {
  background: #f0f0f0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  .container {
    width: 100%;
    height: 100%;
    margin: 180px 0 90px 0;
    padding: 20px;
    position: relative;
    .steps {
      width: 600px;
      height: 100px;
      position: absolute;
      top: -70px;
      left: calc(50% - 200px);
    }
  }
}
.card {
  width: 800px;
  background: #fff;
  margin: 0 auto;
  .bot {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 0 30px 0;
    .btn {
      width: 150px;
    }
  }
  .step{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
.el-icon-success {
  color: #67c23a;
  font-size: 50px;
  margin: 30px 0;
}
</style>
<style>
.is-wait .el-step__icon.is-text,
.is-process .el-step__icon.is-text {
  border: 2px solid #ccc;
  background: #ccc;
  color: #999999;
}
.is-success .el-step__icon.is-text {
  background: #ffc2bc;
}
.el-step__head.is-success {
  border-color: #ffc2bc !important;
  color: #c34840;
}
</style>
