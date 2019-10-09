<template>
  <movie-view v-if="movie" :movie="movie" />
</template>

<script>
import MovieView from "@/components/movies/movie/view";
import { isEmpty, get } from "@/utils/lodash";
import { mapGetters } from "vuex";
export default {
  components: {
    MovieView
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  metaInfo() {
    return {
      title: this.title
    };
  },
  computed: {
    ...mapGetters("movies", ["findBySlug", "rows"]),
    movie() {
      return this.findBySlug(this.slug);
    },
    title() {
      return get(this.movie, "title");
    }
  },
  watch: {
    rows() {
      if (!isEmpty(this.rows) && isEmpty(this.movie)) {
        this.$router.push({ name: "404" });
      }
    }
  }
};
</script>
