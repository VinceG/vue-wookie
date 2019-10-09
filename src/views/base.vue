<template>
  <wrapper>
    <loading v-if="loading" />
    <router-view :key="$route.path" />
  </wrapper>
</template>

<script>
import Wrapper from "@/layouts/main";
import { isEmpty } from "@/utils/lodash";
import { mapGetters, mapActions } from "vuex";
import Loading from "@/components/theme/loading/loading";
export default {
  components: {
    Wrapper,
    Loading
  },
  data: () => ({
    loading: false
  }),
  computed: {
    ...mapGetters("movies", ["rows"])
  },
  async created() {
    if (isEmpty(this.rows)) {
      this.loading = true;
      await this.all();
      this.loading = false;
    }
  },
  methods: {
    ...mapActions("movies", ["all"])
  }
};
</script>
