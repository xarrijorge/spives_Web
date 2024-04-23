<template>
  <b-container class="main">
    <b-row class="mt-4">
      <b-col>
        <b-row>
          <b-col>
            <button
              @click="activeTab = 'dashboard'"
              :class="{
                active: activeTab === 'dashboard',
                inactive: activeTab !== 'dashboard',
              }">
              <span> </span>
              Dashboard
            </button>
          </b-col>
          <b-col>
            <button
              @click="navigateToChallenges"
              :class="{
                active: activeTab === 'challenges',
                inactive: activeTab !== 'challenges',
              }">
              Challenges
            </button>
          </b-col>
          <b-col>
            <button
              @click="activeTab = 'talents'"
              :class="{
                active: activeTab === 'talents',
                inactive: activeTab !== 'talents',
              }">
              My Talents
            </button>
          </b-col>
        </b-row>
        <button
          v-if="activeTab === 'challenges'"
          @click="addAction"
          variant="primary"
          class="float-right">
          Add Challenge
        </button>
      </b-col>
    </b-row>
    <b-row class="mt-4 counters">
      <b-col>
        <NuxtLink :to="`/scouts/${id}/myscouts`">
          <b-card>
            <div class="stats-box">
              <FontAwesome :icon="['fas', 'earth-africa']" class="icon" />
              <div class="stats-text">
                <h1>{{ String(watchlistCount).padStart(2, 0) }}</h1>
                <p>My Watchlist</p>
              </div>
            </div>
          </b-card>
        </NuxtLink>
      </b-col>
      <b-col>
        <NuxtLink :to="`/scouts/${id}/myscouts`">
          <b-card>
            <div class="stats-box">
              <FontAwesome :icon="['fas', 'star-half-stroke']" class="icon" />
              <div class="stats-text">
                <h1>{{ String(favoritesCount).padStart(2, 0) }}</h1>
                <p>Build Talents</p>
              </div>
            </div>
          </b-card>
        </NuxtLink>
      </b-col>
    </b-row>
    <b-row class="mt-4 advert">
      <b-col>
        <b-card>
          <p>In-App Advertisement</p>
        </b-card>
      </b-col>
    </b-row>
    <b-row class="mt-4 scouts-tracker">
      <b-col>
        <b-card class="card">
          <p>Scouts Tracker</p>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const store = useAuthStore()
const { user, isLoggedIn } = storeToRefs(store)

const id = route.params.id
const watchlistCount = computed(() =>
  user.watchlist ? user.watchlist.length : 0
)
const favoritesCount = computed(() =>
  user.favorites ? user.favorites.length : 0
)
const activeTab = ref('dashboard')

const addAction = () => {
  if (activeTab.value === 'dashboard') {
    // Add talent logic
  } else if (activeTab.value === 'challenges') {
    // Add challenge logic
  }
}

const navigateToChallenges = () => {
  // Navigate to challenges page
  router.push(`/scouts/${id}/challenges`)
}
onBeforeMount(() => {
  if (!isLoggedIn.value) {
    router.push('/login')
  } else {
    router.push(`/scouts/${id}`)
  }
})
onMounted(() => {})
</script>
<style scoped>
.main {
  width: 50vw;
  color: #000066;
}
button {
  background-color: white;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
}
button.active {
  background-color: #ff6600;
  border: none;
  color: white;
}
button.inactive {
  border: 1px solid #000066;
  background-color: white;
}
.float-right {
  float: right;
}
.icon {
  font-size: 75px;
  color: #000066;
  pointer-events: none;
}
.stats-box {
  display: flex;
  align-items: center;
  justify-content: center;
}
.stats-text {
  margin-left: 10px;
  text-align: center;
}
.stats-text h1 {
  font-size: 45px;
  font-weight: bold;
}
.stats-text p {
  font-size: 12px;
}
.scouts-tracker .card {
  height: 250px;
}
.advert {
  text-align: center;
}
</style>
