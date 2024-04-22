<template>
  <b-container class="login-container">
    <b-row class="justify-content-center">
      <b-col sm="12" md="6">
        <b-card title="Login">
          <b-form @submit.prevent="login">
            <b-form-group
              id="username"
              label="Username:"
              label-for="username-input"
              label-cols-sm="3"
              class="mb-3">
              <b-form-input
                id="username-input"
                v-model="username"
                required
                placeholder="Enter your username"></b-form-input>
            </b-form-group>

            <b-form-group
              id="password"
              label="Password:"
              label-for="password-input"
              label-cols-sm="3"
              class="mb-3">
              <b-form-input
                id="password-input"
                v-model="password"
                type="password"
                required
                placeholder="Enter your password"></b-form-input>
            </b-form-group>

            <b-form-group class="mb-3">
              <b-form-radio-group v-model="userType">
                <b-form-radio value="talent">Talent</b-form-radio>
                <b-form-radio value="scout">Scout</b-form-radio>
              </b-form-radio-group>
            </b-form-group>

            <b-button type="submit" variant="primary" class="mt-3"
              >Login</b-button
            >
          </b-form>

          <b-link @click="forgotPassword" class="text-muted">
            Forgot Password?
          </b-link>

          <b-row class="mt-2">
            <b-col>
              Don't have an account?
              <router-link to="/signup">Register Here</router-link>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const username = ref('')
const password = ref('')
const userType = ref('talent') // Default to Talent

const login = () => {
  // Your login logic here
  console.log('Username:', username.value)
  console.log('Password:', password.value)
  console.log('User Type:', userType.value)
}

const forgotPassword = () => {
  // Navigate to forgot password page or show modal
  console.log('Forgot Password?')
}
</script>

<style scoped>
.login-container {
  margin-top: 50px;
}
</style>
