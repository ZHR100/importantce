require('./public/js/c.js')

require('./public/css/index.css')

const name = '张三'
const person = {
    name,
    run() {

    }
}
const aaa = () => {}

import Vue from 'vue'
// const App = {
//     template: '<h1>{{ msg }}</h1>',
//     data() {
//         return {
//             msg: '你好'
//         }
//     }
// }
// import App from './vue/App.js'
import App from './vue/App.vue'

new Vue({
    el: '#app',
    template: '<App></App>',
    components: {
        App
    }
})