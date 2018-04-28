import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        name: 'home',
        component: () =>
            import ('@/views/home/home')
    }, {
        path: '/aboutus',
        name: 'aboutus',
        component: () =>
            import ('@/views/aboutus/about-us')
    }, {
        path: '/contactus',
        name: 'contactus',
        component: () =>
            import ('@/views/contactus/contact-us')
    }, {
        path: '/saas',
        name: 'saas',
        component: () =>
            import ('@/views/products/saas')
    }, {
        path: '/xunpin',
        name: 'xunpin',
        component: () =>
            import ('@/views/products/xunpin')
    }, {
        path: '/talenttraining',
        name: 'talenttraining',
        component: () =>
            import ('@/views/products/talent-training')
    }, {
        path: '/xianyutest',
        name: 'xianyutest',
        component: () =>
            import ('@/views/products/xianyu-test')
    }]
})
