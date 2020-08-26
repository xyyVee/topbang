<template>
  <div class="industry-table">
    <Header />
    <div class="main">
      <div class="left">
        <div class="title">行业分类</div>
        <div v-for="item in menuList" :key="item.id" class="l-item" :class="{'active': activeMenu.id === item.id}" @click="activeMenu = item">
          <!-- 图标区分 这里是为了避开webpack打包，届时上传到图床组合名字即可 -->
          <!-- start -->
            <img v-if="item.id === '1'" src="../../assets/industry/ad-icon1.png" />
            <img v-else-if="item.id === '2'" src="../../assets/industry/ad-icon2.png" />
            <img v-else-if="item.id === '3'" src="../../assets/industry/ad-icon3.png" />
            <img v-else-if="item.id === '4'" src="../../assets/industry/ad-icon4.png" />
            <img v-else-if="item.id === '5'" src="../../assets/industry/ad-icon5.png" />
            <img v-else-if="item.id === '6'" src="../../assets/industry/ad-icon6.png" />
            <img v-else-if="item.id === '7'" src="../../assets/industry/ad-icon7.png" />
            <img v-else-if="item.id === '8'" src="../../assets/industry/ad-icon8.png" />
            <img v-else-if="item.id === '9'" src="../../assets/industry/ad-icon9.png" />
            <img v-else-if="item.id === '10'" src="../../assets/industry/ad-icon10.png" />
            <img v-else-if="item.id === '11'" src="../../assets/industry/ad-icon11.png" />
            <img v-else-if="item.id === '12'" src="../../assets/industry/ad-icon12.png" />
            <img v-else-if="item.id === '13'" src="../../assets/industry/ad-icon13.png" />
            <img v-else-if="item.id === '14'" src="../../assets/industry/ad-icon14.png" />
            <img v-else-if="item.id === '15'" src="../../assets/industry/ad-icon15.png" />
            <img v-else-if="item.id === '16'" src="../../assets/industry/ad-icon16.png" />
            <img v-else-if="item.id === '17'" src="../../assets/industry/ad-icon17.png" />
            <img v-else-if="item.id === '18'" src="../../assets/industry/ad-icon18.png" />
            <img v-else src="../../assets/industry/ad-icon19.png" />
          <!-- end -->
          {{ item.name }}
        </div>
      </div>
      <div class="right">
        <el-breadcrumb class="breadcrumb" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>所有行业</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="r-content" v-if="activeMenu && activeMenu.id">
          <div class="title">
            <!-- 图标区分 这里是为了避开webpack打包，届时上传到图床组合名字即可 -->
            <!-- start -->
              <img v-if="activeMenu.id === '1'" src="../../assets/industry/ad-icon1.png" />
              <img v-else-if="activeMenu.id === '2'" src="../../assets/industry/ad-icon2.png" />
              <img v-else-if="activeMenu.id === '3'" src="../../assets/industry/ad-icon3.png" />
              <img v-else-if="activeMenu.id === '4'" src="../../assets/industry/ad-icon4.png" />
              <img v-else-if="activeMenu.id === '5'" src="../../assets/industry/ad-icon5.png" />
              <img v-else-if="activeMenu.id === '6'" src="../../assets/industry/ad-icon6.png" />
              <img v-else-if="activeMenu.id === '7'" src="../../assets/industry/ad-icon7.png" />
              <img v-else-if="activeMenu.id === '8'" src="../../assets/industry/ad-icon8.png" />
              <img v-else-if="activeMenu.id === '9'" src="../../assets/industry/ad-icon9.png" />
              <img v-else-if="activeMenu.id === '10'" src="../../assets/industry/ad-icon10.png" />
              <img v-else-if="activeMenu.id === '11'" src="../../assets/industry/ad-icon11.png" />
              <img v-else-if="activeMenu.id === '12'" src="../../assets/industry/ad-icon12.png" />
              <img v-else-if="activeMenu.id === '13'" src="../../assets/industry/ad-icon13.png" />
              <img v-else-if="activeMenu.id === '14'" src="../../assets/industry/ad-icon14.png" />
              <img v-else-if="activeMenu.id === '15'" src="../../assets/industry/ad-icon15.png" />
              <img v-else-if="activeMenu.id === '16'" src="../../assets/industry/ad-icon16.png" />
              <img v-else-if="activeMenu.id === '17'" src="../../assets/industry/ad-icon17.png" />
              <img v-else-if="activeMenu.id === '18'" src="../../assets/industry/ad-icon18.png" />
              <img v-else src="../../assets/industry/ad-icon19.png" />
            <!-- end -->
            {{activeMenu.name}}
          </div>
          <div class="r-list">
            <div v-for="pitem in activeMenu.list" :key="pitem.id" class="rl-item">
              <div class="rl-title">{{ pitem.name }}</div>
              <div class="rll-list">
                <div v-for="citem in pitem.list" :key="citem.id" class="rll-item">
                  {{citem}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      menuList: [
        {
          id: '1',
          name: '农林牧渔业',
          list: [{
            id: '1.1',
            name: '农业',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }, {
            id: '1.2',
            name: '林业',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }, {
            id: '1.3',
            name: '畜牧业',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }, {
            id: '1.4',
            name: '渔业',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }, {
            id: '1.5',
            name: '农林牧渔服务',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }]
        }, {
          id: '2',
          name: '采矿业',
          list: [{
            id: '2.1',
            name: '煤炭开采和洗选业',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }, {
            id: '2.2',
            name: '石油和天然气开采',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }, {
            id: '2.3',
            name: '黑色金属矿采选',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }, {
            id: '2.4',
            name: '有色金属矿采选',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }, {
            id: '2.5',
            name: '非金属矿采选',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }, {
            id: '2.6',
            name: '其他采矿业',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }]
        }, {
          id: '3',
          name: '制造业',
          list: [{
            id: '3.1',
            name: '农副食品加工业',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }, {
            id: '3.2',
            name: '谷物磨制',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }]
        }, {
          id: '4',
          name: '电力、热力、燃气及水生产和供应业',
          list: [{
            id: '4.1',
            name: '电力、热力的生产和供应',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }, {
            id: '4.2',
            name: '燃气生产和供应',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }, {
            id: '4.3',
            name: '水的生产和供应',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }]
        }, {
          id: '5',
          name: '建筑业',
          list: [{
            id: '5.1',
            name: '建筑安装',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }, {
            id: '5.2',
            name: '房屋和土木工程建筑',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }]
        }, {
          id: '6',
          name: '交通运输、仓储和邮政业',
          list: [{
            id: '6.1',
            name: '铁路运输',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }, {
            id: '6.2',
            name: '道路运输',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }]
        }, {
          id: '7',
          name: '信息传输、软件和信息技术服务业',
          list: [{
            id: '7.1',
            name: '电信和其他信息传输服务',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }, {
            id: '7.2',
            name: '电信',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }]
        }, {
          id: '8',
          name: '批发和零售业',
          list: [{
            id: '8.1',
            name: '批发',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }, {
            id: '8.2',
            name: '农畜产品',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }]
        }, {
          id: '9',
          name: '住宿和餐饮业',
          list: [{
            id: '9.1',
            name: '住宿',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }, {
            id: '9.2',
            name: '旅游饭店',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }]
        }, {
          id: '10',
          name: '金融业',
          list: [{
            id: '10.1',
            name: '银行业',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }, {
            id: '10.2',
            name: '证券',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }]
        }, {
          id: '11',
          name: '房地产业',
          list: [{
            id: '11.1',
            name: '房地产开发经营',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }, {
            id: '11.2',
            name: '物业管理',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }]
        }, {
          id: '12',
          name: '租赁和商务服务业',
          list: [{
            id: '12.1',
            name: '租赁',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }, {
            id: '12.2',
            name: '机械设备租赁',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }]
        }, {
          id: '13',
          name: '科学研究和技术服务业',
          list: [{
            id: '13.1',
            name: '研究与试验发展',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }, {
            id: '13.2',
            name: '专业技术服务',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }]
        }, {
          id: '14',
          name: '水利、环境和公共设施管理业',
          list: [{
            id: '14.1',
            name: '水利管理',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }, {
            id: '14.2',
            name: '环境管理',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }]
        }, {
          id: '15',
          name: '居民服务、修理和其他服务业',
          list: [{
            id: '15.1',
            name: '居民服务',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }, {
            id: '15.2',
            name: '其他服务',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }]
        }, {
          id: '16',
          name: '教育',
          list: [{
            id: '16.1',
            name: '教育',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }, {
            id: '16.2',
            name: '学前',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }]
        }, {
          id: '17',
          name: '卫生和社会工作',
          list: [{
            id: '17.1',
            name: '卫生',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }, {
            id: '17.2',
            name: '社会保障',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }]
        }, {
          id: '18',
          name: '文化、体育和娱乐业',
          list: [{
            id: '18.1',
            name: '新闻出版业',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }, {
            id: '18.2',
            name: '新闻业',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }]
        }, {
          id: '19',
          name: '公共管理、社会保障和社会组织',
          list: [{
            id: '19.1',
            name: '中国共产党机关',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }, {
            id: '19.2',
            name: '国家机构',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }]
        }, {
          id: '20',
          name: '国际组织',
          list: [{
            id: '20.1',
            name: '国际组织',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }]
        }
      ],
      activeMenu: null
    }
  },
  created() {
    this.activeMenu = this.menuList[0]
    console.log(this.activeMenu)
  }
}
</script>

