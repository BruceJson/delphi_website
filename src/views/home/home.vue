<template>
    <div class='home_page'>
        <div class='delphi_swiper_box'>
            <div class='delphi_swiper_box_inner'></div>
            <div class='delphi_swiper'>
                <div ref='homeSwiper' class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for='(item, index) in swiperDataList' :key='index'>
                            <a :href="item.link">
                                <img :src="item.url">
                            </a>
                        </div>
                    </div>
                    <!-- 如果需要分页器 -->
                    <div ref='swiperPagination' class="swiper-pagination"></div>
                </div>
            </div>
        </div>

        <div class='product_part'>
            <div class='productList content_inner_width'>
                <div class='item'>
                    <img src="@imgs/home/06.png">
                    <div class='content_box'>
                        <p class='p1'>迅聘选材</p>
                        <p class='p2'>迅聘，帮您挑剔</p>
                        <p class='p3'>人才战略，快人一步</p>
                        <router-link to='/home' class='btn_detail'>查看详情</router-link>
                    </div>
                </div>
                <div class='item'>
                    <img src="@imgs/home/07.png">
                    <div class='content_box'>
                        <p class='p1'>贤于测评</p>
                        <p class='p2'>用最科学的人才评估系统，</p>
                        <p class='p3'>让您的选材快人一步</p>
                        <router-link to='/home' class='btn_detail'>查看详情</router-link>
                    </div>
                </div>
                <div class='item'>
                    <img src="@imgs/home/08.png">
                    <div class='content_box'>
                        <p class='p1'>人才委培</p>
                        <p class='p2'>一款让您提前锁定高质量，</p>
                        <p class='p3'>有潜力人才的产品</p>
                        <router-link to='/home' class='btn_detail'>查看详情</router-link>
                    </div>
                </div>
                <div class='item'>
                    <img src="@imgs/home/09.png">
                    <div class='content_box'>
                        <p class='p1'>SAAS服务</p>
                        <p class='p2'>外部人才市场监控，</p>
                        <p class='p3'>内部人才管理标准流程化</p>
                        <router-link to='/home' class='btn_detail'>查看详情</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
import '@pages/home.css';

import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

export default {
    name: 'home',
    mounted() {
        this.swiper = new Swiper(this.$refs.homeSwiper, {
            loop: true,
            speed: 1000,

            autoplay: true,
            delay: 3000,

            disableOnInteraction: false,

            effect: 'fade',

            // 如果需要分页器
            pagination: {
                el: this.$refs.swiperPagination,
            }
        })
    },
    data() {
        return {
            swiper: null,
            swiperDataList: [{
                url: require('@imgs/home/banner1.png'),
                link: 'http://www.baidu.com'
            }, {
                url: require('@imgs/home/banner2.png'),
                link: 'http://www.baidu.com'
            }, {
                url: require('@imgs/home/banner3.png'),
                link: 'http://www.baidu.com'
            }]
        }
    },
};

</script>
<style type="text/css">


</style>
