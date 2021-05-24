<template>
  <div>
    <div>
      <button>上一张</button>
      <button @click="next">下一张</button>
      <ul>
        <li
          v-for="(item, index) in banners"
          :key="item"
          :class="[active === index ? 'active' : '']"
        >
          <img :src="item" alt="" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0, // 当前显示第几张图片
      banners: [
        "http://p1.music.126.net/zqPZffOnO5gAjDYeflyteg==/109951165969621019.jpg",
        "http://p1.music.126.net/2xV28-FfYjc6smJ22I90hQ==/109951165969618642.jpg?imageView&quality=89",
        "http://p1.music.126.net/UxgTbKY8WUmdQL8uKk-9vg==/109951165969621108.jpg?imageView&quality=89",
        "http://p1.music.126.net/X3BfvG5fC3P0-hUE4Ro9rw==/109951165969613924.jpg?imageView&quality=89",
      ],
    };
  },
  methods: {
    next() {
      this.active++;
      if (this.active === this.banners.length) {
        this.active = 0;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  position: relative;
}
li {
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  transition: 1s;
}
.active {
  opacity: 1;
}
</style>