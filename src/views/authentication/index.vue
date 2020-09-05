<template>
  <div class="app">
    <Header />
    <div class="container">
      <el-steps class="steps" :space="200" :active="active" finish-status="success">
        <el-step />
        <el-step />
        <el-step />
      </el-steps>
      <div class="card">
        <div v-if="active===0">
          <Register @tabVal="tabVal" />
        </div>
        <div v-else-if="active===1">
          <PersonalAuth v-if="role==='buyer'" />
          <BusinessAuth v-else />
        </div>
        <div v-else class="step">
          <i class="el-icon-success" />
          <p>{{ notice }}</p>
        </div>
        <div class="checkbox">
          <el-checkbox v-if="active<2" v-model="value" label="1">
            <p class="tip">创建网站账号的同时：我同意遵守 <span
              class="blue"
              @click="dialogVisible=true"
            >TOP帮企业认证协议</span>,<br>愿意接收相关来自TOP帮的会员及服务信息。</p>
          </el-checkbox>
        </div>
        <div class="bot">
          <el-button class="btn" type="danger" @click="next()">{{ btnText }}</el-button>
          <el-button class="btn" type="text">{{ botText }}</el-button>
        </div>
      </div>
    </div>
    <!-- 协议 -->
    <el-dialog title="注册协议" :visible.sync="dialogVisible" width="40%" class="dialog">
      <p>【审憤阅读】您在申谞注册流程中点击同意前，应当认真阅读以下协议。谞您务必审憤阅读、充分理
        解协议中相关条款内容，其中包括：</p>
      <p>1、 与您约定免除或限制贵任的条款；</p>
      <p>2、 与您约定法律适用和管辖的条款；</p>
      <p>3、 其他以粗体下划线标识的重要条款。</p>
      <p>如您对协议有任何疑问，可向100帮服务中心（谞点击）咨询</p>
      <p>【特别提示】您已充分理解，100帮是一个商业贸易采购平台，而并非面向消费者的消费购买市场，
        当您按照注册页面提示填写信患、阅读并同意协议且完成全部注册程序后，即表示您已充分阅读、理
        解并接受协议的全部内容，并将基于您的真实贸易需求而使用阿里巴巴服务。如您因阿里巴巴服务与
        阿里巴巴发生争议，应适用<span class="blue">《TOP帮服务条款》</span>处理；如您在使用阿里巴巴服务中与其他用户发生争
        议，依您与其他用户达成的协议处理。</p>
      <p>阅读协议的过程中，如果您不同意相关协议或其中任何条款约定，您应立即停止注册程序。</p>
      <p>
        <span class="blue">《TOP帮服务条款》</span>
      </p>
      <p>
        <span class="blue">《隐私政策》</span>
      </p>
      <p>
        <span class="blue">《TOP帮会员协议》</span>
      </p>

      <div class="dialog-footer">
        <el-button type="danger" @click="dialogVisible = false">同意协议</el-button>
        <el-button type="text" @click="dialogVisible = false">关闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>

import Header from '@/components/Header'
import PersonalAuth from './PersonalAuth'
import BusinessAuth from './BusinessAuth'
import Register from './Register'
import '@/styles/index.scss'

export default {

  components: {
    Header,
    PersonalAuth,
    BusinessAuth,
    Register
  },
  data() {
    return {
      active: 0,
      value: '',
      dialogVisible: false
    }
  },
  computed: {
    btnText() {
      if (this.active === 0) {
        return '同意并注册'
      } else if (this.active === 1) {
        return '提交认证'
      } else if (this.active === 2) {
        return this.role === 'buyer' ? '前往实名认证' : '前往企业认证'
      } else {
        return '返回会员中心'
      }
    },
    botText() {
      if (this.active === 2 || this.active === 3) {
        return '返回会员中心'
      } else {
        return ''
      }
    },
    notice() {
      if (this.active === 2) {
        return this.role === 'buyer' ? '您的账号已注册成功！进行实名认证享受更多服务。' : '您的账号已注册成功！进行企业认证享受更多服务。'
      } else if (this.active === 3) {
        return this.role === 'buyer' ? '已成功提交实名认证，请耐心等待审核。' : '已成功提交企业认证，请耐心等待审核。'
      } else {
        return ''
      }
    }
  },
  methods: {

    next() {
      if (this.active++ > 2) this.active = 0
    },
    tabVal(v) {
      this.role = v ? 'seller' : 'buyer'
    }
  }
}
</script>

<style lang="scss" scoped>
.app {
  background: #f0f0f0;
  min-width: 1200px;
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
  .step {
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
.checkbox {
  display: flex;
  justify-content: center;
}

.blue {
  color: #409eff;
}
.dialog {
  p {
    margin: 5px 0;
    line-height: 1.5;
  }
  .dialog-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
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
