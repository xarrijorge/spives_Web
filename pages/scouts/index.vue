<template>
  <h1>Please Sign in to access this page</h1>
</template>

<script setup>
import { useMainStore } from '@/stores/main'
import { useRouter } from 'vue-router'

const store = useMainStore()
const router = useRouter()

const isLoggedIn = store.user.isLoggedIn

if (!isLoggedIn) {
  // Redirect to login page if user is not logged in
  router.push('/login')
} else {
  // Redirect to /scouts/:id if user is logged in
  router.push(`/scouts/${store.user.id}`)
}
</script>
