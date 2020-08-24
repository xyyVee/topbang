<template>
    <div class="header-main">
        <div class="header">
            <img class="logo" src="../assets/logo.png"/>
            <div class="top-search">
                <input type="text" v-model="search" placeholder="输入关键词进行搜索" />
                <img class="search-icon" src="../assets/icons/search.png"/>
            </div>
            <div class="right">
                <router-link class="item item-1" to="/">
                    <img class="icon-1" src="../assets/icons/home.png"/>
                </router-link>
                <span class="item arrow item-2">
                    <img class="icon-2" src="../assets/icons/user.png"/>
                    <div class="login-menu">
                        <router-link class="login" to="/login">登陆</router-link >
                        <div class="register">注册</div>
                    </div>
                </span>
                <span class="item arrow">
                    <img class="icon-3" src="../assets/icons/menu.png"/>
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
    height: 90px;
    background: rgba(0,0,0,.67);
    z-index: 2;
    .header {
        position: relative;
        width: 1200px;
        height: 90px;
        margin: 0 auto;
    }
    .logo {
        position: absolute;
        width: 65px;
        height: 65px;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
    }
}
.top-search {
    display: inline-block;
    position: absolute;
    width: 650px;
    height: 36px;
    top: 50%;
    left: 86px;
    transform: translateY(-50%);
    input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 18px;
        outline: none;
        padding: 4px 10px 4px 35px;
        border: none;
        font-size: 14px;
        color: #999999;
        &::-webkit-input-placeholder {
            /* placeholder颜色 */
            color: #999999;
            /* placeholder字体大小 */
            font-size: 14px;
        }
    }
    .search-icon {
        position: absolute;
        width: 20px;
        height: 20px;
        top: 50%;
        left: 10px;
        transform: translateY(-50%);
        cursor: pointer;
    }
}
.right {
    position: absolute;
    display: flex;
    justify-content: flex-end;
    align-content: center;
    right: 0;
    height: 100%;
    top: 50%;
    transform: translateY(-50%);
    .item {
        position: relative;
        display: inline-block;
        width: 50px;
        cursor: pointer;
        padding-left: 5px;
        padding-right: 5px;
        &:hover {
            background: rgba(0,0,0,.5);
        }
        &.arrow{
            position: relative;
            &:after {
                position: absolute;
                content: '';
                width: 0;
                height: 0;
                border: 5px solid #ffffff;
                border-left-color: transparent;
                border-bottom-color: transparent;
                border-right-color: transparent;
                right: 5px;
                top: 50%;
            }
        }
        .icon-1 {
            position: absolute;
            width: 18px;
            height: 19px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
        .icon-2 {
            position: absolute;
            width: 15px;
            height: 19px;
            top: 50%;
            transform: translateY(-50%);
        }
        .icon-3 {
            position: absolute;
            width: 18px;
            height: 17px;
            top: 50%;
            transform: translateY(-50%);
        }
    }
    .item-1 {
        margin-right: 15px;
    }
    .item-2 {
        margin-right: 10px;
        &:hover {
            .login-menu {
                opacity: 1;
            }
        }
    }
}
.login-menu {
    position: absolute;
    top: 95px;
    right: -8px;
    width: 60px;
    border: 1px solid #ffffff;
    font-size: 16px;
    color: #ffffff;
    text-align: center;
    letter-spacing: 4px;
    opacity: 0;
    .login {
        border-bottom: 1px solid #ffffff;
    }
    .login, .register {
        padding-top: 2px;
        padding-bottom: 2px;
        cursor: pointer;
        color: #ffffff;
        text-decoration: none;
    }
}
</style>