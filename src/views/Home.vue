<template>
  <div class="home">
    <Header />
    <div class="banner">
      <div class="menu">
        <div class="list">
          <div class="industry">
            行业
          </div>
          <div v-for="(m, index) in menu" :key="index" class="other">{{ m }}</div>
        </div>

        <div class="center">
          <swiper class="swiper" ref="mySwiper" :options="swiperOptions">
            <swiper-slide class="slide"><img src="../assets/pics/scroll-banner.png"></swiper-slide>
            <swiper-slide class="slide"><img src="../assets/pics/scroll-banner.png"></swiper-slide>
            <swiper-slide class="slide"><img src="../assets/pics/scroll-banner.png"></swiper-slide>
            <div slot="pagination" class="swiper-pagination" />
          </swiper>
        </div>

        <div class="recommend">
          <div class="title">为你精选</div>
          <div class="scroll">
            <p v-for="(item, index) in news" :key="index">
              {{ item }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="intro">
      <div class="head-title">
          <img class="icon" src="../assets/pics/pic8.png" />
          <div class="name">人工智能 (AI)产品</div>
          <div class="more">
            更多
            <svg-icon class="nav-right" icon-class="arrow-right" />
          </div>
      </div>
      <div class="list-content">
        <div class="left">
          <img class="img1" src="../assets/pics/sample1.jpg" />
          <img class="img2" src="../assets/pics/sample1.jpg" />
        </div>
        <div class="right">
          <VideoItem v-for="item in contentData" :key="item.id" class="right-item" :content="item" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import VideoItem from './components/VideoItem'
// If you use Swiper 6.0.0 or higher
import 'swiper/css/swiper.min.css'
export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    Swiper,
    SwiperSlide,
    VideoItem
  },
  data() {
    return {
      words: ['covid-19对全球的经济影响', '美国大学', '非洲暴动'],
      menu: ['人工智能', '物联网', '基因工程', '区块链', '大数据', '云计算', '帮助'],
      news: [
        'AI机器人-智能养老服务好帮手',
        '智能家居AI本地推理模块开发（一）',
        '智能和目安防传感器S1，提升质量',
        '5G、物联网、云计算行业竞争格局',
        'AI机器人-智能养老服务好帮手 拷贝 4',
        '智能家居AI本地推理模块开发（一）',
        '智能和目安防传感器S1，提升质量',
        '5G、物联网、云计算行业竞争格局',
        'AI机器人-智能养老服务好帮手 拷贝 4',
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
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: true,
        loop: true
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted() {
    // console.log('Current Swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
    this.swiper.init()
  }
}
</script>
<style lang="scss">
.swiper-pagination-bullet {
  background: #fff;
  opacity: 1;
}
.swiper-pagination-bullet-active {
  width: 40px;
  height: 8px;
  border-radius: 3px;
}
.home {
  position: relative;
  background: #F2F2F2;
  .banner {
    width: 100vw;
    height: 1139px;
    overflow: hidden;
    background: url(./../assets/pics/banner2.jpg) no-repeat;
    background-position-x: center;
    background-position-y: top;
    background-size: 1920px;
    // width: 100%;
    // img {
    //   width: 100%;
    // }
    // .slogan {
    //   position: absolute;
    //   width: 260px;
    //   left: 50%;
    //   top: 166px;
    //   z-index: 2;
    //   transform: translateX(-50%);
    // }
  }
  .search {
    position: absolute;
    left: 50%;
    top: 386px;
    transform: translateX(-50%);
    .search-input {
      input {
        width: 720px;
        height: 60px;
        background: #ffffff;
        border-radius: 6px;
        color: rgba(0,0,0,.85);
        font-size: 18px;
        padding-left: 30px;
        padding-right: 60px;
        &::-webkit-input-placeholder {
          /* placeholder颜色 */
          color: #999999;
          /* placeholder字体大小 */
          font-size: 18px;
        }
      }
      .button {
        position: absolute;
        top: 12px;
        right: 20px;
        width: 90px;
        height: 36px;
        background: #c34840;
        border-radius: 4px;
        font-size: 24px;
        color: #ffffff;
        text-align: center;
        line-height: 36px;
        cursor: pointer;
      }
    }
    .hot-words {
      color: #ffffff;
      font-size: 18px;
      margin-top: 30px;
      text-align: center;
      .word {
        color: rgba(255,255,255,.8);
        margin-right: 20px;
        font-size: 18px;
      }
    }
  }
  .menu {
    display: flex;
    justify-content: flex-start;
    width: 1200px;
    height: 348px;
    background: #ffffff;
    margin: 0 auto;
    margin-top: 137px;
    .list {
      width: 161px;
      height: 348px;
      font-size: 18px;
      color: #9F9F9F;
      background: #F7F7F7;
      margin-left: 13px;
      .industry {
        width: 120px;
        height: 35px;
        line-height: 35px;
        padding-left: 35px;
        background: url(../assets/pics/pic9.png) no-repeat;
        background-size: 120px;
        font-size: 20px;
        color: #ffffff;
        cursor: pointer;
        margin: 0 auto;
        margin-bottom: 15px;
      }
      .other {
        height: 40px;
        line-height: 40px;
        text-align: center;
        background: #F7F7F7;
        border-bottom: 1px solid #E0E0E0;
        cursor: pointer;
        &:hover {
          background: #EDEDED;
        }
        &:last-child {
          line-height: 50px;
          border-bottom: none;
        }
      }
    }
  }
  .center {
    width: 700px;
    height: 335px;
    margin-top: 13px;
    margin-left: 21px;
    .swiper {
      display: inline-block;
      width: 100%;
      height: 335px;
    }
    .slide {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
.recommend {
  position: relative;
  width: 305px;
  height: 100%;
  .title {
    width: 100%;
    height: 80px;
    line-height: 80px;
    text-align: center;
    font-size: 20px;
    letter-spacing: 3px;
    color: #cc141d;
    &:before {
      position: absolute;
      top: 0;
      content: '';
      width: 96px;
      height: 2px;
      background: #cc141d;
    }
  }
  .scroll {
    width: 260px;
    height: 250px;
    overflow-y: auto;
    font-size: 14px;
    color: #333333;
    margin-left: auto;
    margin-right: auto;
    p {
      margin-top: 24px;
      margin-bottom: 24px;
      line-height: 1;
      cursor: pointer;
      &:before {
        display: inline-block;
        content: '';
        width: 2px;
        height: 2px;
        border-radius: 50%;
        background: #474747;
        vertical-align: middle;
        margin-right: 5px;
      }
      &:last-child {
        margin-bottom: 0;
      }
      &:first-child {
        margin-top: 0;
      }
      &:hover {
        color: #2693FF;
        text-decoration: underline;
      }
    }
    &::-webkit-scrollbar-track
    {
      background-color: #ffffff;
    }

    &::-webkit-scrollbar
    {
      width: 2px;
      background-color: #cccccc;;
    }

    &::-webkit-scrollbar-thumb
    {
      background-color: #cccccc;;
    }
  }
}
.intro {
  width: 1200px;
  margin: 50px auto;
}
.head-title {
  .icon {
    width: 50px;
    height: 50px;
    margin-right: 21px;
    vertical-align: middle;
  }
  .more {
    float: right;
    width: 66px;
    height: 22px;
    color: #999999;
    font-size: 14px;
    font-weight: bold;
    line-height: 22px;
    border: 1px solid #cccccc;
    border-radius: 2px;
    padding-left: 12px;
    margin-top: 14px;
    cursor: pointer;
  }
  .name {
    display: inline-block;
    font-size: 30px;
    color: #333333;
    font-weight: bold;
    vertical-align: middle;
  }
}
.list-content {
  display: flex;
  margin-top: 20px;
  padding: 20px;
  background: #ffffff;
  justify-content: space-between;
  .left {
    display: flex;
    width: 470px;
    justify-content: space-between;
    .img1 {
      width: 260px;
      height: 256px;
    }
    .img2 {
      width: 190px;
      height: 256px;
    }
  }
  .right {
    width: 670px;
  }
  .right-item {
    margin-right: 20px;
    margin-bottom: 20px;
    &:nth-child(3n) {
      margin-right: 0;
    }
  }
}
</style>
