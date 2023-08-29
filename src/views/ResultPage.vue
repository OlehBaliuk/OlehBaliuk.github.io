<template>
  <div class="result-page">
    <span class="result-page__title">Result</span>
    <span class="result-page__result">{{ result }}</span>
    <v-btn
      :href="result"
      target="_blank"
      class="result-page__button"
      depressed
      color="primary"
    >
      Open site
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class ResultPage extends Vue {
  mounted() {
    if (typeof this.$route.query.r === 'string') {
      this.result = this.$route.query.r
    }
  }

  result = ''
}
</script>

<style scoped lang="scss">
.result-page {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    margin-bottom: 50px;
    font-size: 32px;
    font-weight: 600;
  }

  &__result {
    font-weight: 600;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    &__title {
      font-size: 16px;
    }

    &__button {
      font-size: 12px;
    }
  }
}
</style>
