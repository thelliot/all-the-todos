<template>
  <div class="progress-bar">
    <div class="progress-bar__inner" :style="{ width: `${calcWidth}%` }"></div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    current: Number,
    max: Number,
  },
  computed: {
    calcWidth() {
      const minWidth = 100 / this.max
      return this.current * minWidth;
    }
  },
}
</script>

<style lang="scss">
$bar-height: 6px;
$border-radius: 3px;

.progress-bar {
  display: flex;
  height: $bar-height;
  width: 100%;
  background: rgba($bg-color, 0.25);
  border-radius: $border-radius;
  margin: $spacing 0;

  &__inner {
    background: $bg-color;
    height: $bar-height;
    transition: width 400ms ease-out;
    border-radius: $border-radius;
  }
}
</style>
