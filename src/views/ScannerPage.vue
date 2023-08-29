<template>
  <div class="scanner-page">
    <LoadingSpinner v-if="loading" />
    <div v-else>
      <span v-if="error" class="scanner-page__error">{{ error }}</span>
      <span v-else class="scanner-page__title">Scan code</span>
    </div>
    <QrCodeScanner @loading="handleLogin" @error="handleError" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import QrCodeScanner from '@/components/QrCodeScanner.vue'

@Component({
  components: {
    QrCodeScanner
  }
})
export default class ScannerPage extends Vue {
  error = ''
  loading = true

  handleError(error: string): void {
    this.error = error
  }

  handleLogin(value: boolean): void {
    this.loading = value
  }
}
</script>

<style scoped lang="scss">
.scanner-page {
  position: relative;
  height: 500px;

  &__title {
    font-size: 32px;
    font-weight: 600;
  }

  &__error {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: red;
  }

  &__title {
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    height: 300px;

    &__error,
    &__title {
      font-size: 16px;
    }
  }

  @media (max-width: 410px) {
    height: 250px;
  }
}
</style>
