<template>
  <div class="loading-layer">
    <img
      class="loading-layer__spinner"
      src="../assets/spinner.png"
      alt="spinner"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class LoadingSpinner extends Vue {}
</script>

<style lang="scss">
@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}

.loading-layer {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  &__spinner {
    animation: spinner 0.75s linear infinite;
  }
}
</style>
