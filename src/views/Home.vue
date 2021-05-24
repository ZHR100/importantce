<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ul>
      <li v-for="item in list" :key="item.id">
        <router-link :to="'/playlist?id=' + item.id">{{ item.name }}</router-link> 
      </li>
    </ul>
  </div>
</template>

<script>
import { getPersonalized } from '../api/songs'
export default {
  name: 'Home',
  data() {
    return {
      list: []
    }
  },
  created() {
    getPersonalized().then(res => {
      console.log(res);
      this.list = res.data.result
    })
  }
}
</script>
