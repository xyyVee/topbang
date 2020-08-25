<template>
  <div class="main">
    <el-card class="card">
      <div class="header">
        <div class="info">
          <img class="avatar" src="@/assets/pics/scroll-banner.png" />
          <div>
            <div class="name">会员名称</div>
            <div class="icons">
              <img class="item" src="@/assets/icons/email.png" />
              <img class="item" src="@/assets/icons/phone.png" />
              <img class="item" src="@/assets/icons/member.png" />
              <el-tag type="info" size="mini">已认证</el-tag>
            </div>
          </div>
        </div>
        <div class="money">
          <div>余额</div>
          <div class="num">30000.00 元</div>
          <el-button type="text">充值</el-button>
        </div>
      </div>
    </el-card>
    <!-- 我的试用 -->
    <el-card class="card card-1">
      <div slot="header" class="clearfix">
        <span>我的试用</span>
        <el-button style="float: right; padding: 3px 0" type="text">
          全部试用
          <svg-icon icon-class="arrow-right" />
        </el-button>
      </div>
      <div class="icons">
        <div class="item">
          <img src="@/assets/icons/deal-4.png" alt="">
          <div>申请中<el-button type="text">5</el-button>
          </div>
        </div>
        <div class="item">
          <img src="@/assets/icons/deal-4.png" alt="">
          <div>试用中<el-button type="text">5</el-button>
          </div>
        </div>
        <div class="item">
          <img src="@/assets/icons/deal-4.png" alt="">
          <div>待评价<el-button type="text">5</el-button>
          </div>
        </div>
        <div class="item">
          <img src="@/assets/icons/deal-4.png" alt="">
          <div>已评价<el-button type="text">5</el-button>
          </div>
        </div>
      </div>
      <div class="list">
        <div class="cell" v-for="(item,index) in list" :key="index">
          <div class="left">
            <el-image class="img" :src="item.src" fit="cover"></el-image>
            <div class="info">
              <div>{{item.title}}</div>
              <div class="time">{{item.time}}</div>
            </div>
          </div>
          <div class="btn">
            <el-button type="text">查看详情</el-button> |<el-button type="text">查看评价</el-button>
          </div>
        </div>
      </div>
    </el-card>
    
    <!-- 猜你喜欢 -->
    <el-card class="card card-2">
      <div slot="header" class="clearfix">
        <span>猜你喜欢</span>
        <el-button style="float: right; padding: 3px 0" type="text">
          换一组<svg-icon icon-class="arrow-right" />
        </el-button>
      </div>
      <div class="videos">
        <el-card class="video-card" v-for="item in contentData" :key="item.id"
          :body-style="{ padding: '0px' }">
          <VideoItem :content="item" />
          <div class="info">
            <span>产品名称（机器人）
              <svg-icon icon-class="arrow-right" /></span>
            <div class="bottom">
              <div>￥<span class="money">399</span></div>
              <div>
                <svg-icon icon-class="arrow-right" />
                <svg-icon icon-class="arrow-right" />
              </div>
            </div>
          </div>
        </el-card>
      </div>
    </el-card>
    <!-- 我的消息 -->
    <el-card class="card card-3">
      <div slot="header" class="clearfix">
        <span>我的消息</span>
        <el-button style="float: right; padding: 3px 0" type="text">
          <svg-icon icon-class="arrow-right" />
        </el-button>
      </div>
      <div class="msg" v-for="item in msgData" :key="item.id">
        <svg-icon icon-class="arrow-right" />
        <span>{{item.title}}
          <svg-icon icon-class="arrow-right" /></span>
      </div>
    </el-card>
    <!-- 我看过的 -->
    <el-card class="card card-4">
      <div slot="header" class="clearfix">
        <span>我看过的</span>
        <el-button style="float: right; padding: 3px 0" type="text">
          <svg-icon icon-class="arrow-right" />
        </el-button>
      </div>
      <div class="videos">
        <el-card class="video-card" v-for="item in contentData" :key="item.id"
          :body-style="{ padding: '0px' }">
          <VideoItem :content="item" />
          <div class="info">
            <span>产品名称（机器人）
              <svg-icon icon-class="arrow-right" /></span>
            <div class="bottom">
              <div>￥<span class="money">399</span></div>
              <div>
                <svg-icon icon-class="arrow-right" />
                <svg-icon icon-class="arrow-right" />
              </div>
            </div>
          </div>
        </el-card>
      </div>
    </el-card>
  </div>
</template>
<script>
import VideoItem from './../components/VideoItem'

export default {
  components: {
    VideoItem
  },
  data() {
    return {
      list: [
        { src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg', title: '1C智能家居全自动扫拖一体机拖地吸尘器三合一', time: '2020-08-05 17:16:13' },
        { src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg', title: '1C智能家居全自动扫拖一体机拖地吸尘器三合一', time: '2020-08-05 17:16:13' },
        { src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg', title: '1C智能家居全自动扫拖一体机拖地吸尘器三合一', time: '2020-08-05 17:16:13' }
      ],

      contentData: [
        {
          id: 1,
          title: '视频分析',
        }, {
          id: 2,
          title: '在线教育',
        }, {
          id: 3,
          title: '智能家居',
        }, {
          id: 4,
          title: '语音识别',
        }, {
          id: 5,
          title: '车辆追踪',
        }, {
          id: 6,
          title: '智慧社区'
        }
      ],
      msgData: [
        {
          id: 1,
          title: '您有2张优惠券到账啦，快进来看看吧！',
        }, {
          id: 2,
          title: '您有2张优惠券到账啦，快进来看看吧！',
        },
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.main {
  width: 970px;
  margin: 100px 360px 0 0;
  float: right;
}
.header {
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .info {
    width: 280px;
    padding: 35px 0 42px 0;
    display: flex;
    align-items: center;
    .avatar {
      width: 100px;
      height: 100px;
      border-radius: 100px;
      object-fit: cover;
      margin-right: 20px;
    }
    .name {
      font-weight: 600;
      line-height: 2;
    }
    .icons {
      display: flex;
      align-items: center;
      .item {
        margin-right: 8px;
      }
    }
  }
  .money {
    .num {
      font-weight: 600;
    }
  }
}
.card {
  margin-bottom: 20px;
}
.card-1 {
  .icons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #f1f1f1;
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 15px;
    }
  }
  .list {
    .cell {
      margin: 10px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .left {
        display: flex;
        align-items: center;
        color: #888;
        .time {
          font-size: 13px;
        }
      }
    }
    .img {
      width: 80px;
      height: 80px;
      margin-right: 20px;
    }
  }
}
.card-2 {
  .videos {
    display: flex;
    flex-wrap: wrap;

    .video-card {
      margin-right: 15px;
    }
  }
}
.card-3{
  width: 250px;
  float: right;
}
.card-4 {
  width: 250px;
  float: right;
}
.card {
  .info {
    padding: 10px;
    .bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .money {
        font-size: 24px;
        color: orange;
      }
    }
  }
  .video-card {
    width: 210px;
    margin-bottom: 15px;
  }
}
</style>
<style lang="scss">
.card-1 .el-card__header {
  border: none !important;
}
</style>
