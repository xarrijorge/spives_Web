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
          <b-card class="watchlist">
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
          <b-card class="buildlist">
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
    <b-row class="mt-4 adverts">
      <b-col>
        <b-card>
          <h1>12</h1>
          <p>In-App Advertisement</p>
        </b-card>
      </b-col>
      <b-col>
        <b-card>
          <h1>2</h1>
          <p>In-App Advertisement</p>
        </b-card>
      </b-col>
      <b-col>
        <b-card>
          <h1>18</h1>
          <p>In-App Advertisement</p>
        </b-card>
      </b-col>
      <b-col>
        <b-card>
          <h1>05</h1>
          <p>In-App Advertisement</p>
        </b-card>
      </b-col>
    </b-row>
    <b-row class="mt-4 scouts-tracker">
      <b-col>
        <b-card class="card">
          <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

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

const chartData = computed(() => ({
  labels: ['January', 'February', 'March'],
  datasets: [
    {
      label: 'Number of Talents',
      backgroundColor: '#1F78B4',
      data: [40, 20, 12],
    },
    {
      label: 'Challenges Completed',
      backgroundColor: '#26D5C9',
      data: [60, 12, 19],
    },
  ],
}))
const chartOptions = computed(() => ({
  responsive: true,
  maintainAspectRatio: false,
  title: {
    display: true,
    text: 'Scouts Tracker',
  },
}))

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
  width: 70vw;
  color: #000066;
}
button {
  background-color: white;
  padding: 10px;
  width: 200px;
  height: 50px;
  cursor: pointer;
  border-radius: 10px;
  font-weight: bold;
}
button.active {
  background-color: #000066;
  border: none;
  color: white;
}
button.inactive {
  border: none;
  background-color: transparent;
}
.float-right {
  float: right;
}
.icon {
  font-size: 75px;
  color: #fff;
  pointer-events: none;
}
.stats-box {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
}
.watchlist {
  background-color: #00aa3e;
  border-radius: 20px;
  color: white;
  margin-bottom: 10px;
}
.buildlist {
  background-color: #2792ae;
  color: white;
  margin-bottom: 10px;
  border-radius: 20px;
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
  height: 40vh;
  margin-bottom: 50px;
}
.adverts {
  text-align: center;
  gap: 5px;
}
.adverts h1 {
  font-weight: bold;
}
</style>
