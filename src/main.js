import Vue from 'vue'
import App from './App.vue'
import router from './router' // 路径如果是一个文件夹，默认去找文件夹下的index.js

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')