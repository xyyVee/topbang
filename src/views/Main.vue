<template>
  <div class="main-page">
    <!-- <div class="top">
      <div class="header">
        <span class="title">欢 迎 来 到 TOP 帮</span>
        <div class="right">
          <span>首页</span>
          <span>请登录</span>
          <span>免费注册</span>
        </div>
      </div>
    </div> -->
    <div class="search-group">
      <div class="search">
        <input class="input" :placeholder="words[0]"/>
        <div class="btn">搜索</div>
      </div>
      <div class="hot-words">
        热门搜索 ：<span v-for="(word, index) in words" :key="index" class="word">{{ word }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        words: ['covid-19对全球的经济影响', '美国大学', '非洲暴动'],
      }
    }
  }
</script>

<style lang="scss" scoped>
.main-page {
  width: 100%;
  // height: 54px;
  height: 780px;
  background: #ffffff;
  .top {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 2;
    background: #ffffff;
    box-shadow: 2px 2px 3px #e8e8e8;
  }
  .header {
    z-index: 2;
    width: 1132px;
    height: 54px;
    margin: 0 auto;
    .title {
      height: 54px;
      line-height: 54px;
      font-size: 17px;
      color: #666666;
      letter-spacing: 3px;
    }
    .right {
      float: right;
      display: flex;
      align-items: center;
      span {
        line-height: 54px;
        height: 54px;
        color: #666666;
        margin-left: 30px;
        &:hover {
          color: #C8000B;
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
  }
  .search-group {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: url(../assets/pics/home1.png) no-repeat;
    background-position-x: center;
    background-position-y: top;
    background-size: 1920px;
  }
  .search {
    position: absolute;
    width: 710px;
    top: 535px;
    left: 50%;
    transform: translateX(-50%);
    .input {
      width: 600px;
      height: 51px;
      border: 1px solid #d9d9d9;
      padding-left: 20px;
      border-radius: 5px;
      font-size: 18px;
      &::-webkit-input-placeholder {
        /* placeholder颜色 */
        color: #e8e8e8;
        /* placeholder字体大小 */
        font-size: 18px;
      }
    }
    .btn {
      display: inline-block;
      width: 100px;
      height: 51px;
      line-height: 51px;
      color: #ffffff;
      text-align: center;
      background: #C8000B;
      cursor: pointer;
      border-radius: 10px;
      margin-left: 10px;
    }
  }
  .hot-words {
    position: absolute;
    top: 601px;
    left: 50%;
    color: #666666;
    font-size: 20px;
    transform: translateX(-50%);
    z-index: 2;
    width: 800px;
    text-align: center;
    .word {
      // color: rgba(255,255,255,.8);
      margin-right: 20px;
      // font-size: 18px;
    }
  }
}
</style>