<style lang="scss" scoped>
.industry-table {
  width: 100%;
  background: #F2F2F2;
}
.main {
  display: flex;
  justify-content: space-between;
  align-items: top;
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  padding-top: 54px;
  .left {
    width: 300px;
    height: 990px;
    background: #ffffff;
    .title {
      font-size: 18px;
      color: #333333;
      font-weight: bold;
      padding: 17px 20px;
    }
    .l-item {
      padding: 12px 20px;
      font-size: 14px;
      color: #333333;
      &:hover, &.active {
        background: #C34840;
        color: #ffffff;
      }
      img {
        width: 16px;
        height: 16px;
        object-fit: contain;
        vertical-align: middle;
        margin-right: 4px;
      }
    }
  }
  .right {
    width: 900px;
    padding-left: 29px;
    .breadcrumb {
      margin-top: 17px;
    }
    .r-content {
      margin-top: 42px;
      .title {
        font-size: 20px;
        font-weight: bold;
        color: #333333;
        img {
          width: 24px;
          height: 24px;
          object-fit: contain;
          vertical-align: middle;
          margin-right: 5px;
        }
      }
    }
    .r-list {
      width: 100%;
      display: flex;
      flex-flow: row wrap;
      align-content: flex-start;
      .rl-item {
        width: 50%;
        padding-left: 36px;
        margin-top: 23px;
        .rl-title {
          font-size: 16px;
          color: #3c8ced;
        }
      }
    }
    .rll-list {
      margin-top: 17px;
      display: flex;
      flex-flow: row wrap;
      align-content: flex-start;
      .rll-item {
        width: 50%;
        font-size: 14px;
        color: #333333;
      }
    }
  }
}
</style>