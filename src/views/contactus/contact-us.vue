<template>
    <div class='contactus_page'>
        <div class='line_height_0'>
            <div class='banner'>
                <div class='inner'></div>
                <div class='banner_img'>
                    <img class='img1' src="@imgs/contactus/1.png">
                    <p class='p1 fly-left'>相信自己能做到比努力本身更重要</p>
                    <p class='p2 fly-right'>
                        <span class='margin_right_10 font_14 vertical_middle'>———</span>
                        <span class='vertical_middle'>德尔斐网络科技</span>
                    </p>
                </div>
            </div>
        </div>

        <div class='part1'>
            <div class='inner content_inner_width'>
                <div class='map' style='background-color: gray;'>
                    <baidu-map class="map" style="display: flex; flex-direction: column;height:100%;" :center="{lng: 118.736948, lat: 32.017074}" :zoom="15" :scroll-wheel-zoom='true'>
                        <bm-view style="width: 100%; height:100px; flex: 1"></bm-view>
                        <bm-marker :position="{lng: 118.7364234657, lat: 32.0174873171}"></bm-marker>
                    </baidu-map>
                </div>
                <div class='info_box'>
                    <div class='item'>
                        <img src="@imgs/contactus/3.png">
                        <p>江苏德尔斐网络科技有限公司</p>
                    </div>
                    <div class='item'>
                        <img src="@imgs/contactus/4.png">
                        <p>025-8636819</p>
                    </div>
                    <div class='item'>
                        <img src="@imgs/contactus/5.png">
                        <p>210000</p>
                    </div>
                    <div class='item'>
                        <img src="@imgs/contactus/6.png">
                        <p>business@delphis.cn</p>
                    </div>
                    <div class='item'>
                        <img src="@imgs/contactus/7.png">
                        <p>江苏省南京市建邺区梦都大街132号紫鑫商务花园D3栋5楼</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
import '@pages/contact-us.css';

export default {
    name: 'about-us',
    mounted() {

    },
    data() {
        return {

        }
    },
};

</script>
<style type="text/css">


</style>
