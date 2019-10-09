<template>
  <div class="mb-5">
    <h2>{{ title }}</h2>
    <carousel :row="row" />
  </div>
</template>

<script>
import Carousel from "./carousel";
export default {
  components: {
    Carousel
  },
  props: {
    row: {
      type: Number,
      required: true
    }
  },
  computed: {
    title() {
      return `Genre ${this.row}`;
    }
  }
};
</script>
