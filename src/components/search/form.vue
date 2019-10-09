<template>
  <div class="mx-2 d-inline w-50">
    <form @submit.prevent v-on-clickaway="onClickAway">
      <input
        v-model="term"
        class="form-control mr-sm-2"
        type="search"
        placeholder="Search..."
        aria-label="Search"
      />
      <div
        class="dropdown-menu w-50"
        :class="{ show: hasTerm }"
        style="right:0;left:auto;"
      >
        <div v-if="loading" class="dropdown-header">
          <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
        <h6 v-else class="dropdown-header">Found {{ total }} Results</h6>
        <movie-result
          v-for="row in results"
          :key="row.id"
          :movie="row"
          @click="onClick"
        />
      </div>
    </form>
  </div>
</template>

<script>
import MovieResult from "./result";
import { mixin as clickaway } from "vue-clickaway";
import { isEmpty, debounce, size } from "@/utils/lodash";
export default {
  inject: ["searchRepository"],
  mixins: [clickaway],
  components: {
    MovieResult
  },
  data: () => ({
    results: [],
    loading: false,
    term: null
  }),
  computed: {
    hasTerm() {
      return !isEmpty(this.term);
    },
    total() {
      return size(this.results);
    }
  },
  watch: {
    term: debounce(function() {
      if (this.hasTerm) {
        this.search();
      }
    }, 250)
  },
  methods: {
    search() {
      this.loading = true;
      this.searchRepository
        .search(this.term)
        .then(({ data }) => (this.results = data.movies))
        .catch(() => {})
        .then(() => (this.loading = false));
    },
    onClick() {
      this.reset();
    },
    onClickAway() {
      this.reset();
    },
    reset() {
      this.term = null;
      this.results = [];
    }
  }
};
</script>

<style lang="scss" scoped>
@media (max-width: 575.98px) {
  .dropdown-menu {
    width: 100% !important;
  }
}
</style>
