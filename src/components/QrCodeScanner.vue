<template>
  <QrcodeStream @detect="handleDetect" @init="handleError" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { QrcodeStream } from 'vue-qrcode-reader'
import routePaths from '@/constants/routePaths'
import errorMessages from '@/constants/errorMessages'
import { DetectedCode } from '@/interfaces/DetectedCode'

@Component({
  components: {
    QrcodeStream
  }
})
export default class QrCodeScanner extends Vue {
  async handleError(promise: Promise<void>) {
    try {
      await promise
    } catch (err: any) {
      if (errorMessages[err.name]) {
        this.$emit('error', errorMessages[err.name])
      } else {
        this.$emit('error', err.message)
      }
    } finally {
      this.$emit('loading', false)
    }
  }

  async handleDetect(detectedCodes: DetectedCode) {
    try {
      const result = await detectedCodes
      this.$router.push({
        path: routePaths.result,
        query: {
          r: result.content
        }
      })
    } catch (err: any) {
      this.$emit('error', err.message)
    }
  }
}
</script>
