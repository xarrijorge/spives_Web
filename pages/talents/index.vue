<template>
  <div class="talentsPage">
    <!-- Filter dropdowns -->
    <b-container fluid>
      <b-row class="mb-3" align-h="end">
        <b-col cols="2">
          <b-form-group label="Nationality" label-for="nationality-select">
            <b-form-select
              id="nationality-select"
              v-model="filters.nationality"
              :options="nationalityOptions"
              placeholder="Select nationality">
              <option value="">All</option>
            </b-form-select>
          </b-form-group>
        </b-col>
        <b-col cols="1">
          <b-form-group label="Age" label-for="age-select">
            <b-form-select
              id="age-select"
              v-model="filters.age"
              :options="ageOptions"
              placeholder="Select age">
              <option value="">All</option>
            </b-form-select>
          </b-form-group>
        </b-col>
        <b-col cols="1">
          <b-form-group label="Gender" label-for="gender-select">
            <b-form-select
              id="gender-select"
              v-model="filters.gender"
              :options="genderOptions"
              placeholder="Select gender">
              <option value="">All</option>
            </b-form-select>
          </b-form-group>
        </b-col>
        <b-col cols="2">
          <b-form-group label="Position" label-for="position-select">
            <b-form-select
              id="position-select"
              v-model="filters.position"
              :options="positionOptions"
              placeholder="Select position">
              <option value="">All</option>
            </b-form-select>
          </b-form-group>
        </b-col>
      </b-row>
    </b-container>

    <!-- Player cards -->
    <b-container fluid>
      <b-row :gutter="80">
        <b-col v-for="player in filteredPlayers" :key="player.id" cols="md-3">
          <!-- Use PlayerCard component -->
          <PlayerCard :player="player" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script setup>
import PlayerCard from '~/components/PlayerCard.vue'
import Players from '~/assets/Players'

const players = ref(Players)
const filters = ref({
  nationality: '',
  age: '',
  position: '',
  gender: '',
})

const filteredPlayers = ref(players.value)

const distinctValues = (key) => {
  return [...new Set(players.value.map((player) => player[key]))]
}

const nationalityOptions = distinctValues('nationality').map((value) => ({
  value,
  text: value,
}))
const ageOptions = distinctValues('age').map((value) => ({
  value,
  text: value,
}))
const genderOptions = distinctValues('gender').map((value) => ({
  value,
  text: value,
}))
const positionOptions = distinctValues('position').map((value) => ({
  value,
  text: value,
}))

const applyFilters = () => {
  // Trigger filteredPlayers update
  filteredPlayers.value = players.value.filter((player) => {
    const nationalityMatch =
      !filters.value.nationality ||
      player.nationality === filters.value.nationality
    const ageMatch = !filters.value.age || player.age === filters.value.age
    const positionMatch =
      !filters.value.position || player.position === filters.value.position
    const genderMatch =
      !filters.value.gender || player.gender === filters.value.gender
    return nationalityMatch && ageMatch && positionMatch && genderMatch
  })
}

// Watchers for each filter
watch(filters, applyFilters, { deep: true })
</script>

<style scoped>
.mb-3 {
  margin-bottom: 1rem;
}

.talentsPage {
  width: 90vw;
  margin: 100px auto;
}
</style>
