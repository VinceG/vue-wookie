<template>
  <slide class="mr-2">
    <router-link :to="{ name: 'movie.view', params: { slug: slug } }">
      <img
        :src="image"
        class="img-fluid img-thumbnail rounded"
        :title="title"
        :alt="title"
      />
    </router-link>
  </slide>
</template>

<script>
import { Slide } from "vue-carousel";
export default {
  components: {
    Slide
  },
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  computed: {
    title() {
      return this.movie.title;
    },
    slug() {
      return this.movie.slug;
    },
    image() {
      return this.movie.poster;
    }
  }
};
</script>

<style scoped>
img {
  max-height: 40vh;
}
</style>
