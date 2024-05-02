<template>
  <client-only>
    <div class="layout">
      <BToastOrchestrator />
      <b-navbar
        toggleable="md"
        type="light"
        variant="light"
        class="mainNav sticky-top">
        <b-container fluid>
          <b-row class="justify-content-between align-items-center">
            <b-col>
              <b-navbar-brand href="/">
                <img src="/images/mainLogo.png" alt="Logo" height="30" />
              </b-navbar-brand>
            </b-col>
            <b-col cols="auto">
              <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            </b-col>
            <b-col cols="auto">
              <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                  <b-nav-item class="navItem" href="/talents"
                    >Talents</b-nav-item
                  >
                  <b-nav-item :href="`/scouts/${store.user.id}`">
                    {{ isLoggedIn ? 'Dashboard' : 'Scouts' }}
                  </b-nav-item>
                  <b-nav-item class="navItem" href="/#contact">
                    Contact us
                  </b-nav-item>
                  <b-nav-item v-if="!isLoggedIn" class="navItem" href="/login">
                    Login
                  </b-nav-item>
                  <b-row v-else>
                    <b-col>
                      <b-nav-item @click.prevent="logout"> Logout </b-nav-item>
                    </b-col>
                  </b-row>
                </b-navbar-nav>
              </b-collapse>
            </b-col>
          </b-row>
        </b-container>
      </b-navbar>
      <slot />
      <b-row class="footer d-flex align-items-center">
        <b-col cols="6">
          <p class="mb-0">
            property of The Trinity Corp since © {{ new Date().getFullYear() }}
          </p>
        </b-col>
      </b-row>
    </div>
  </client-only>
</template>
<style>
.mainNav {
  border-bottom: 1px solid #000066;
  background-color: #000066;
  width: 100%;
  height: auto;
  min-height: 4.5rem;
  padding: 0 5%;
  font-family: Montserrat, sans-serif;
}
a.nav-link {
  color: #000066;
  font-weight: thin;
}
.footer {
  width: 100vw;
  background-color: #000066;
  color: white;
  font-family: Montserrat, sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  height: 10vh;
}
.text-right {
  text-align: right;
}
.icon {
  color: #ff9950;
  font-size: 1.7rem;
  margin: 0 8px;
}
.icon:hover {
  color: #ffc;
}
.layout {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.footer {
  margin: 0;
  padding: 0;
  margin-top: auto;
}
</style>
<script setup>
import { useAuthStore } from '@/stores/auth'
const store = useAuthStore()
const router = useRouter()
const { show } = useToast()

const { isLoggedIn, user } = storeToRefs(store)

const logout = async () => {
  store.$reset()
  await router.push('/')

  show?.({
    props: {
      title: 'Logged out!',
      body: 'You have successfully logged out.',
      variant: 'success',
    },
  })
}

onMounted(() => {
  console.log(store.user.value)
})

// watch isLoggedIn value and update Login button
</script>
