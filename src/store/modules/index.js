export default {
    goods: {
        namespaced: true,
        state: {
            msg: 'xxxx'
        },
        getters: {
            total() {
                return 1000
            }
        },
        mutations: {
            add(state) {
                state.msg = 'sssssssssss'
            }
        },
        actions: {},
        modules: {}
    },
    user: {
        state: {}
    }
}