<template>
  <div class="home">
    <div class="banner">
      <img src="../assets/pics/home-banner1.png">
      <img class="slogan" src="../assets/pics/slogan.png">
      <div class="search">
        <div class="search-input">
          <input :placeholder="words[0]">
          <div class="button">搜索</div>
        </div>
        <div class="hot-words">
          热门搜索 ：<span v-for="(word, index) in words" :key="index" class="word">{{ word }}</span>
        </div>
      </div>
    </div>
    <div class="menu">
      <div class="list">
        <div class="industry">
          <svg-icon class="nav-icon" icon-class="list" />
          <span>行业</span>
          <svg-icon class="nav-down" icon-class="arrow-down" />
        </div>
        <div v-for="(m, index) in menu" :key="index" class="other">{{ m }}</div>
      </div>
    </div>
    <div class="main">
      <swiper class="swiper" ref="mySwiper" :options="swiperOptions">
        <swiper-slide class="slide"><img src="../assets/pics/scroll-banner.png"></swiper-slide>
        <swiper-slide class="slide"><img src="../assets/pics/scroll-banner.png"></swiper-slide>
        <swiper-slide class="slide"><img src="../assets/pics/scroll-banner.png"></swiper-slide>
        <div slot="pagination" class="swiper-pagination" />
      </swiper>
      <div class="recommend">
        <div class="title">为你精选</div>
        <div class="scroll">
          <p v-for="(item, index) in news" :key="index">
            <img class="video" src="../assets/icons/icon_video.png" />
            {{ item }}
          </p>
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
  </div>
</template>

<script>
// @ is an alias to /src
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import VideoItem from './components/VideoItem'
// If you use Swiper 6.0.0 or higher
import 'swiper/swiper-bundle.css'
export default {
  name: 'Home',
  components: {
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
        }
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted() {
    console.log('Current Swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  }
}
</script>
<style lang="scss">
.home {
  position: relative;
  background: #F2F2F2;
  .banner {
    width: 100%;
    img {
      width: 100%;
    }
    .slogan {
      position: absolute;
      width: 260px;
      left: 50%;
      top: 166px;
      z-index: 2;
      transform: translateX(-50%);
    }
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
    width: 100%;
    height: 60px;
    background: #ffffff;
    .list {
      width: 1200px;
      height: 100%;
      margin: 0 auto;
      font-size: 18px;
      color: #333333;
      .industry {
        display: inline-block;
        position: relative;
        width: 138px;
        height: 100%;
        line-height: 60px;
        padding-left: 20px;
        cursor: pointer;
        &:hover {
          color: #c34840;
        }
        &:after {
          position: absolute;
          content: '';
          width: 1px;
          height: 20px;
          background: #cccccc;
          top: 20px;
          right: 0;
        }
      }
      .other {
        display: inline-block;
        height: 100%;
        line-height: 60px;
        margin-left: 50px;
        cursor: pointer;
        &:hover {
          color: #C34840;
        }
      }
      .nav-icon {
        width: 24px;
        height: 15px;
        margin-right: 9px;
      }
      .nav-down {
        width: 10px;
        margin-left: 10px;
      }
    }
  }
  .main {
    display: flex;
    width: 1200px;
    margin: 0 auto;
    margin-top: 21px;
    font-size: 0;
    justify-content: space-between;
    .swiper {
      display: inline-block;
      width: 830px;
      height: 466px;
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
    .recommend {
      display: inline-block;
      width: 370px;
      height: 466px;
      background: #ffffff;
      .title {
        width: 330px;
        height: 50px;
        line-height: 50px;
        margin-top: 20px;
        margin-left: auto;
        margin-right: auto;
        color: #ffffff;
        font-weight: 500;
        font-size: 24px;
        text-align: center;
        background: url(../assets/pics/pic1.png) #e0665e no-repeat;
        background-position: 50% 50%;
      }
      .scroll {
        width: 326px;
        height: 360px;
        overflow-y: auto;
        font-size: 16px;
        color: #333333;
        margin-top: 22px;
        margin-left: auto;
        margin-right: auto;
        p {
          margin-top: 24px;
          margin-bottom: 24px;
          line-height: 1;
          &:last-child {
            margin-bottom: 0;
          }
          &:first-child {
            margin-top: 0;
          }
        }
        .video {
          width: 14px;
          height: 14px;
          vertical-align: middle;
          margin-right: 10px;
        }
        &::-webkit-scrollbar-track
        {
          background-color: #ffffff;
        }

        &::-webkit-scrollbar
        {
          width: 4px;
          background-color: #cccccc;;
        }

        &::-webkit-scrollbar-thumb
        {
          background-color: #cccccc;;
        }
      }
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
