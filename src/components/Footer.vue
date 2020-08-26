<template>
    <div class="footer">
        <div class="foot-main">
            <div class="content">
                <div class="item about">
                    <p class="title">公司介绍</p>
                    <p>关于我们</p>
                    <p>服务声明</p>
                    <p>媒体报道</p>
                </div>
                <div class="item service">
                    <p class="title">企业服务中心</p>
                    <p>人工智能</p>
                    <p>物联网</p>
                    <p>基因工程</p>
                    <p>区块链</p>
                    <p>大数据</p>
                    <p>云计算</p>
                </div>
                <div class="item help">
                    <p class="title">帮助</p>
                    <p>帮助中心</p>
                    <p>常见问题</p>
                    <p>网站导航</p>
                </div>
                <div class="item concat">
                    <p class="title">联系我们</p>
                    <p>合作热线：400-666-888</p>
                    <p>销售热线：400-666-888</p>
                    <p>客服热线：400-666-888</p>
                    <p>Email:topbang@qq.com</p>
                    <img class="qrcode" src="../assets/pics/wechat.png" />
                    <p class="scan-code">扫码关注公众号</p>
                </div>
            </div>
            <div class="foot">
                <p>TOP帮Copyright ©2020 北京TOP帮有限公司版权所有</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.footer {
    width: 100%;
    background: #ffffff;
    z-index: 2;
    padding-bottom: 43px;
    .foot-main {
        width: 1200px;
        margin: 0 auto;
        padding-top: 58px;
        .line {
            display: block;
            width: 336px;
            height: 40px;
            margin: 0 auto;
            margin-bottom: 55px;
        }
    }
    .content {
        display: flex;
        justify-content: flex-start;
        align-items: top;
        font-size: 18px;
        color: #adadad;
        .item {
            display: inline-block;
            text-align: center;
            .title {
                font-size: 24px;
                color: #111111;
                &:before {
                    display: inline-block;
                    content: '';
                    width: 4px;
                    height: 18px;
                    background: #cc151d;
                    border-radius: 2px;
                    margin-right: 10px;
                }
            }
        }
        .about {
            margin-left: 26px;
        }
        .service {
            margin-left: 165px;
        }
        .help {
            margin-left: 169px;
        }
        .concat {
            margin-left: 167px;
            .qrcode {
                margin-top: 31px;
            }
            .scan-code {
                font-size: 12px;
                color: #9f9f9f;
                margin-top: 0;
            }
        }
    }
    .foot {
        font-size: 16px;
        color: #666;
        text-align: center;
        margin-top: 67px;
        font-weight: 400;
    }
}
</style>