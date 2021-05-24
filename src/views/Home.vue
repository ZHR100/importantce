<template>
  <div class="home">
    <h1>{{ $store.state.msg }}</h1>
    <h1>{{ $store.state.count }}</h1>
    <h1>{{ $store.getters.total }}</h1>

    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
