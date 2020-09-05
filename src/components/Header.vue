<template>
    <div class="header-main">
        <div class="header">
            <img class="logo" src="./../assets/logo.png"/>
            <img class="logo2" src="./../assets/icons/logo2.png"/>
            <el-input v-show="showSearchFlag" placeholder="输入关键词进行搜索" class="top-input" >
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
            <div class="right">
                <span class="item">
                    <img class="icon-1" src="../assets/icons/home-user.png"/>
                    请登录
                </span>
                <span class="item">
                    免费注册
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
         props: {
            showSearch: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                search: '',
                loginMenu: false,
                showSearchFlag: false
            }
        },
        mounted () {
            window.addEventListener('scroll', this.handleScroll)
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.handleScroll)
        },
        methods: {
            handleScroll() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                if (scrollTop > this.showSearch) {
                    console.log('sticky')
                    this.showSearchFlag = true
                } else {
                    this.showSearchFlag = false
                }
            },
            showLogin() {
                this.loginMenu = !this.loginMenu
            }
        }
    }
</script>
<style lang="scss">
.top-input{
    position: absolute;
    top: 50%;
    left: 250px;
    transform: translateY(-50%);
    .el-input__inner {
        border-radius: 18px;
        width: 500px;
        height: 36px;
    }
}
</style>
<style lang="scss" scoped>
.header-main {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 54px;
    background: #ffffff;
    z-index: 4;
    overflow-x: auto;
    .header {
        position: relative;
        width: 988px;
        height: 54px;
        margin: 0 auto;
    }
    .logo {
        position: absolute;
        width: 65px;
        height: 65px;
        left: 0;
        top: 0;
    }
    .logo2 {
        position: absolute;
        left: 74px;
        top: 22px;
    }
}
.el-icon-search {
    color: #CD4D42;
}
.right {
    position: absolute;
    right: 0;
    height: 100%;
    top: 50%;
    transform: translateY(-50%);
    .item {
        position: relative;
        display: inline-block;
        color: #666666;
        font-size: 16px;
        cursor: pointer;
        line-height: 54px;
        margin-left: 20px;
        &:hover {
            color: #CC141D;
        }
        .icon-1 {
            width: 33px;
            height: 33px;
            vertical-align: middle;
        }
    }
}
</style>