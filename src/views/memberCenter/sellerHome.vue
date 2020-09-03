<template>
  <div class="main">
    <el-card class="card bg-1">
      <div class="header">
        <div class="info">
          <img class="avatar" src="@/assets/pics/scroll-banner.png">
          <div>
            <div class="name">杭州域加网络科技有限公司<i class="el-icon-circle-check" /></div>
            <div class="icons">
              <img class="item" src="@/assets/icons/email.png">
              <img class="item" src="@/assets/icons/phone.png">
              <img class="item" src="@/assets/icons/member.png">
              <el-tag type="info" size="mini">已认证</el-tag>
            </div>
          </div>
        </div>
        <div class="money">
          <div>余额</div>
          <div class="num">30000.00 元</div>
          <el-button type="text">充值</el-button>
        </div>
        <div class="money">
          <div>可上传视频</div>
          <div class="num">10 个</div>
          <el-button type="text">购买数量</el-button>
        </div>
      </div>
    </el-card>
    <el-row>
      <el-col :span="16">
        <el-card class="card card-4">
          <img class="img" src="@/assets/pics/seller-b1.png" alt="">
        </el-card>
      </el-col>
      <el-col :span="8">
        <!-- 我的消息 -->
        <el-card class="card card-3">
          <div slot="header" class="clearfix">
            <span>我的消息</span>
            <el-button style="float: right; padding: 3px 0" type="text">
              <svg-icon icon-class="arrow-right" />
            </el-button>
          </div>
          <div v-for="item in msgData" :key="item.id" class="msg">
            <svg-icon icon-class="arrow-right" />
            <span>{{ item.title }}
              <svg-icon icon-class="arrow-right" /></span>
          </div>
        </el-card>
      </el-col>

    </el-row>
    <!-- 我的试用 -->
    <el-card class="card card-1">
      <div slot="header" class="clearfix">
        <span>我的试用</span>
        <el-button style="float: right; padding: 3px 0" type="text">
          管理全部<i class="el-icon-setting" />
        </el-button>
      </div>
      <div class="icons">
        <div class="item">
          <img src="@/assets/icons/deal-4.png" alt="">
          <div>未处理的申请<el-button type="text">5</el-button>
          </div>
        </div>
        <div class="item">
          <img src="@/assets/icons/deal-4.png" alt="">
          <div>试用中的产品<el-button type="text">5</el-button>
          </div>
        </div>
        <div class="item">
          <img src="@/assets/icons/deal-4.png" alt="">
          <div>待评价的试用<el-button type="text">5</el-button>
          </div>
        </div>
        <div class="item">
          <img src="@/assets/icons/deal-4.png" alt="">
          <div>已评价的试用<el-button type="text">5</el-button>
          </div>
        </div>
      </div>
    </el-card>

    <!-- 我的发布 -->
    <el-card class="card card-2">
      <div slot="header" class="clearfix">
        <span>我的发布</span>
        <el-button style="float: right; padding: 3px" type="text">
          管理全部<i class="el-icon-setting" />
        </el-button>
        <el-button style="float: right; padding: 3px" type="text">
          发布<i class="el-icon-upload2" />
        </el-button>
      </div>
      <div class="videos">
        <el-card
          v-for="item in contentData"
          :key="item.id"
          class="video-card"
          :body-style="{ padding: '0px' }"
        >
          <VideoItem :content="item" />
          <div class="info">
            <span>产品名称（机器人）</span>
            <div class="bottom">
              <div>
                <el-button type="text">编辑</el-button>
                <el-button type="text">查看详情</el-button>
              </div>
              <i class="el-icon-delete" />
            </div>
          </div>
        </el-card>
      </div>
      <div class="btn">
        <span class="grey"><i class="el-icon-setting" /> 管理更多</span>
      </div>
    </el-card>

    <!-- 数据中心 -->
    <el-card class="card card-5">
      <div slot="header" class="clearfix">
        <span>数据中心</span>
        <el-button style="float: right; padding: 3px 0" type="text">
          管理全部<i class="el-icon-setting" />
        </el-button>
      </div>
      <div class="btn">
        <span class="red">当日数据</span>
      </div>
      <div class="charts">
        <div class="item">
          <div class="title">
            <span class="red">0</span>
            <p>访客数</p>
          </div>
          <div id="chart1" style="width: 100%; height: 200px;" />
        </div>
        <div class="item">
          <div class="title">
            <span class="red">0</span>
            <p>主页浏览量</p>
          </div>
          <div id="chart2" style="width: 100%; height: 200px;" />
        </div>
        <div class="item">
          <div class="title">
            <span class="red">0</span>
            <p>产品浏览量</p>
          </div>
          <div id="chart3" style="width: 100%; height: 200px;" />
        </div>
        <div class="item">
          <div class="title">
            <span class="red">0</span>
            <p>支付买家数</p>
          </div>
          <div id="chart4" style="width: 100%; height: 200px;" />
        </div>
      </div>
      <div class="bot">
        <div class="cell">
          <svg-icon icon-class="store" class="icon" />
          <div class="rgt">
            <p class="title">爆款商品</p>
            <p>昨天浏览量Top1的商品是扫地机器人</p>
          </div>
        </div>
        <div class="cell">
          <svg-icon icon-class="store" class="icon" />
          <div class="rgt">
            <p class="title">店铺概况</p>
            <p>店铺今日浏览量排行第10033名，较前日上涨44名</p>
          </div>
        </div>
        <div class="cell">
          <svg-icon icon-class="store" class="icon" />
          <div class="rgt">
            <p class="title">数据异常</p>
            <p>今日暂无数据异常</p>
          </div>
        </div>
        <div class="cell">
          <svg-icon icon-class="store" class="icon" />
          <div class="rgt">
            <p class="title">核心流量</p>
            <p>昨日引流的Top1流量来源是浙江省</p>
          </div>
        </div>
      </div>
    </el-card>

  </div>
