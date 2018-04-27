<template>
    <div class='page_header'>
        <div class='content_inner_width page_header_inner'>
            <div class="layout_header_logo">
                <img class='img_logo' src="/static/imgs/home/01.png">
            </div>

            <div class='layout_header_list'>
                <div class='layout_header_item' :class='{"active": $route.name === "home"}' @click='jumpTo("/home")'>
                    <div class='inner_content'>
                        <p>首页</p>
                    </div>
                    <div class='bottom_line'></div>
                </div>
                <div class='layout_header_item' :class='{"active": $route.name === "aboutus"}' @click='jumpTo("/aboutus")'>
                    <div class='inner_content'>
                        <p>关于我们</p>
                    </div>
                    <div class='bottom_line'></div>
                </div>
                <div class='layout_header_item' :class='{"active": $route.name === "contactus"}' @click='jumpTo("/contactus")'>
                    <div class='inner_content'>
                        <p>联系我们</p>
                    </div>
                    <div class='bottom_line'></div>
                </div>
                <div class='layout_header_item'>
                    <div class='inner_content'>
                        <p>加入收藏</p>
                    </div>
                    <div class='bottom_line'></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'xheader',
    methods: {
        jumpTo(path) {
            this.$router.push({
                path: path
            });
        }
    }
};

</script>
<style scoped>


</style>
