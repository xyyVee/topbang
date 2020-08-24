<template>
  <div class="video-item">
    <div class="top" :style="{height: height + 'px', width: width + 'px'}">
      <img src="../../assets/pics/sample2.jpg" />
      <span class="title">{{content.title}}</span>
      <div class="cover">
        <div class="inner">
          <span class="item">
            <img class="play" src="../../assets/icons/play.png" />
            4290
          </span>
          <span class="item">
            <img class="like" src="../../assets/icons/like.png" />
            134
          </span>
          <span class="time">00:00:00</span>
        </div>
      </div>
    </div>
    <div v-if="showBottom" class="bottom" :style="{width: width + 'px'}">
      <div class="name">产品名称（机器人）</div>
      <div class="operate">
        <a class="edit">编辑</a>
        <a>查看详情</a>
        <img class="del" src="../../assets/icons/delete.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { 
    showBottom: {
      type: Boolean,
      default: false
    },
    content: {
      type: Object,
      default: {}
    },
    width: {
      type: Number,
      default: 210
    },
    height: {
      type: Number,
      default: 118
    }
  }
}
</script>

<style lang="scss" scoped>
.video-item {
  position: relative;
  display: inline-block;
  .top {
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .title {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 70px;
    height: 20px;
    border-radius: 15px;
    background: rgba(0,0,0,.65);
    font-size: 14px;
    color: #ffffff;
    text-align: center;
    line-height: 20px;
  }
  .cover {
    position: absolute;
    width: 100%;
    height: 59px;
    background: linear-gradient(to bottom , transparent, rgba(0,0,0,.4));
    bottom: 0;
    .inner {
      position: absolute;
      bottom: 9px;
      width: 100%;
    }
    .item {
      font-size: 12px;
      color: #ffffff;
      margin-left: 10px;
    }
    .time {
      position: absolute;
      right: 10px;
      bottom: 0;
      font-size: 12px;
      color: #ffffff;
    }
    .play {
      width: 9px;
      height: 12px;
      vertical-align: middle;
    }
    .like {
      width: 14px;
      height: 13px;
      vertical-align: middle;
    }
  }
  .bottom {
    padding: 16px 11px 16px 14px;
    border: 1px solid #EEEEEE;
    .name {
      color: #000000;
      font-size: 16px;
    }
    .operate {
      color: #388CED;
      font-size: 14px;
      margin-top: 16px;
      a {
        position: relative;
        margin-right: 30px;
        cursor: pointer;
      }
      .edit::after {
        cursor: default;
        position: absolute;
        bottom: 2px;
        right: -18px;
        content: '';
        width: 1px;
        height: 10px;
        background: #EEEEEE;
      }
      .del {
        float: right;
        width: 12px;
        height: 12px;
        cursor: pointer;
        margin-top: 4px;
      }
    }
  }
}
</style>