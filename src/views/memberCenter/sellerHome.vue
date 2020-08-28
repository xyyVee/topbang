<template>
  <div class="main">
    <el-card class="card">
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
    <el-row class="row">
      <!-- 我的试用 -->
      <el-card class="card card-1">
        <div slot="header" class="clearfix">
          <span>我的试用</span>
          <el-button style="float: right; padding: 3px 0" type="text">
            管理全部
            <svg-icon icon-class="arrow-right" />
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
      </el-card>
    </el-row>
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
      ]
    }
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
</style>
<style lang="scss">
.card-1 .el-card__header {
  border: none !important;
}
</style>
