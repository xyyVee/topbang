<template>
  <div class="main">
    <el-card>
      <div class="title">
        <svg-icon icon-class="arrow-down" />已发布的视频
      </div>
      <!-- 筛选区域 -->
      <el-row class="header">
        <el-col :span="14">

          <el-tabs>
            <el-tab-pane label="全部视频"></el-tab-pane>
            <el-tab-pane label="审核中"></el-tab-pane>
            <el-tab-pane>
              <span slot="label">
                已发布<sup class="badge">1</sup>
              </span>
            </el-tab-pane>
            <el-tab-pane label="未发布"></el-tab-pane>
          </el-tabs>
        </el-col>
        <el-col :span="8">
          <el-input v-model="value1" class="input">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="2">
          <el-select v-model="value2" placeholder="筛选" class="select">
            <el-option v-for="item in options" :key="item.value" :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
      </el-row>

      <div class="label">
        <div class="col-1">视频名称</div>
        <div class="col-2">上传时间</div>
        <div class="col-3">状态</div>
        <div class="col-4">操作</div>
      </div>
      <div class="list">
        <div class="cell" v-for="(item,index) in list" :key="index">
          <div class="top">
            <div>编号：<span>{{item.num}}</span></div>
          </div>
          <div class="bot">
            <div class="col-1">
              <img :src="item.src" alt="">
              <p>{{item.title}}</p>
            </div>
            <div class="col-2">{{item.time}}</div>
            <div class="col-3">
              <div>{{statusMap[item.status]}}</div>
              <div class="grey">视频详情</div>
            </div>
            <div class="col-4">
              <el-button type="text" v-if="item.status===1">取消发布</el-button>
              <el-button type="text" v-if="item.status===4">重新发布</el-button>
              <el-button type="text" v-if="item.status===3||item.status===4">重新编辑</el-button>
              <el-button type="text" v-if="item.status===2">下架视频</el-button>
              <el-button type="text">删除视频</el-button>
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
      value1: '',
      value2: '',
      options: [],
      list: [
        { time: '2020-08-06 17:15:48', num: 12990756523, src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg', title: '扫地机器人1C智能家用全自动扫拖一体机拖地吸尘器三合一', company: '杭州域加网络科技有限公司', status: 1 },
        { time: '2020-08-06 17:15:48', num: 12990756523, src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg', title: '扫地机器人1C智能家用全自动扫拖一体机拖地吸尘器三合一', company: '杭州域加网络科技有限公司', status: 2 },
        { time: '2020-08-06 17:15:48', num: 12990756523, src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg', title: '扫地机器人1C智能家用全自动扫拖一体机拖地吸尘器三合一', company: '杭州域加网络科技有限公司', status: 3 },
        { time: '2020-08-06 17:15:48', num: 12990756523, src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg', title: '扫地机器人1C智能家用全自动扫拖一体机拖地吸尘器三合一', company: '杭州域加网络科技有限公司', status: 4 }
      ],
      statusMap: {
        1: '审核中',
        2: '已发布',
        3: '审核失败',
        4: '已下架',
      }
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
  .grey {
    font-size: 15px;
    color: #888;
    margin: 0;
  }

  .badge {
    background: crimson;
    color: #fff;
    padding: 0 4px;
    border-radius: 20px;
  }
}
.header {
  .right {
    .input {
      float: right;
      width: 200px;
    }
    .select {
      float: right;
      width: 80px;
    }
  }
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
  .col-1 {
    display: flex;
    align-items: center;
  }
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
      width: 80px;
      height: 80px;
      object-fit: cover;
      margin-right: 10px;
    }
  }
}

.col-1 {
  width: 35%;
  .select {
    width: 150px;
  }
}
.col-2 {
  text-align: center;
  width: 30%;
}
.col-3 {
  text-align: center;
  width: 20%;
}
.col-4 {
  width: 10%;
  text-align: right;
}

::v-deep {
  .el-input__inner {
    background: none;
    &::placeholder {
      color: #000;
      text-align: right;
    }
  }
}
</style>
