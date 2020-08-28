<template>
  <div class="main">
    <el-card>
      <div class="title">
        <svg-icon icon-class="arrow-down" />营销推广
      </div>
      <div class="labels">

        <el-tabs>
          <el-tab-pane label="首页banner" />
          <el-tab-pane>
            <span slot="label">
              超级推荐<sup class="badge">敬请期待</sup>
            </span>
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label">
              直通车<sup class="badge">敬请期待</sup>
            </span>
          </el-tab-pane>
        </el-tabs>
        <div class="grey">
          <router-link to="/memberCenter/marketVideos">
            已购推广<i class="el-icon-arrow-right" />
          </router-link>
        </div>

      </div>
      <el-form class="form" :model="form" label-width="80px">
        <el-form-item label="上传图片">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon" />
          </el-upload>
          <span class="grey">格式jpeg、png、文件大小小于5MB,建议尺寸</span>
        </el-form-item>
        <el-form-item label="选择周期">
          <el-select v-model="form.region" placeholder="请选择周期">
            <el-option label="天" value="1" />
            <el-option label="月" value="2" />
          </el-select>
        </el-form-item>
        <el-form-item label="选择时长">
          <el-input-number v-model="num" :min="1" />
        </el-form-item>
        <el-form-item label="总计金额">
          <div>￥<span class="red">1234.56</span>（当前账户余额：￥<span class="green">3.33</span>）</div>
          <div class="grey"><i class="el-icon-bell yellow" />推广三个月立享<span class="yellow">3折</span>优惠
            省<span class="yellow">￥33.33</span></div>
        </el-form-item>

        <el-form-item>
          <el-button type="danger">确认购买</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1,
      imageUrl: '',
      form: {}
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.main {
  width: 970px;
  .title {
    font-weight: 600;
  }
  .green {
    color: #67c23a;
  }
  .blue {
    color: #409eff;
  }
  .grey {
    color: #888;
  }
  .red {
    color: crimson;
    font-size: 24px;
  }
  .yellow {
    color: rgb(250, 154, 65);
  }
  .form {
    margin-top: 20px;
  }
  .labels {
    background: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    margin: 20px 0;
    .badge {
      background: #b3b2b2;
      color: #555;
      padding: 1px 4px;
      border-radius: 3px;
    }
  }
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
</style>
