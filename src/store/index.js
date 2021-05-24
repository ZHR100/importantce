import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import modules from './modules'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        msg: '你好',
        userinfo: {
            name: '张三',
            age: 18
        },
        count: 0,
        students: [
            { name: '张三', score: 88 },
            { name: '李四', score: 89 },
            { name: '王五', score: 100 },
        ]
    },
    getters,
    mutations,
    actions,
    modules
})

export default store