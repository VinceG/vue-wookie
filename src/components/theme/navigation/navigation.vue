<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <router-link :to="{ name: 'homepage.index' }" class="navbar-brand">
      Wookie Movies
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarCollapse"
      aria-controls="navbarCollapse"
      aria-expanded="false"
      aria-label="Toggle navigation"
      @click="onToggle"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div
      class="collapse navbar-collapse"
      :class="{ show: visible }"
      id="navbarCollapse"
    >
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link :to="{ name: 'homepage.index' }" class="nav-link">
            Home <span class="sr-only">(current)</span>
          </router-link>
        </li>
      </ul>
      <search />
    </div>
  </nav>
</template>

<script>
import Search from "@/components/search/form";
export default {
  components: {
    Search
  },
  data: () => ({
    visible: false
  }),
  methods: {
    onToggle() {
      this.visible = !this.visible;
    }
  }
};
</script>
