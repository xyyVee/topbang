<template>
  <div class="nav-sticky">
    <div class="sticky" :class="{'sticky-pos': stickyEnabled, 'hidden': hide}">
      <div class="main">
        <div class="industry" :class="{'expand-active': expand}" @click="expandList">
            <svg-icon class="nav-icon" icon-class="list" />
            <span>行业</span>
            <svg-icon class="nav-down" icon-class="arrow-down" />
        </div>
        <!-- 展开项 -->
        <div class="expand-list" v-show="expand" @mouseenter="closeExpand"> 
          <div class="el-left">
            <p v-for="(item) in menuList" :key="item.id" class="el-item" :class="{'el-item-active': activeMenu && activeMenu.id === item.id}" @mouseenter="activeMenu = item">
              {{ item.name }}
              <svg-icon class="arrow-right" icon-class="arrow-right" />
            </p>
            <p class="el-item all" @mouseenter="activeMenu = null">
              所有分类
              <svg-icon class="arrow-right" icon-class="arrow-right" />
            </p>
          </div>
          <div class="el-right" v-if="activeMenu && activeMenu.list.length > 0">
            <div v-for="item in activeMenu.list" :key="item.id" class="d-item">
              <p class="title">{{ item.name }}</p>
              <p v-for="(child, index) in item.list" :key="index">{{ child }}</p>
            </div>
          </div>
        </div>
        <!-- nav 其他项 -->
        <div v-for="(m, index) in menu" :key="index" class="other">{{ m }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 滚动到多少距离吸顶
    sticky: {
      type: Number,
      default: 0
    },
    // 初次渲染是否展示
    hide: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  data() {
    return {
      menu: ['人工智能', '物联网', '基因工程', '区块链', '大数据', '云计算', '帮助'],
      stickyEnabled: false,
      expand: false,
      activeMenu: null,
      menuList: [
        {
          id: '1',
          name: '农、林、牧、渔业',
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
          }]
        }, {
          id: '2',
          name: '采矿业',
          list: [{
            id: '2.1',
            name: '农业',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }, {
            id: '2.2',
            name: '林业',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }, {
            id: '2.3',
            name: '畜牧业',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }]
        }, {
          id: '3',
          name: '制造业',
          list: [{
            id: '3.1',
            name: '农业',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }, {
            id: '3.2',
            name: '林业',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }]
        }, {
          id: '4',
          name: '电力、热力、燃气及水生产和供应业',
          list: [{
            id: '4.1',
            name: '农业',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }, {
            id: '4.2',
            name: '林业',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }]
        }, {
          id: '5',
          name: '建筑业',
          list: [{
            id: '5.1',
            name: '农业',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }]
        }, {
          id: '6',
          name: '交通运输、仓储和邮政业',
          list: [{
            id: '6.1',
            name: '农业',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }]
        }, {
          id: '7',
          name: '信息传输、软件和信息技术服务业',
          list: [{
            id: '7.1',
            name: '农业',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }]
        }, {
          id: '8',
          name: '批发和零售业',
          list: [{
            id: '8.1',
            name: '农业',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }]
        }, {
          id: '9',
          name: '住宿和餐饮业',
          list: [{
            id: '9.1',
            name: '农业',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }]
        }, {
          id: '10',
          name: '金融业',
          list: [{
            id: '10.1',
            name: '农业',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }]
        }, {
          id: '11',
          name: '房地产业',
          list: [{
            id: '11.1',
            name: '农业',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }]
        }, {
          id: '12',
          name: '租赁和商务服务业',
          list: [{
            id: '12.1',
            name: '农业',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }]
        }, {
          id: '13',
          name: '科学研究和技术服务业',
          list: [{
            id: '13.1',
            name: '农业',
            list: ['农产品一', '农产品二', '农产品三', '农产品四', '农产品五', '农产品六']
          }]
        }
      ]
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > this.sticky) {
        console.log('sticky')
        this.stickyEnabled = true
      } else {
        this.stickyEnabled = false
      }
    },
    closeExpand() {
      // this.expand = false
      this.activeMenu = null
    },
    expandList() {
      this.expand = !this.expand
    }
  }
}
</script>

<style lang="scss" scoped>
.sticky {
  position: absolute;
  top: 60px;
  width: 100%;
  height: 60px;
  background: #ffffff;
  box-shadow: 2px 2px 5px #d9d9d9;
  .main {
    position: relative;
    width: 1200px;
    margin: 0 auto;
    .industry {
      display: inline-block;
      position: relative;
      width: 138px;
      height: 100%;
      line-height: 60px;
      padding-left: 20px;
      &:hover, &.expand-active{
        color: #c34840;
        cursor: pointer;
      }
      &:after {
        position: absolute;
        content: '';
        width: 1px;
        height: 20px;
        background: #cccccc;
        top: 20px;
        right: 0;
        opacity: 1;
      }
    }
    .expand-active {
      position: relative;
      &:after {
        opacity: 0;
      }
      &:before {
        top: 10px;
        left: 0;
        position: absolute;
        display: block;
        content: '';
        width: 134px;
        height: 50px;
        border: 1px solid #eeeeee;
        border-bottom: none;
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
.hidden {
  opacity: 0;
}
.sticky-pos {
  position: fixed;
  top: 0;
  z-index: 3;
  opacity: 1;
}
.expand-list {
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: top;
  height: 590px;
  top: 60px;
  left: 0;
  background: #ffffff;
  &:before {
    position: absolute;
    content: '';
    left: 135px;
    width: 225px;
    height: 1px;
    background: #eeeeee;
  }
  .el-left {
    width: 360px;
    font-size: 16px;
    color: #333333;
    overflow: hidden;
    background: #ffffff;
    .el-item {
      position: relative;
      box-sizing: content-box;
      width: 335px;
      height: 42px;
      line-height: 42px;
      margin: 0;
      padding-left: 25px;
      &.all {
        color: #388ced;
      }
      .arrow-right {
        float: right;
        font-size: 25px;
        margin-top: 8px;
        margin-right: 15px;
      }
      &:hover, &.el-item-active {
        box-shadow: 0px 0px 7px #d9d9d9;
      }
    }
    .el-item-active::after {
      position: absolute;
      content: '';
      right: 0;
      top: 0;
      width: 5px;
      height: 42px;
      background: #fff;
    }
  }
  .el-right {
    width: 550px;
    height: 590px;
    background: #ffffff;
    box-shadow: 0px 0px 4px #d9d9d9;
    .d-item {
      display: inline-block;
      width: 50%;
      padding-left: 50px;
      font-size: 14px;
      color: #555555;
      .title {
        color: #388ced;
        font-size: 16px;
      }
      &:nth-child(1), &:nth-child(2) {
        margin-bottom: 40px;
      }
    }
  }
}
</style>