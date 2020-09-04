<template>
  <div class="main">
    <el-card class="bg-2">
      <div class="title">
        <svg-icon icon-class="arrow-down" />账户安全
      </div>

      <el-row v-for="(item,index) in list" :key="index" class="row">
        <el-col :span="8">
          <div>{{ item.label }}</div>
        </el-col>
        <el-col :span="12">
          <el-progress v-if="item.type" :stroke-width="12" :percentage="100" :format="format" color="#67C23A" />
          <div v-else class="grey">{{ item.text }}</div>
        </el-col>
        <el-col :span="4">
          <el-button v-if="item.btn===1" type="text" @click="handleDialog(item)">查看</el-button>
          <el-button v-if="item.btn===2" type="text" @click="handleDialog(item)">修改</el-button>
          <el-button v-if="item.btn===3" type="text" @click="handleDialog(item)">修改</el-button>
          <el-button v-if="item.btn===3" type="text" @click="handleDialog(item)">解绑</el-button>
          <el-button v-if="item.btn===4" type="text" @click="handleDialog(item)">重置</el-button>
        </el-col>
      </el-row>
    </el-card>

    <el-dialog :title="form.name" :visible.sync="dialogVisible">
      <el-form>
        <el-form-item :label="form.label">
          <el-input v-model="form.text" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      form: {},
      list: [
        { type: 1, label: '安全等级', btn: 0 },
        { type: 0, label: '登录密码', text: '登录支付宝账户时需要输入的密码', btn: 4 },
        { type: 0, label: '支付密码', text: '支付所购买商品或服务时使用', btn: 4 },
        { type: 0, label: '实名认证', text: '钟*|3*****************|已认证', btn: 1 },
        { type: 0, label: '邮箱', text: 'zho****@136.com 已绑定', btn: 2 },
        { type: 0, label: '手机', text: '159******26 已绑定', btn: 3 },
        { type: 0, label: '登录记录', text: '上次登录网站时间：2020-08-08 14:50:38', btn: 0 }
      ]
    }
  },
  methods: {
    format(percentage) {
      return percentage === 100 ? '高' : `${percentage}%`
    },
    handleDialog(item) {
      this.form = item
      this.dialogVisible = true
    }
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
    width: 80px;
    height: 80px;
    border-radius: 100px;
  }
  .grey {
    color: #888;
  }
}
</style>
