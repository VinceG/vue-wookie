<template>
  <div class="container">
    <div class="row">
      <div class="col-12 bg-light p-2 mt-4">
        <carousel :row="genre" />
      </div>
    </div>
  </div>
</template>

<script>
import { head } from "@/utils/lodash";
import Carousel from "@/components/movies/genres/carousel";
export default {
  components: {
    Carousel
  },
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  computed: {
    genre() {
      return head(this.movie.genres);
    }
  }
};
</script>
