export default {
    total(state, getters) {
        return state.students.reduce((prev, item) => prev + item.score, 0)
    },
    avgTotal(state, getters) {
        return getters.total / state.students.length
    }
}