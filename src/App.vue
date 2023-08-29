<template>
  <v-app class="app">
    <Header />
    <v-main class="d-flex justify-center">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from '@/components/Header.vue'

@Component({
  components: {
    Header
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
.v-main__wrap {
  display: flex;
  justify-content: center;
  min-width: 300px;
  padding-top: 30px;
}
</style>
