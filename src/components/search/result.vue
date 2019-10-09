<template>
  <div>
    <div class="d-flex justify-content-start">
      <img
        :src="movie.poster"
        style="max-width: 50px;"
        class="img-fluid img-thumbnail rounded"
        :title="movie.title"
        :alt="movie.title"
      />
      <router-link
        class="dropdown-item"
        :to="{ name: 'movie.view', params: { slug: movie.slug } }"
        @click.native="onClick"
      >
        {{ movie.title }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  methods: {
    onClick() {
      this.$emit("click");
    }
  }
};
</script>
