<template>
  <div class="main">
    <div class="header">
      <div class="title">
        <img src="@/assets/icons/auth.png" alt="">
        <span>企业认证</span>
      </div>
    </div>
    <div class="form">
      <el-form ref="form" :model="form" label-width="320px">
        <el-form-item label="注册地址" :rules="[{ required: true}]">
          <el-input placeholder="请填写营业执照上的注册地址" class="input" />
        </el-form-item>
        <el-form-item label="员工规模" :rules="[{ required: true}]">
          <el-input type="text" placeholder="请填写员工规模" maxlength="20" show-word-limit class="input" />
        </el-form-item>
        <el-form-item label="业务范畴" :rules="[{ required: true}]">
          <el-input placeholder="请按照营业执照上的经营范围填写" class="input" />
        </el-form-item>
        <el-form-item label="客户群体" :rules="[{ required: true}]">
          <el-input placeholder="请填写企业客户群体" class="input" />
        </el-form-item>
        <el-form-item label="统一社会信用代码" :rules="[{ required: true}]">
          <el-input placeholder="请填写营业执照上的统一社会信用代码" class="input" />
        </el-form-item>

        <el-form-item label="经营期限" :rules="[{ required: true}]">
          <el-date-picker
            v-model="value1"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            class="input"
          />
        </el-form-item>
        <el-form-item label="上传营业执照附件" :rules="[{ required: true}]">
          <el-row>
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-picture-outline avatar-uploader-icon" />
            </el-upload>
          </el-row>
        </el-form-item>
        <el-form-item label="法人姓名" :rules="[{ required: true}]">
          <el-input placeholder="请填写法人姓名" class="input" />
        </el-form-item>
        <el-form-item label="法人身份证号码" :rules="[{ required: true}]">
          <el-input placeholder="请填写法人身份证号码" class="input" />
        </el-form-item>
        <el-form-item label="法人身份证期限" :rules="[{ required: true}]">
          <el-date-picker
            v-model="value1"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            class="input"
          />
        </el-form-item>
        <el-form-item label="上传法人身份证" :rules="[{ required: true}]">
          <el-row>
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-picture-outline avatar-uploader-icon" />
            </el-upload>
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-picture-outline avatar-uploader-icon" />
            </el-upload>
          </el-row>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageUrl: '',
      value: '',
      value1: '',
      value2: '',
      form: {}
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  line-height: 70px;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  .title {
    font-size: 26px;
    font-weight: bold;
    display: flex;
    align-items: center;
    border-bottom: 4px solid #c34840;
    img {
      margin-right: 10px;
    }
  }
}
.input {
  width: 300px;
}
.btn {
  margin: 0 10px;
}
.tip {
  .blue {
    color: #409eff;
  }
}

.avatar-uploader {
  width: 120px;
  display: inline-block;
  margin-right: 20px;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 120px;
  height: 120px;
  line-height: 120px;
  text-align: center;
}
.avatar {
  width: 120px;
  height: 120px;
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
.el-checkbox__input {
  vertical-align: super;
}
</style>
