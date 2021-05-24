<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>字</p>
    <p>字</p>
    <p>字</p>
    <p>字</p>
    <p>字</p>
    <p>字</p>
    <p>字</p>
    <p>字</p>
    <p>字</p>
    <p>字</p>
    <p>字</p>
    <p>字</p>
    <p>字</p>
    <p>字</p>
    <p>字</p>
    <p>字</p>
    <p>字</p>
    <p>字</p>
    <p>字</p>
    <p>字</p>
    <p>字</p>
    <p>字</p>
    <p>字</p>
    <p>字</p>
    <p>字</p>
    <p>字</p>
    <p>字</p>
    <p>字</p>
    <p>字</p>
    <p>字</p>
    <p>字</p>
    <p>字</p>
    <p>字</p>
    <p>字</p>
    <p>字</p>
    <p>字</p>
    <p>字</p>
    <p>字</p>
    <p>字</p>
  </div>
</template>

<script>
import { getBanner } from '../api/songs'
export default {
  mounted() {
    document.body.onscroll = function() {
      console.log(1111);
    }
  },
  created() {
    getBanner(1).then(res => {
      console.log(res);
    })
  },
}
</script>
