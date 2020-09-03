<template>
  <div class="main">
    <el-card class="bg-2">
      <div class="title">
        <svg-icon icon-class="arrow-down" />营销推广
      </div>
      <div class="header">
        <el-tabs>
          <el-tab-pane label="全部推广" />
          <el-tab-pane>
            <span slot="label">
              审核中<sup class="badge">1</sup>
            </span>
          </el-tab-pane>
          <el-tab-pane label="推广中" />
          <el-tab-pane label="已结束" />
        </el-tabs>

        <div class="grey">
          <router-link to="/memberCenter/marketing">
            返回<i class="el-icon-arrow-right" />
          </router-link>
        </div>

      </div>
      <div class="label">
        <div class="col-1">推广类型</div>
        <div class="col-2">图片/产品</div>
        <div class="col-3">推广时长</div>
        <div class="col-4">金额（元）</div>
        <div class="col-5">状态</div>
        <div class="col-6">操作</div>
      </div>
      <div class="list">
        <div v-for="(item,index) in list" :key="index" class="cell">
          <div class="top">
            <div>单号：<span>{{ item.num }}</span></div>
            <div>{{ item.time }}</div>
          </div>
          <div class="bot">
            <div class="col-1">{{ item.type }}</div>
            <div class="col-2">
              <img :src="item.src" alt="">
            </div>
            <div class="col-3">{{ item.long }}</div>
            <div class="col-4">{{ item.price }}</div>
            <div class="col-5">
              <div :class="[item.status===3?'red':'']">{{ statusMap[item.status] }}</div>
              <div v-if="item.status===2">等待发布</div>
              <div v-if="item.status===3">（图片违规）</div>
              <div v-if="item.status===4" class="red">剩余推广时间6天</div>
            </div>
            <div class="col-4">
              <el-button v-if="item.status===3" type="text">重新上传图片</el-button>
              <el-button v-if="item.status===5" type="text">再次订购</el-button>
            </div>
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
      role: '',
      value1: '',
      value2: '',
      options: [],
      list: [
        { time: '2020-08-06 17:15:48', num: 12990756523, type: '首页banner展示', long: '3个月', price: '123456.7', status: 1, src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg' },
        { time: '2020-08-06 17:15:48', num: 12990756523, type: '首页banner展示', long: '3个月', price: '123456.7', status: 2, src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg' },
        { time: '2020-08-06 17:15:48', num: 12990756523, type: '首页banner展示', long: '3个月', price: '123456.7', status: 3, src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg' },
        { time: '2020-08-06 17:15:48', num: 12990756523, type: '首页banner展示', long: '3个月', price: '123456.7', status: 4, src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg' },
        { time: '2020-08-06 17:15:48', num: 12990756523, type: '首页banner展示', long: '3个月', price: '123456.7', status: 5, src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg' }
      ],
      statusMap: {
        1: '审核中',
        2: '审核通过',
        3: '审核未通过',
        4: '推广中',
        5: '已结束'
      }
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
  .grey {
    color: #888;
    margin: 0;
  }

  .red {
    color: crimson;
  }
  .badge {
    background: crimson;
    color: #fff;
    padding: 0 4px;
    border-radius: 20px;
  }
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
}
.label {
  line-height: 40px;
  background-color: #f0f0f0;
  margin-bottom: 20px;
  display: flex;
  align-content: center;
  .col-1 {
    text-align: center;
  }
}
.list {
  .cell {
    border: 1px solid #f0f0f0;
    margin-bottom: 20px;
  }
  .top {
    line-height: 40px;
    padding: 0 2%;
    background-color: #f0f0f0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #666;
    font-size: 15px;
    span {
      color: #000;
      font-weight: 600;
    }
  }
  .bot {
    height: 120px;
    padding-left: 2%;
    display: flex;
    align-items: center;
    img {
      width: 100px;
      height: 60px;
      object-fit: cover;
    }
  }
}

.col-1 {
  width: 20%;
}
.col-2 {
  text-align: center;
  width: 25%;
}
.col-3 {
  text-align: center;
  width: 10%;
}
.col-4 {
  width: 15%;
  text-align: center;
}
.col-5 {
  width: 15%;
  text-align: center;
}
.col-6 {
  width: 15%;
  text-align: center;
}
</style>
