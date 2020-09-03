<template>
  <div class="main">

    <el-card class="bg-2">
      <div class="title">
        <svg-icon icon-class="arrow-down" />消息设置
      </div>
      <p class="grey">选择接受的消息类型：</p>
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="系统通知" />
        <el-checkbox label="系统公告" />
        <el-checkbox label="优惠券" />
        <el-checkbox label="推广信息" />
      </el-checkbox-group>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkList: ['系统通知']
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
    margin: 20px 0;
  }
  .bg-2{
    height: 100%;
  }
}
</style>
