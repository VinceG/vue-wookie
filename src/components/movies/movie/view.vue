<template>
  <div class="row">
    <backdrop :backdrop="backdrop" />
    <div class="col-12">
      <div class="container bg-light p-2 mt-4">
        <div class="row">
          <div class="col-12 col-sm-4 col-md-3 col-xl-3">
            <div class="text-center">
              <img
                :src="image"
                class="img-fluid img-thumbnail rounded"
                :title="title"
                :alt="title"
              />
            </div>
          </div>
          <div class="col-12 col-sm-8 col-md-9 col-xl-9">
            <div class="d-flex flex-sm-row flex-column">
              <div>
                <h2>
                  {{ title }} <small>({{ classification }})</small>
                </h2>
              </div>
              <div class="ml-md-auto">
                <rating :rating="rating" />
              </div>
            </div>

            <div class="mt-2 mt-md-0">
              <h6>{{ year }}</h6>
            </div>

            <div>
              <p>{{ overview }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <similar :movie="movie" />
    </div>
  </div>
</template>

<script>
import Rating from "./rating";
import Backdrop from "./backdrop";
import Similar from "./similar";
export default {
  components: {
    Rating,
    Similar,
    Backdrop
  },
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  computed: {
    image() {
      return this.movie.poster;
    },
    title() {
      return this.movie.title;
    },
    rating() {
      return this.movie.imdb_rating;
    },
    classification() {
      return this.movie.classification;
    },
    overview() {
      return this.movie.overview;
    },
    backdrop() {
      return this.movie.backdrop;
    },
    year() {
      return new Date(this.movie.released_on).getFullYear();
    }
  }
};
</script>

<style scoped lang="scss">
@media (max-width: 575.98px) {
  h2 {
    font-size: 1.5rem;
  }
}
</style>
