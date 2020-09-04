<template>
  <div class="main">
    <!-- 个人信息 -->
    <el-card v-if="role==='buyer'" class="bg-2">
      <div class="title">
        <svg-icon icon-class="arrow-down" />个人信息
      </div>
      <el-row v-for="(item,index) in list1" :key="index" class="row">
        <el-col :span="8">
          <div>{{ item.label }}</div>
        </el-col>
        <el-col :span="12" :class="[item.type?'avatar':'']">
          <img v-if="item.type" src="@/assets/pics/scroll-banner.png">
          <div v-else class="grey">{{ item.text }}</div>
        </el-col>
        <el-col :span="4">
          <el-button v-if="item.btn===1" type="text" @click="handleDialog(item)">查看</el-button>
          <el-button v-if="item.btn===2" type="text" @click="handleDialog(item)">修改</el-button>
          <el-button v-if="item.btn===3" type="text" @click="handleDialog(item)">修改</el-button>
          <el-button v-if="item.btn===3" type="text" @click="handleDialog(item)">解绑</el-button>
        </el-col>
      </el-row>
    </el-card>
    <!-- 公司信息 -->
    <el-card v-else class="bg-2">
      <div class="title">
        <svg-icon icon-class="arrow-down" />公司信息
      </div>
      <el-row v-for="(item,index) in list2" :key="index" class="row">
        <el-col :span="8">
          <div>{{ item.label }}</div>
        </el-col>
        <el-col :span="12" :class="[item.type?'avatar':'']">
          <img v-if="item.type" src="@/assets/pics/scroll-banner.png">
          <div v-else class="grey">{{ item.text }}</div>
        </el-col>
        <el-col :span="4">
          <el-button v-if="item.btn===1" type="text" @click="handleDialog(item)">查看</el-button>
          <el-button v-if="item.btn===2" type="text" @click="handleDialog(item)">修改</el-button>
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
      role: '',
      list1: [
        { type: 0, label: '用户名', text: 'xxx', btn: 0 },
        { type: 0, label: '用户类型', text: '个人用户', btn: 1 },
        { type: 0, label: '真实姓名', text: '钟*|3*****************|已认证', btn: 1 },
        { type: 0, label: '邮箱', text: 'zho****@136.com 已绑定', btn: 2 },
        { type: 0, label: '手机', text: '159******26 已绑定', btn: 3 },
        { type: 1, label: '用户头像', text: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg', btn: 2 }
      ],
      list2: [

        { type: 0, label: '公司名称', text: '杭州域加网络科技有限公司', btn: 0 },
        { type: 0, label: '用户类型', text: '企业账户', btn: 0 },
        { type: 0, label: '员工规模', text: '20人以下', btn: 2 },
        { type: 0, label: '业务范畴', text: '信息服务业务', btn: 0 },
        { type: 0, label: '法定代表人', text: '钟*|3*****************|已认证', btn: 0 },
        { type: 1, label: '用户头像', text: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg', btn: 2 },
        { type: 0, label: '公司简介', text: ' 成立于2009年，专门从事计算机主板/工业控制板/通信网络设备的主芯片的销售。产品包括各种主要芯片：北桥芯片，南桥芯片，VGA芯片，NIC芯片，内部存储器，RAM芯片，互联网服务器芯片，交换芯片，通信网络控制芯片以及音频和视频图像处理芯片，以及其他相关芯片的多年电子分销经验，标准的管理，良好的质量，使N-south的有效操作程序可以帮助我们的客户在市场上获得优势。 ', btn: 2 }

      ],
      dialogVisible: false,
      form: {}
    }
  },
  created() {
    this.role = localStorage.role
  },
  methods: {
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
    display: flex;
    align-items: center;
    img {
      width: 80px;
      height: 80px;
      border-radius: 100px;
    }
  }
  .grey {
    padding: 10px 10px 10px 0;
    color: #888;
    line-height: 1.5;
  }
  .bot {
    display: flex;
    align-items: baseline;
  }
}
</style>
