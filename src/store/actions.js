export default {
    add(context, payload) {
        setTimeout(() => {
            context.commit('add', payload)
        })
    }
}