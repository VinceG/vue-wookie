<template>
  <div>
    <div>
      <carousel :per-page-custom="perPage" :pagination-enabled="false">
        <slide v-for="movie in movies" :key="movie.id" :movie="movie" />
      </carousel>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { Carousel } from "vue-carousel";
import Slide from "@/components/movies/movie/slide";
export default {
  components: {
    Slide,
    Carousel
  },
  props: {
    row: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapGetters("movies", ["findByGenre"]),
    movies() {
      return this.findByGenre(this.row);
    },
    perPage() {
      return [[520, 3], [768, 4], [1024, 4], [1200, 6], [1500, 8]];
    }
  }
};
</script>
