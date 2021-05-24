export default {
    add(state, payload) {
        // setTimeout(() => {
            state.count += payload.num
        // })
    },
    sub(state) {
        state.count--
    }
}