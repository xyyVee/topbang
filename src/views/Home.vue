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
          <!-- <img class="nav-icon" src="../assets/icons/nav-list.png" /> -->
          <svg-icon class="nav-icon" icon-class="list" />
          <span>行业</span>
          <!-- <img class="nav-down" src="../assets/icons/nav-down.png"> -->
          <svg-icon class="nav-down" icon-class="arrow-down" />
        </div>
        <div v-for="(m, index) in menu" :key="index" class="other">{{ m }}</div>
      </div>
    </div>
    <div>555555</div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      words: ['covid-19对全球的经济影响', '美国大学', '非洲暴动'],
      menu: ['人工智能', '物联网', '基因工程', '区块链', '大数据', '云计算', '帮助']
    }
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
      width: 1100px;
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
}
</style>
