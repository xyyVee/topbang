<template>
    <div class="header-main">
        <div class="header">
            <img class="logo" src="./../assets/logo.png"/>
            <img class="logo2" src="./../assets/icons/logo2.png"/>
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
        data() {
            return {
                search: '',
                loginMenu: false
            }
        },
        methods: {
            showLogin() {
                this.loginMenu = !this.loginMenu
            }
        }
    }
</script>

<style lang="scss" scoped>
.header-main {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 54px;
    background: #ffffff;
    z-index: 4;
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