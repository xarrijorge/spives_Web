<template>
  <div>
    <h1>{{ talent.name }}</h1>
    <div>
      <img :src="talent.image" alt="Talent Image" />
    </div>
    <div>
      <h2>Details</h2>
      <p><strong>Age:</strong> {{ talent.age }}</p>
      <p><strong>Position:</strong> {{ talent.position }}</p>
      <p><strong>Height:</strong> {{ talent.height || 'Unknown' }}</p>
      <p><strong>Weight:</strong> {{ talent.weight || 'Unknown' }}</p>
      <p><strong>Club:</strong> {{ talent.club }}</p>
      <p><strong>Guardian:</strong> {{ talent.guardian || 'Unknown' }}</p>
      <p><strong>Coach:</strong> {{ talent.coach }}</p>
      <p><strong>Foot:</strong> {{ talent.foot }}</p>
      <p><strong>Nickname:</strong> {{ talent.nickname }}</p>
    </div>
  </div>
</template>
<script setup>
import { useMainStore } from '@/stores/main'
const route = useRoute()
const store = useMainStore()

console.log(route.params.id)
const talent = store.getPlayerByID(route.params.id)[0]
console.log(talent)
</script>
