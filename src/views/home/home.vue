<template>
    <div class='home_page'>
        <div class='delphi_swiper_box'>
            <div class='delphi_swiper_box_inner'></div>
            <div class='delphi_swiper'>
                <div ref='homeSwiper' class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img src="/static/imgs/home/banner1.png">
                        </div>
                        <div class="swiper-slide">
                            <img src="/static/imgs/home/banner2.png">
                        </div>
                        <div class="swiper-slide">
                            <img src="/static/imgs/home/banner3.png">
                        </div>
                    </div>
                    <!-- 如果需要分页器 -->
                    <div ref='swiperPagination' class="swiper-pagination"></div>
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
            swiper: null
        }
    },
};

</script>
<style type="text/css">
    
</style>
