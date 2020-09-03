<template>
  <div class="main">
    <el-card class="bg-2">
      <div class="title">
        <svg-icon icon-class="arrow-down" />发布商品
      </div>
      <el-form ref="form" class="form" :model="form" label-width="80px" label-position="top">
        <el-form-item label="">
          <div class="label">文件上传<span class="grey">（推荐采用mp4、flv格式可有效缩短审核转码耗时）</span></div>
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :on-change="handleChange"
            :file-list="fileList"
            list-type="picture"
            :limit="10"
          >
            <el-button slot="trigger" type="danger">{{ fileList.length>0?'继续上传':'点击上传' }}</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item label="基本信息">

          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon" />
          </el-upload>
        </el-form-item>

        <el-form-item label="所属行业">
          <el-select v-model="input1" placeholder="点击选择">
            <el-option label="行业一" value="1" />
            <el-option label="行业二" value="2" />
          </el-select>
        </el-form-item>
        <el-form-item label="可应用行业（可选三个）">
          <el-select v-model="input2" placeholder="点击选择" class="el-select">
            <el-option label="行业一" value="1" />
            <el-option label="行业二" value="2" />
          </el-select>
          <el-select v-model="input3" placeholder="点击选择" class="el-select">
            <el-option label="行业一" value="1" />
            <el-option label="行业二" value="2" />
          </el-select>
          <el-select v-model="input4" placeholder="点击选择" class="el-select">
            <el-option label="行业一" value="1" />
            <el-option label="行业二" value="2" />
          </el-select>
        </el-form-item>

        <el-form-item label="商品名称">
          <el-input type="text" maxlength="30" placeholder="输入商品名称" show-word-limit />
        </el-form-item>

        <el-form-item label="标签">
          <el-input
            v-if="inputVisible"
            ref="saveTagInput"
            v-model="inputValue"
            class="input-new-tag"
            size="small"
            placeholder="每个标签之间用；隔开"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"
          />
          <el-button v-else class="button-new-tag" size="small" @click="showInput">+新标签</el-button>
          <span>推荐标签</span>
          <el-tag
            v-for="tag in dynamicTags"
            :key="tag"
            class="tag"
            closable
            :disable-transitions="false"
            effect="plain"
            type="info"
            @close="handleClose(tag)"
          >
            {{ tag }}
          </el-tag>
        </el-form-item>

        <el-form-item label="价格">
          <el-input placeholder="0.00" class="price">
            <template slot="prepend">￥</template>
          </el-input>元
        </el-form-item>
        <el-form-item label="是否支持定制">
          <el-radio-group v-model="form.diy">
            <el-radio label="是" />
            <el-radio label="否" />
          </el-radio-group>
        </el-form-item>

        <el-form-item label="购买链接">
          <el-input type="text" placeholder="请填写产品的购买地址" />
        </el-form-item>

        <el-form-item label="软件试用下载（选填）">
          <el-input type="text" placeholder="请填写试用软件的下载地址" />
        </el-form-item>

        <el-form-item label="商品描述" prop="content" style="margin-bottom: 30px;">
          <Tinymce ref="editor" v-model="form.content" :height="400" />
        </el-form-item>
        <el-form-item>
          <el-button type="danger">发布视频</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'

export default {
  components: {
    Tinymce
  },
  data() {
    return {
      dynamicTags: ['人工智能', '扫地机器人', '家电'],
      inputVisible: true,
      inputValue: '',
      form: {
        diy: ''
      },
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      fileList: [],
      imageUrl: '',
      disabled: false
    }
  },
  methods: {
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
    },

    showInput() {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },

    handleInputConfirm() {
      const inputValue = this.inputValue
      if (inputValue) {
        this.dynamicTags.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleChange(file, fileList) {
      this.fileList = fileList
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
  .tag {
    margin: 0 10px;
  }
}
.form {
  margin-top: 20px;
  .label {
    line-height: 40px;
    font-size: 14px;
    font-weight: 700;
    color: #606266;
    .grey {
      font-size: 12px;
      font-weight: 500;
      color: #999;
    }
  }
  .el-select {
    margin-right: 20px;
  }
  .price {
    width: 300px;
    margin-right: 10px;
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
