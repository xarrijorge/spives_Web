<template>
  <b-container>
    <b-row class="mt-4">
      <b-col>
        <b-button-group>
          <b-button
            @click="activeTab = 'dashboard'"
            :variant="activeTab === 'dashboard' ? 'primary' : 'secondary'">
            Dashboard
          </b-button>
          <b-button
            @click="navigateToChallenges"
            :variant="activeTab === 'challenges' ? 'primary' : 'secondary'">
            Challenges
          </b-button>
          <b-button
            @click="activeTab = 'talents'"
            :variant="activeTab === 'talents' ? 'primary' : 'secondary'">
            Talents
          </b-button>
        </b-button-group>
        <b-button
          v-if="activeTab === 'dashboard'"
          @click="addAction"
          variant="primary"
          class="float-right">
          Add Talent
        </b-button>
        <b-button
          v-if="activeTab === 'challenges'"
          @click="addAction"
          variant="primary"
          class="float-right">
          Add Challenge
        </b-button>
      </b-col>
    </b-row>
    <b-row class="mt-4">
      <b-col>
        <NuxtLink :to="`/scouts/${id}/myscouts`">
          <b-card>
            <h1>{{ user.watchlist.length }}</h1>
            <p>My Scouts</p>
          </b-card>
        </NuxtLink>
      </b-col>
      <b-col>
        <b-card>
          <h1>{{ user.favorites.length }}</h1>
          <p>Build Talents</p>
        </b-card>
      </b-col>
    </b-row>
    <b-row class="mt-4">
      <b-col>
        <b-card>
          <h3>In-App Advertisement</h3>
        </b-card>
      </b-col>
    </b-row>
    <b-row class="mt-4">
      <b-col>
        <b-card>
          <h3>Scouts Tracker</h3>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup>
import { useMainStore } from '@/stores/main'
import { useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const store = useMainStore()
const { user } = storeToRefs(store)

const id = route.params.id
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
</script>
