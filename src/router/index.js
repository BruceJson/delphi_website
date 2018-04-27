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
    }]
})
