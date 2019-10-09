<template>
  <div class="backdrop">
    <header>
      <div class="animation">
        <picture :content="backdrop">
          <source :srcset="set" sizes="100vw" />
          <img alt="" />
        </picture>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  props: {
    backdrop: {
      required: true,
      type: String
    }
  },
  computed: {
    set: function() {
      return this.backdrop + " 50w";
    }
  }
};
</script>

<style lang="scss" scoped>
.backdrop {
  header {
    height: 100vh;
    max-height: inherit;
    min-height: 600px;
    overflow: hidden;
    position: absolute;
    width: 100%;

    .animation {
      animation-delay: 0.4s;
    }

    img {
      transform: translate(-50%, -3%);
      filter: blur(10px) brightness(0.9);
      display: inline-block;
      width: 200%;
      position: relative;
      top: 50%;
      left: 50%;
    }
  }
}
</style>
