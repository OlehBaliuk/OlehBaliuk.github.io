<template>
  <div class="header">
    <v-app-bar app color="primary">
      <v-toolbar-title>
        <router-link to="/" class="header__title">QR code scanner</router-link>
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        v-if="showLogoutButton"
        text
        color="white"
        class="header__button"
        @click="handleLogout"
      >
        Logout
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import getJwt from '@/utils/getJwt'
import routePaths from '@/constants/routePaths'

@Component
export default class Header extends Vue {
  get isNotLoginPage() {
    return this.$route.path !== routePaths.login
  }

  get showLogoutButton(): boolean {
    return this.isNotLoginPage && Boolean(getJwt())
  }

  handleLogout(): void {
    localStorage.removeItem('jwt')
    this.$router.push(routePaths.login)
  }
}
</script>

<style scoped lang="scss">
.header {
  &__title {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
  a {
    color: white;
    text-decoration: none;
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
