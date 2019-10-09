<template>
  <div id="app">
    <navigation />

    <main role="main" class="container-fluid">
      <router-view :key="$route.path" />
    </main>
  </div>
</template>

<script>
import Navigation from "@/components/theme/navigation/navigation";
export default {
  components: {
    Navigation
  }
};
</script>

<style lang="scss">
@import "scss/app.scss";
</style>
