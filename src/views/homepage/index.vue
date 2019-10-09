<template>
  <div class="row">
    <genre v-for="row in genres" :key="row" :row="row" class="col-12" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Genre from "@/components/movies/genres/genre";
export default {
  components: {
    Genre
  },
  computed: {
    ...mapGetters("movies", ["genres"])
  }
};
</script>