</template>
<script>
import VideoItem from './../components/VideoItem'
import echarts from 'echarts'

export default {
  components: {
    VideoItem
  },
  data() {
    return {

      contentData: [
        {
          id: 1,
          title: '视频分析'
        }, {
          id: 2,
          title: '在线教育'
        }, {
          id: 3,
          title: '智能家居'
        }, {
          id: 4,
          title: '语音识别'
        }, {
          id: 5,
          title: '车辆追踪'
        }, {
          id: 6,
          title: '智慧社区'
        }
      ],
      msgData: [
        {
          id: 1,
          title: '您有2张优惠券到账啦，快进来看看吧！'
        }, {
          id: 2,
          title: '您有2张优惠券到账啦，快进来看看吧！'
        }
      ],
      option1: {
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['0', '8', '16', '24']
        },
        yAxis: {
          show: false
        },
        series: [
          {
            name: '访客数',
            type: 'line',
            stack: '总量',
            data: [1, 0, 0, 0]
          }
        ]
      }
    }
  },
  mounted() {
    const Chart1 = echarts.init(document.getElementById('chart1'))
    Chart1.setOption(this.option1)

    const Chart2 = echarts.init(document.getElementById('chart2'))
    Chart2.setOption(this.option1)

    const Chart3 = echarts.init(document.getElementById('chart3'))
    Chart3.setOption(this.option1)

    const Chart4 = echarts.init(document.getElementById('chart4'))
    Chart4.setOption(this.option1)
  }
}
</script>
<style lang="scss" scoped>
.main {
  width: 970px;
}
.el-icon-circle-check {
  color: rgb(26, 98, 231);
}
.header {
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .info {
    width: 380px;
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
    width: 130px;
    .num {
      font-weight: 600;
    }
  }
}
.card-4 {
  padding: 0;
  img {
    width: 100%;
    display: block;
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
    .item {
      display: flex;
      align-items: center;
      font-size: 15px;
      img {
        margin-right: 10px;
      }
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
.card-3 {
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
.card-5 {
  .charts {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f0f0f0;
    .item {
      width: 20%;
    }
    .title {
      text-align: center;
      .red {
        color: crimson;
      }
      p {
        margin: 5px 0;
      }
    }
  }
  .bot {
    display: flex;
    flex-wrap: wrap;
    .cell {
      width: 50%;
      display: flex;
      align-items: center;
      height: 80px;
      .icon {
        font-size: 40px;
        margin-right: 10px;
      }
      .title {
        font-size: 18px;
      }
      p {
        margin: 5px 0;
      }
    }
  }
}

.btn {
  text-align: center;
  margin: 20px 0;
  .grey {
    padding: 5px 10px;
    background: #f0f0f0;
  }
  .red {
    padding: 5px 15px;
    background: rgb(175, 64, 58);
    color: #fff;
    border-radius: 5px;
    font-size: 15px;
  }
}
</style>
<style lang="scss">
.card-1 .el-card__header {
  border: none !important;
}
</style>
