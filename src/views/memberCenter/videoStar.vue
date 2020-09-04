<template>
  <div class="main">
    <el-card class="bg-2">
      <div class="title">
        <svg-icon icon-class="arrow-down" />我的收藏
      </div>
      <div class="header">
        <el-button size="mini" @click="handleDel">批量管理</el-button>
        <el-input v-model="input" placeholder="产品搜索" class="input">
          <el-button slot="append" icon="el-icon-search" />
        </el-input>
      </div>
      <div class="videos">
        <div
          v-for="(item,index) in contentData"
          :key="index"
          class="video-card"
          :body-style="{ padding: '0px' }"
        >
          <i v-if="isDel" class="el-icon-delete-solid" @click="handleClick(index)" />
          <VideoItem :content="item" :show-bottom="true" :bottom-style="2" />
        </div>
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
      input: '',
      isDel: false,
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
        }, {
          id: 7,
          title: '智慧社区'
        }, {
          id: 8,
          title: '智慧社区'
        }, {
          id: 9,
          title: '智慧社区'
        }
      ]
    }
  },
  methods: {
    handleDel() {
      this.isDel = !this.isDel
    },
    handleClick(i) {
      this.contentData.splice(i, 1)
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
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    .input {
      width: 300px;
    }
  }
  .videos {
    display: flex;
    flex-wrap: wrap;

    .video-card {
      margin: 0 20px 20px 0;
      position: relative;
      .el-icon-delete-solid {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 10;
        color: crimson;
      }
    }
  }
}
</style>
