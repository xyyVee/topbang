<template>
  <div class="product-main">
    <Header />
    <NavSticky :sticky="60" />
    <div class="main-content">
      <div style="width: 1200px; margin: 0 auto;">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">所有行业</a></el-breadcrumb-item>
          <el-breadcrumb-item>热门行业</el-breadcrumb-item>
          <el-breadcrumb-item>人工智能</el-breadcrumb-item>
          <el-breadcrumb-item>扫地机器人</el-breadcrumb-item>
        </el-breadcrumb>

        <div class="center">
          <swiper class="swiper" ref="mySwiper" :options="swiperOptions">
            <swiper-slide class="slide"><img src="../../assets/pics/scroll-banner.png"></swiper-slide>
            <swiper-slide class="slide"><img src="../../assets/pics/scroll-banner.png"></swiper-slide>
            <swiper-slide class="slide"><img src="../../assets/pics/scroll-banner.png"></swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
          <div class="info">
            <div class="title">扫地机器人1C智能家用全自动扫拖一体机拖地吸尘器三合一</div>
            <div class="rate">
              <el-rate show-score v-model="value1" disabled text-color="#FF5040"></el-rate>
              <div class="icons">
                <svg-icon class="icon" icon-class="heart" />
                <i class="el-icon-share icon"></i>
                <i class="el-icon-star-off icon"></i>
              </div>
            </div>
            <div class="item">
              <span class="name">价格</span>
              <span class="price">¥<span class="num">2999</span></span>
            </div>
            <div class="item">
              <span class="name">定制</span>
              <span class="value">
                支持定制
                <i class="el-icon-circle-check"></i>
              </span>
            </div>
            <div class="item">
              <span class="name">商家</span>
              <span class="value">
                杭州域加网络科技有限公司
                <svg-icon class="renzhen" icon-class="renzhen" />
              </span>
            </div>
            <div class="try">申请试用</div>
            <div class="buy">立即购买</div>
          </div>
        </div>
      </div>
    </div>

    <div class="product-detail">
      <div class="pd-left">
        <div class="pd-desc">
          <div class="pd-title">
            商品详情
          </div>
          <div class="pd-content">
            工作原理编辑
            云存储是在云计算(cloud computing)概念上延伸和衍生发展出来的一个新的概念。云计算是分布式处理(Distributed Computing)、并行处理(Parallel Computing)和网格计算(Grid Computing)的发展，是透过网络将庞大的计算处理程序自动分拆成无数个较小的子程序，再交由多部服务器所组成的庞大系统经计算分析之后将处理结果回传给用户。通过云计算技术，网络服务提供者可以在数秒之内，处理数以千万计甚至亿计的信息，达到和”超级计算机”同样强大的网络服务。
            云存储的概念与云计算类似，它是指通过集群应用、网格技术或分布式文件系统等功能，网络中大量各种不同类型的存储设备通过应用软件集合起来协同工作，共同对外提供数据存储和业务访问功能的一个系统，保证数据的安全性，并节约存储空间。简单来说，云存储就是将储存资源放到云上供人存取的一种新兴方案。使用者可以在任何时间、任何地方，透过任何可连网的装置连接到云上方便地存取数据。如果这样解释还是难以理解，那我们可以借用广域网和互联网的结构来解释云存储。
            网络结构编辑
            相信大家对局域网、广域网和互联网都已经非常了解了。在常见的局域网系统中，我们为了能更好地使用局域网，一般来讲，使用者需要非常清楚地知道网络中每一个软硬件的型号和配置，比如采用什么型号交换机，有多少个端口，采用了什么路由器和防火墙，分别是如何设置的。
            系统中有多少个服务器，分别安装了什么操作系统和软件。各设备之间采用什么类型的连接线缆，分配了什么IP地址和子网掩码。
            各类云存储图册
            各类云存储图册(2张)
            但当我们使用广域网和互联网时，我们只需要知道是什么样的接入网和用户名、密码就可以连接到广域网和互联网，并不需要知道广域网和互联网中到底有多少台交换机、路由器、防火墙和服务器，不需要知道数据是通过什么样的路由到达我们的电脑，也不需要知道网络中的服务器分别安装了什么软件，更不需要知道网络中各设备之间采用了什么样的连接线缆和端口。　广域网和互联网对于具体的使用者是完全透明的，我们经常用一个云状的图形来表示广域网和互联网，如下图：
          </div>
        </div>

        <div class="pd-desc">
          <div class="pd-title">
            商品评价
            <div class="sort">
              推荐排序
              <i class="el-icon-arrow-down"></i>
            </div>
          </div>
          <div class="comment-top">
            <div class="good-comment">
              <span>好评率</span>
              <span class="gc-name-rate">99.8%</span>
            </div>
            <div class="gd-tags">
              <span v-for="(tag, index) in tagList" :key="index" class="tag" :class="{'active': activeTag === index}" @click="activeTag = index">{{ tag }}</span>
            </div>
          </div>
          <div class="comment-type">
            <span v-for="(type, index) in otherList" :key="index" class="type" :class="{'active': activeType === index}" @click="activeType = index">{{ type }}</span>
            <span style="float: right">
              <el-checkbox v-model="checked">只看当前商品评价</el-checkbox>
            </span>
          </div>
          <!-- 评论模块 -->
          <div class="pd-content">
            <div class="user">
              <img class="avatar" src="../../assets/pics/sample2.jpg" />
              <span class="name">于***方</span>
            </div>
            <div class="user-comment">
              <div class="rate">
                <el-rate v-model="value1" disabled></el-rate>
              </div>
              <div class="comment">
                吸力大小：美的这款扫地机器人吸力有4000Pa ，而且噪音还小，价格还便宜，性价比相当高，对比科沃斯
                的1500Pa吸力确实很强大，科沃斯不仅吸力小价格还昂贵，清洁起来不是很到位
                智能程度：机器人精灵度高，识别能力三大，爬坡很给力，遇到地毯自动增加吸力，打扰得很干净，推荐
                大家购买
                灵敏程度：智能智慧一体，推荐推荐购买
                越障能力：对比科沃斯的越障碍能力确实要强大很多，之前买的科沃斯遇到地毯就躲避了，有时候还会卡
                住，美的的这款就不会，轻松越过，赶紧彻底
                续航时间：超大续航时间，比科沃斯要持久给力
                噪音大小：对比家里的科沃斯突然还是觉得美的的这款真的的噪音很小，很安静，推荐给大家购买
              </div>
              <div class="c-pics">
                <img src="../../assets/pics/sample2.jpg" />
                <img src="../../assets/pics/sample2.jpg" />
              </div>
              <div class="c-foot">
                <span>M7极地白 激光导航旗舰         2020-07-30 23:34</span>
                <span class="c-operate">
                  <span class="co jb">举报</span>
                  <span class="co">
                    <img src="../../assets/icons/dianzan.png" />0
                  </span>
                  <span class="co">
                    <img src="../../assets/icons/comment.png" />0
                  </span>
                </span>
              </div>
            </div>
            <!-- 店家回复 -->
            <div class="reply">
              <div>店家回复：</div>
              <div>感谢您的支持，我们这匹“千里马”能遇见您这位伯乐真的无比幸福哦。产品不定期提供系统优化升级，
