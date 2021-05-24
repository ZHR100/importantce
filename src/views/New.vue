<template>
  <div>
    <button @click="prev" :style="{ pointerEvents: pointerEvents ? 'none' : '' }">上一张</button>
    <button @click="next" :style="{ pointerEvents: pointerEvents ? 'none' : '' }">下一张</button>
    <div class="wrap">
      <div
        v-show="isNext"
        class="box box1"
        :style="{ left: nextLeft[0] + 'px', transition: transition + 's' }"
      ></div>
      <div
        v-show="isNext"
        class="box box2"
        :style="{ left: nextLeft[1] + 'px', transition: transition + 's' }"
      ></div>
      <div
        v-show="!isNext"
        class="box box3"
        :style="{ left: prevLeft[0] + 'px', transition: transition + 's' }"
      ></div>
      <div
        v-show="!isNext"
        class="box box4"
        :style="{ left: prevLeft[1] + 'px', transition: transition + 's' }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nextLeft: [0, 600],
      prevLeft: [0, -600],
      transition: 1,
      isNext: true,
      pointerEvents: false
    };
  },
  methods: {
    next() {
      this.isNext = true;
      this.pointerEvents = true
      this.moveLeft();
      this.rightMove();
    },
    prev() {
      this.isNext = false;
      this.pointerEvents = true
      this.moveLeft();
      this.rightMove();
    },
    moveLeft() {
      this.transition = 1;
      setTimeout(() => {
        this.$set(this.nextLeft, 0, this.nextLeft[0] - 600);
        this.$set(this.nextLeft, 1, this.nextLeft[1] - 600);
      });

      setTimeout(() => {
        this.transition = 0;
        if (this.nextLeft[0] === -600) {
          this.$set(this.nextLeft, 0, 600);
        }
        if (this.nextLeft[1] === -600) {
          this.$set(this.nextLeft, 1, 600);
        }
        this.pointerEvents = false
      }, 1000);
    },
    rightMove() {
      this.transition = 1;
      setTimeout(() => {
        this.$set(this.prevLeft, 0, this.prevLeft[0] + 600);
        this.$set(this.prevLeft, 1, this.prevLeft[1] + 600);
      });

      setTimeout(() => {
        this.transition = 0;
        if (this.prevLeft[0] === 600) {
          this.$set(this.prevLeft, 0, -600);
        }
        if (this.prevLeft[1] === 600) {
          this.$set(this.prevLeft, 1, -600);
        }
        this.pointerEvents = false
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 600px;
  height: 100px;
  border: 4px solid red;
  margin: auto;
  position: relative;

  .box {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    transition: 1s;
  }
  .box1,
  .box3 {
    background: green;
  }
  .box2,
  .box4 {
    background: blue;
  }
}
</style>