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
import { useAuthStore } from '@/stores/auth'
import { ref } from 'vue'

const store = useAuthStore()
const { user, token, isLoggedIn } = storeToRefs(store)

const router = useRouter()
const { show } = useToast()

const username = ref('')
const password = ref('')
const userType = ref('talent') // Default to Talent

const login = async () => {
  const data = await useAPIFetch('/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      email: username.value,
      password: password.value,
    },
  })
  if (data) {
    token.value = data.access_token
    isLoggedIn.value = true
    user.value = data.user

    isLoggedIn.value = true
    router.push(`/scouts/${user.value.id}`)
    // router.push('/')
    show?.({
      props: {
        title: 'Logged In!',
        body: 'You have successfully logged in.',
        variant: 'success',
      },
    })
  }
  console.log(user.value, token.value, isLoggedIn.value)
}

const forgotPassword = () => {
  // Navigate to forgot password page or show modal
  console.log('Forgot Password?')
}
onMounted(() => {
  console.log('loggedin', isLoggedIn.value)
})
</script>

<style scoped>
.login-container {
  margin-top: 50px;
}
</style>