会越来越智能的，并配有专业的售后跟踪，让您用得更放心。</div>
              <div class="reply-time">2020-07-31 09:27</div>
            </div>
          </div>
          <!-- 评论模块 -->
          <div class="pd-content">
            <div class="user">
              <img class="avatar" src="../../assets/pics/sample2.jpg" />
              <span class="name">于***方</span>
            </div>
            <div class="user-comment">
              <div class="rate">
                <el-rate v-model="value1" disabled></el-rate>
              </div>
              <div class="comment">
                吸力大小：美的这款扫地机器人吸力有4000Pa ，而且噪音还小，价格还便宜，性价比相当高，对比科沃斯
                的1500Pa吸力确实很强大，科沃斯不仅吸力小价格还昂贵，清洁起来不是很到位
                智能程度：机器人精灵度高，识别能力三大，爬坡很给力，遇到地毯自动增加吸力，打扰得很干净，推荐
                大家购买
                灵敏程度：智能智慧一体，推荐推荐购买
                越障能力：对比科沃斯的越障碍能力确实要强大很多，之前买的科沃斯遇到地毯就躲避了，有时候还会卡
                住，美的的这款就不会，轻松越过，赶紧彻底
                续航时间：超大续航时间，比科沃斯要持久给力
                噪音大小：对比家里的科沃斯突然还是觉得美的的这款真的的噪音很小，很安静，推荐给大家购买
              </div>
              <div class="c-pics">
                <img src="../../assets/pics/sample2.jpg" />
                <img src="../../assets/pics/sample2.jpg" />
              </div>
              <div class="c-foot">
                <span>M7极地白 激光导航旗舰         2020-07-30 23:34</span>
                <span class="c-operate">
                  <span class="co jb">举报</span>
                  <span class="co">
                    <img src="../../assets/icons/dianzan.png" />0
                  </span>
                  <span class="co">
                    <img src="../../assets/icons/comment.png" />0
                  </span>
                </span>
              </div>
            </div>
            <!-- 店家回复 -->
            <div class="reply">
              <div>店家回复：</div>
              <div>感谢您的支持，我们这匹“千里马”能遇见您这位伯乐真的无比幸福哦。产品不定期提供系统优化升级，
