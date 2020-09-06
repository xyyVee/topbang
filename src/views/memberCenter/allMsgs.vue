<template>
  <div class="main">

    <el-card class="bg-2">
      <div class="title">
        <svg-icon icon-class="arrow-down" />所有消息
      </div>
      <div class="list">
        <div v-for="(item,index) in list" :key="index" class="cell" @click="handleClick(index)">
          <i class="el-icon-message" :class="[!item.status?'read':'unread']" />
          <div>
            <span class="title">{{ item.title }}</span>
            <span class="grey">{{ item.time }}</span>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        { title: '退款申请已通过', time: '2020-03-02 13:59:20', text: '尊敬的用户，您提交的退款申请已通过，需扣除手续费0元，可退金额100元。退款将在3-7天内退回账号余额', status: 0 },
        { title: '退款申请已通过', time: '2020-03-02 13:59:20', text: '尊敬的用户，您提交的退款申请已通过，需扣除手续费0元，可退金额100元。退款将在3-7天内退回账号余额', status: 1 },
        { title: '退款申请已通过', time: '2020-03-02 13:59:20', text: '尊敬的用户，您提交的退款申请已通过，需扣除手续费0元，可退金额100元。退款将在3-7天内退回账号余额', status: 1 },
        { title: '退款申请已通过', time: '2020-03-02 13:59:20', text: '尊敬的用户，您提交的退款申请已通过，需扣除手续费0元，可退金额100元。退款将在3-7天内退回账号余额', status: 1 },
        { title: '退款申请已通过', time: '2020-03-02 13:59:20', text: '尊敬的用户，您提交的退款申请已通过，需扣除手续费0元，可退金额100元。退款将在3-7天内退回账号余额', status: 1 }
      ]
    }
  },
  methods: {
    handleClick(index) {
      this.list[index].status = 0
    }
  }
}
</script>
<style lang="scss" scoped>
.main {
  width: 970px;
  .title {
    font-weight: 600;
    margin-right: 10px;
  }
  .grey {
    color: #888;
  }
}
.cell {
  display: flex;
  justify-content: baseline;
  border: 1px solid #f0f0f0;
  margin: 20px 0;
  padding: 10px;
  font-size: 15px;
}
.el-icon-message {
  margin: 5px 10px;
}
.unread {
  color: crimson;
}
</style>
