<template>
  <div>
    <h1>Hello {{ store.user.name }}</h1>
    <b-row>
      <b-col>
        <h3>You are currently watching {{ playerData.length }} talents</h3>
      </b-col>
      <b-col>
        <b-button @click="toggleView" variant="primary">
          {{ listView ? 'Switch to Card View' : 'Switch to List View' }}
        </b-button>
      </b-col>
    </b-row>

    <!-- Display talents based on the current view -->
    <template v-if="listView">
      <TalentTable :playerData="playerData" />
    </template>
    <template v-else>
      <b-row>
        <b-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="player in playerData"
          :key="player.id"
          class="mb-3">
          <PlayerCard :player="player" />
        </b-col>
      </b-row>
    </template>
  </div>
</template>

<script setup>
import { useMainStore } from '@/stores/main'
import PlayerCard from '@/components/PlayerCard.vue'
import TalentTable from '@/components/TalentTable.vue'

const store = useMainStore()
const playerData = ref([])
const listView = ref(true) // Boolean flag for toggling between list view and card view

const getPlayerDataFromWatchlist = (watchlist) => {
  watchlist.forEach((playerId) => {
    const player = store.getPlayerByID(playerId)
    if (player) {
      playerData.value.push(player[0])
    }
  })
}

const toggleView = () => {
  listView.value = !listView.value
}

onMounted(async () => {
  await getPlayerDataFromWatchlist(store.user.watchlist)
})
</script>
