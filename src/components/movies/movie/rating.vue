<template>
  <div>
    <div class="star-rating">
      <div class="back-stars">
        <i
          v-for="star in stars"
          :key="star"
          class="fa fa-star"
          aria-hidden="true"
          :title="rating"
        ></i>

        <div class="front-stars" :style="{ width: `${percent}%` }">
          <i
            v-for="star in stars"
            :key="star"
            class="fa fa-star"
            aria-hidden="true"
            :title="rating"
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rating: {
      type: [String, Number],
      required: true
    }
  },
  computed: {
    percent() {
      return Math.round(this.rating * 10, 2);
    },
    stars() {
      return [...Array(10)];
    }
  }
};
</script>

<style lang="scss" scoped>
%flex-display {
  display: flex;
}
.star-rating {
  @extend %flex-display;
  align-items: center;
  font-size: 1em;
  justify-content: center;
}
.back-stars {
  @extend %flex-display;
  color: #afafaf;
  position: relative;
}
.front-stars {
  @extend %flex-display;
  color: #ffbc0b;
  overflow: hidden;
  position: absolute;
  top: 0;
  transition: all 0.5s;
}
</style>
