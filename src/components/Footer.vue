<template>
    <div class="footer">
        <div class="main">
            <img class="line" src="../assets/pics/footer-line.png" />
            <div class="content">
                <div class="item">
                    <p>合作热线：400-333-3333</p>
                    <p>销售热线：400-888-8888</p>
                    <p>客服热线：400-666-6666</p>
                    <p>Email：topbang@666.com</p>
                </div>
                <div class="item about">
                    <p>关于我们</p>
                    <p>服务声明</p>
                    <p>媒体报道</p>
                </div>
                <div class="item operate">
                    <p>加入我们</p>
                    <p>联系我们</p>
                    <p>合作伙伴计划</p>
                </div>
                <div class="item operate">
                    <p>帮助中心</p>
                    <p>常见问题</p>
                    <p>网站导航</p>
                </div>
                <div class="item service">
                    <p>帮助中心</p>
                    <p>常见问题</p>
                    <p>网站导航</p>
                </div>
            </div>
            <div class="foot">
                <p>友情提醒：益震 | 展厅 | 国家搜索 | 供应商 | 批发商 | 会员关系</p>
                <p>产品上市政策-知识产权保护-隐私政策-使用条款- 用户信息法律咨询指南</p>
                <p>© 1999-2020 Alibaba.com。版权所有。 浙公网安备33010002000092号 浙B2-20120091</p>
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
    .main {
        width: 1100px;
        margin: 0 auto;
        .line {
            display: block;
            width: 336px;
            height: 40px;
            margin: 0 auto;
            margin-top: 58px;
            margin-bottom: 55px;
        }
    }
    .content {
        font-size: 16px;
        color: #333333;
        padding-left: 159px;
        .item {
            display: inline-block;
            text-align: center;
        }
        .about {
            margin-left: 134px;
        }
        .operate {
            margin-left: 65px;
        }
        .service {
            margin-left: 77px;
        }
    }
    .foot {
        font-size: 12px;
        color: #999999;
        text-align: center;
        margin-top: 67px;
    }
}
</style>