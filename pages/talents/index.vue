<template>
  <div class="talentsPage">
    <!-- Filter dropdowns -->
    <b-row class="filter-box">
      <b-col cols="12" md="4">
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
      <b-col cols="12" md="2">
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
      <b-col cols="12" md="2">
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
      <b-col cols="12" md="4">
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

    <!-- Player cards -->
    <div class="talents">
      <PlayerCard
        v-for="player in filteredPlayers"
        :key="player.id"
        cols="md-4"
        :player="player" />
      <!-- Use PlayerCard component -->
      <!-- <PlayerCard :player="player" /> -->
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from '@/stores/main'
import PlayerCard from '~/components/PlayerCard.vue'

const store = useMainStore()

const { players } = storeToRefs(store)
const filters = ref({
  nationality: '',
  age: '',
  position: '',
  gender: '',
})

const filteredPlayers = ref(players.value)

const distinctValues = (key) => {
  return [...new Set(players.value.flatMap((player) => player[key]))]
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
  text: Array.isArray(value) ? value[0] : value,
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
  margin: 50px auto;
  display: flex;
  flex-direction: column;
}
.filter-box {
  align-self: center;
  width: 50%;
  margin-bottom: 50px;
}
.talents {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 20px;
  justify-content: center;
  column-gap: 100px;
}
@media (max-width: 767px) {
  .talents {
    flex-direction: column;
    align-items: center;
  }
}
</style>
