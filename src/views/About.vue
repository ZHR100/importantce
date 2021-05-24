<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{ $store.state.msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ $store.state.userinfo.name }}</h1>
    <h1>{{ $store.state.count }}</h1>
    <button @click="add">+</button>
    <button @click="sub">-</button>

    <h1>{{ total }}</h1>
    <h1>{{ $store.getters.total }}</h1>
    <h1>{{ $store.getters.avgTotal }}</h1>

    <h1>{{ $store.state.goods.msg }}</h1>
     <h1>{{ $store.getters['goods/total'] }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  computed: {
    msg() {
      return this.$store.state.msg
    },
    total() {
      const students = this.$store.state.students
      return students.reduce((prev, item) => prev + item.score, 0)
    }
  },
  methods: {
    add() {
      // this.$store.state.count++ // 错误的写法，更改Vuex的store中的状态的唯一方法是提交 mutation
      this.$store.commit('add', { num: 100, name: 'xxx' })
      // this.$store.dispatch('add', { num: 100 })
      this.$store.commit('goods/add')
    },
    sub() {
      // this.$store.state.count-- // 错误的写法
      this.$store.commit('sub')
    }
  },
}
</script>