会越来越智能的，并配有专业的售后跟踪，让您用得更放心。</div>
              <div class="reply-time">2020-07-31 09:27</div>
            </div>
          </div>
          <!-- 分页 -->
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="1000">
            </el-pagination>
          </div>
        </div>
      </div>
      <div class="pd-right">
        <div class="video-title">相关视频</div>
        <!-- 视频列表 -->
        <div v-for="num in [1,2,3,4,5,6,7,8]" :key="num" class="video-wrap">
          <img src="../../assets/pics/sample2.jpg" />
          <span class="bottom">
            <span class="time">00:00:10</span>
          </span>
        </div>
      </div>
    </div>
    <Footer />
    <Nav />
  </div>
</template>

<script>
import Header from '@/components/Header'
import NavSticky from '@/components/NavSticky'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'

import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.min.css'
export default {
  components: {
    Header,
    Footer,
    Nav,
    NavSticky,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      value1: 4.0,
      activeTag: -1,
      activeType: -1,
      checked: false,
      swiperOptions: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: true,
        loop: true
      },
      tagList: ['吸力强劲(42)', '清洁能力强(24)', '全自动智能(13)', '多档可调(6)'],
      otherList: ['全部评价(500+)', '晒图(500)', '视频晒单(60+)', '追评(20+)', '好评(200+)', '中评(2)', '差评(4)']
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  methods: {
  }
}
</script>
<style>
.el-rate__icon {
  font-size: 24px;
}
.el-rate__text {
  font-size: 24px;
}
.el-checkbox__input.is-checked+.el-checkbox__label {
  color: #C34840;
}
.el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #C34840;
  border-color: #C34840;
}
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background: none;
  color: #C34840;
}
.el-pagination.is-background .el-pager li:not(.disabled):hover {
  color: #C34840
}
</style>

