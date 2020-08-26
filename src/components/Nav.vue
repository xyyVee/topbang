<template>
  <div class="nav-bar">
    <div class="nav-side">
      <img class="img" src="../assets/nav/nav-icon7.png" />
    </div>
    <div class="nav-item">
      <img class="nav-icon" src="../assets/nav/nav-icon6.png" />
      个人中心
    </div>
    <div class="nav-item">
      <img class="nav-icon" src="../assets/nav/nav-icon5.png" />
      人工客服
    </div>
    <div class="nav-item">
      <img class="nav-icon" src="../assets/nav/nav-icon4.png" />
      网站导航
    </div>
    <div class="nav-item">
      <img class="nav-icon" src="../assets/nav/nav-icon3.png" />
      历史足迹
    </div>
    <div class="nav-item last-item">
      <img class="nav-icon" src="../assets/nav/nav-icon2.png" />
      回到顶部
    </div>
    <div class="nav-side">
      <img class="img" src="../assets/nav/nav-icon1.png" />
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.nav-bar {
  position: fixed;
  right: 16%;
  bottom: 50px;
  width: 84px;
  background: #ffffff;
  z-index: 3;
  .nav-item {
    font-size: 16px;
    color: #666666;
    width: 100%;
    text-align: center;
    padding-top: 15px;
    .nav-icon {
      display: block;
      margin: 0 auto;
      margin-bottom: 10px;
    }
    &:not(.last-item):after {
      display: block;
      content: '';
      width: 40px;
      height: 1px;
      background: #eeeeee;
      margin: 10px auto;
    }
  }
  .nav-side {
    position: relative;
    width: 100%;
    height: 39px;
    .img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
@media screen and (min-width: 1399px) {
  .nav-bar {
    right: 10px;
  }
}
</style>