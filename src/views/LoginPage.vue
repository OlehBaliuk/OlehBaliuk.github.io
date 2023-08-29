<template>
  <div class="login-page">
    <span class="login-page__title">Login</span>

    <v-card flat>
      <v-form ref="form" @submit.prevent="submit">
        <v-container fluid>
          <v-row>
            <v-col>
              <v-text-field
                v-model="credentials.login"
                label="Login"
                required
              />
              <v-text-field
                v-model="credentials.password"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                label="Password"
                class="input-group--focused"
                required
                @click:append="showPassword = !showPassword"
              />
              <div class="d-flex justify-space-between align-center">
                <v-btn type="reset" @click="resetForm">Cancel</v-btn>
                <v-btn
                  :disabled="!formIsValid"
                  data-test="submit"
                  color="primary"
                  type="submit"
                >
                  Login
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Credentials } from '@/interfaces/Credentials'

@Component
export default class LoginPage extends Vue {
  $refs!: {
    form: HTMLFormElement
  }

  credentials: Credentials = { login: '', password: '' }

  showPassword = false

  get formIsValid(): boolean {
    return Boolean(this.credentials.login) && Boolean(this.credentials.password)
  }

  resetForm(): void {
    this.$refs.form.reset()
  }

  submit(): void {
    localStorage.setItem(
      'jwt',
      btoa(`${this.credentials.login}:${this.credentials.password}`)
    )
    this.$router.push('/')
  }
}
</script>

<style scoped lang="scss">
.login-page {
  margin-top: 150px;
  min-width: 300px;

  &__title {
    font-size: 32px;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    margin-top: 80px;

    &__title {
      font-size: 20px;
    }
  }
}
</style>