<style lang="scss" scoped>
.product-main {
  background: #f2f2f2;
}
.main-content {
  margin-top: 140px;
  width: 100%;
  background: #ffffff;
  .center {
    display: flex;
    justify-content: space-between;
    align-items: top;
    width: 100%;
    height: 540px;
    margin-top: 22px;
    .swiper {
      width: 800px;
      height: 450px;
    }
    .info {
      width: 350px;
      height: 450px;
      padding-left: 25px;
      padding-right: 25px;
      .title {
        font-size: 18px;
        font-weight: bold;
        color: #000000;
        text-align: left;
      }
      .rate {
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 49px;
      }
      .icons {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 87px;
        color: #7E7E7E;
        .icon {
          cursor: pointer;
        }
      }
      .item {
        display: flex;
        justify-content: flex-start;
        margin-bottom: 30px;
        .name {
          font-size: 14px;
          color: #666666;
          margin-right: 22px;
        }
        .value {
          font-size: 14px;
          color: #333333;
        }
        .renzhen {
          font-size: 20px;
        }
      }
      .price {
        color: #FF5040;
        font-size: 14px;
        .num {
          font-size: 18px;
        }
      }
    }
    .el-icon-circle-check {
      color: #8cd65a;
      margin-left: 5px;
    }
    .try, .buy {
      width: 100%;
      height: 50px;
      line-height: 50px;
      text-align: center;
      cursor: pointer;
      border-radius: 4px;
    }
    .try {
      border: 2px solid #c34840;
      font-size: 20px;
      color: #C34840;
      margin-top: 50px;
    }
    .buy {
      background: #C34840;
      color: #ffffff;
      margin-top: 20px;
    }
  }
}
.product-detail {
  display: flex;
  margin-top: 20px;
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  align-items: top;
  .pd-left {
    width: 850px;
  }
  .pd-right {
    width: 310px;
    .video-title {
      font-size: 20px;
      color: #333333;
      font-weight: bold;
    }
    .video-wrap {
      position: relative;
      width: 100%;
      height: 174px;
      margin-top: 20px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .bottom {
        position: absolute;
        width: 100%;
        height: 59px;
        bottom: 0;
        left: 0;
        background: linear-gradient(to bottom, transparent, rgba(0,0,0,.4));
        .time {
          position: absolute;
          right: 10px;
          bottom: 10px;
          font-size: 12px;
          color: #ffffff;
        }
      }
    }
  }
  .pd-desc {
    background: #ffffff;
    width: 100%;
    margin-bottom: 50px;
  }
  .pd-title {
    position: relative;
    font-size: 20px;
    color: #333333;
    font-weight: bold;
    border-bottom: 1px solid #eeeeee;
    padding: 16px 30px;
    &:after {
      position: absolute;
      content: '';
      left: 45px;
      bottom: 0;
      width: 50px;
      height: 2px;
      background: #C34840;
    }
    .sort {
      float: right;
      color: #333333;
      font-size: 14px;
      margin-top: 5px;
    }
  }
  .pd-content {
    position: relative;
    padding: 30px;
    font-size: 14px;
    color: #333333;
    &:after {
      content: '';
      position: absolute;
      width: 790px;
      height: 1px;
      background: #EEEEEE;
      left: 50%;
      bottom: 30px;
      transform: translateX(-50%);
    }
    .user {
      display: inline-block;
      width: 140px;
      vertical-align: top;
      .avatar {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        vertical-align: middle;
      }
      .name {
        font-size: 12px;
        color: #666666;
        margin-left: 9px;
      }
    }
    .user-comment {
      display: inline-block;
      width: 650px;
      padding-bottom: 20px;
      border-bottom: 1px solid #eeeeee;
      .comment {
        font-size: 14px;
        color: #333333;
        margin-top: 22px;
      }
      .c-pics {
        margin-top: 17px;
        img {
          width: 50px;
          height: 50px;
          object-fit: cover;
          &:not(:last-child) {
            margin-right: 20px;
          }
        }
      }
      .c-foot {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color: #999999;
        margin-top: 20px;
        .c-operate {
          .co {
            cursor: pointer;
          }
          .co:not(:last-child) {
            margin-right: 20px;
          }
          .co.jb {
            margin-right: 30px;
          }
          img {
            width: 16px;
            margin-right: 5px;
          }
        }
      }
    }
    .reply {
      color: #3c8ced;
      font-size: 14px;
      line-height: 24px;
      padding-top: 18px;
      padding-left: 140px;
      padding-bottom: 20px;
      .reply-time {
        font-size: 12px;
        color: #999999;
        margin-right: 20px;
      }
    }
  }
  .comment-top {
    font-size: 14px;
    color: #666666;
    padding: 22px 30px;
    border-bottom: 1px solid #eeeeee;
    .good-comment {
      display: inline-block;
      vertical-align: middle;
      width: 80px;
      height: 100%;
      .gc-name-rate {
        font-size: 30px;
        color: #c34840;
        font-weight: 500;
      }
    }
    .gd-tags {
      display: inline-block;
      vertical-align: middle;
      margin-left: 56px;
      .tag {
        display: inline-block;
        border: 1px solid #CCCCCC;
        border-radius: 2px;
        color: #666666;
        padding: 6px 10px;
        cursor: pointer;
        margin-right: 20px;
        &.active {
          border: 1px solid #666666;
          color: #666666;
        }
      }
    }
  }
  .comment-type {
    padding: 12px 30px;
    font-size: 14px;
    color: #333333;
    border-bottom: 1px solid #eeeeee;
    .type {
      cursor: pointer;
      &.active {
        color: #c34840;
      }
    }
    .type:not(:last-child) {
      margin-right: 25px;
    }
  }
  .pagination {
    text-align: right;
    padding-bottom: 38px;
  }
  
}
.swiper-button-prev, .swiper-button-next {
  --swiper-theme-color: #ffffff;
}
</style>