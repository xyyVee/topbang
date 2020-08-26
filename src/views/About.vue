<template>
  <div class="about">
    <Header />
    <NavSticky :sticky="60" />
    <div class="main">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>公司详情</el-breadcrumb-item>
        <el-breadcrumb-item>杭州域加网络科技有限公司</el-breadcrumb-item>
      </el-breadcrumb>

      <div class="company-desc">
        <div class="top">
          <div class="name">
            <svg-icon class="renzhen" icon-class="renzhen" />
            杭州域加网络科技有限公司
            <i class="el-icon-share"></i>
          </div>
          <div class="btn">
            <div class="customer-service">在线客服</div>
            <div class="concat">联系我们</div>
          </div>
        </div>
        <div class="desc">
          <div class="name">公司简介</div>
          <div class="content">
            成立于2009年，专门从事计算机主板/工业控制板/通信网络设备的主芯片的销售。产品包括各种主要芯片：北桥芯片，南桥芯片，VGA芯片，NIC芯片，内部存储器，RAM芯片，互联网服务器芯片，交换芯片，通信网络控制芯片以及音频和视频图像处理芯片，以及其他相关芯片的多年电子分销经验，标准的管理，良好的质量，使N-south的有效操作程序可以帮助我们的客户在市场上获得优势。位于深圳，我们享有便利的主要交通网络。我们公司占地面积42平方米，拥有约8名员工。此外，我们所有的产品均采用先进的设备和严格的质量控制程序制造，以确保高质量。保证稳定，及时的供应，可靠的质量和真诚的服务，我们的产品畅销国内外。如果您对我们的任何产品感兴趣，或希望订购定制产品，请与我们联系。我们将尽力满足您的需求。
          </div>
          <div class="peoson">
            <div class="item">
              <img class="icon" src="../assets/icons/person1.png" />
              <div class="right">
                <div class="rt">联系人</div>
                <div class="rb">张明</div>
              </div>
            </div>
            <div class="item">
              <img class="icon" src="../assets/icons/person2.png" />
              <div class="right">
                <div class="rt">电话</div>
                <div class="rb">13000000000</div>
              </div>
            </div>
            <div class="item">
              <img class="icon" src="../assets/icons/person3.png" />
              <div class="right">
                <div class="rt">网址</div>
                <div class="rb"><a href="www.domainplus.cn" target="_blank">www.domainplus.cn</a></div>
              </div>
            </div>
            <div class="item">
              <img class="icon" src="../assets/icons/person4.png" />
              <div class="right">
                <div class="rt">地址</div>
                <div class="rb">浙江省杭州市西湖区紫霞街176号3号楼310室</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="products">
        <div class="title">公司产品</div>
        <div class="list-content">
          <div v-for="(item, index) in array" :key="index" class="wrap">
            <VideoItem :content="item" :show-bottom="true" :bottom-style="2" />
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

    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import NavSticky from '@/components/NavSticky'
import Footer from '@/components/Footer'
import VideoItem from './components/VideoItem'

export default {
  components: {
    Header,
    Footer,
    NavSticky,
    VideoItem
  },
  data() {
    return {
      array: []
    }
  },
  created() {
    for(let i = 0; i < 20; i++) {
      this.array.push({
        id: i+1,
        other: 'test'
      })
    }
  }
}
</script>

<style>
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background: none;
  color: #C34840;
}
.el-pagination.is-background .el-pager li:not(.disabled):hover {
  color: #C34840
}
</style>
<style lang="scss" scoped>
.about {
  background: #F2F2F2;
  padding-top: 125px;
  .main {
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
  .company-desc {
    margin-top: 30px;
    width: 100%;
    background: #ffffff;
    padding: 16px 30px;
    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 19px;
      border-bottom: 1px solid #EEEEEE;
      .name {
        font-size: 20px;
        color: #000000;
        font-weight: bold;
        .renzhen {
          font-size: 24px;
        }
        .el-icon-share {
          color: #A3A3A3;
          margin-left: 20px;
        }
      }
      .btn {
        width: 220px;
      }
      .customer-service, .concat {
        display: inline-block;
        width: 100px;
        height: 28px;
        border: 2px solid #c34840;
        border-radius: 4px;
        text-align: center;
        font-size: 16px;
      }
      .customer-service {
        color: #C34840;
        margin-right: 20px;
      }
      .concat {
        color: #ffffff;
        background: #C34840;
      }
    }
    .desc {
      margin-top: 20px;
      .name {
        font-size: 16px;
        color: #333333;
        font-weight: bold;
        line-height: 24px;
      }
      .content {
        font-size: 14px;
        color: #333333;
        line-height: 24px;
        margin-top: 10px;
      }
    }
    .peoson {
      margin-top: 30px;
      display: flex;
      .item {
        display: flex;
        align-items: center;
        margin-right: 80px;
        &:last-child{
          margin-right: 0;
        }
        .icon {
          width: 50px;
          height: 50px;
        }
        .right {
          margin-left: 10px;
          .rt {
            font-size: 16px;
            color: #333333;
            font-weight: bold;
          }
          .rb {
            font-size: 14px;
            color: #333333;
            a {
              text-decoration: none;
              color: #388CED;
            }
          }
        }
      }
    }
  }
  .products {
    margin-top: 50px;
    margin-bottom: 50px;
    .title {
      font-size: 30px;
      color: #333333;
      font-weight: bold;
    }
    .list-content {
      display: flex;
      flex-wrap: wrap;
      padding: 20px;
      background: #ffffff;
      .wrap {
        display: inline-block;
        margin-right: 27px;
        margin-bottom: 27px;
        &:nth-child(5n) {
          margin-right: 0;
        }
      }
    }
  }
}
.pagination {
  width: 100%;
  text-align: right;
}
</style>