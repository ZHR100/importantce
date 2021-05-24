import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from '../views/Header.vue'
import My from '../views/Header/My.vue'
import Friend from '../views/Header/Friend.vue'
import Find from '../views/Header/Find.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Header',
    component: Header,
    children: [{
            path: 'find',
            // component: Find
            name: 'Find',
            meta: {
                title: '发现音乐'
            },
            component: Find
        },
        {
            path: 'my',
            meta: {
                title: '我的音乐'
            },
            component: My
        },
        {
            path: 'friend',
            meta: {
                title: '朋友'
            },
            component: Friend
        },
    ],

}, ]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    // console.log('路由切换了');
    // console.log(to);
    // console.log(from);
    document.title = to.meta.title || '网易云'
        // if(to.path === '/') {
        //   next('/friend')
        // } else {
        //   next()
        // }
    next()
})

// router.afterEach((to, from) => {
//   // console.log('路由跳转完成');
// })

export default router