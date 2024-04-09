<template>
  <b-container class="section-container">
    <h1>{{ player.name }}</h1>
    <b-row>
      <b-col>
        <b-img :src="player.image" />
      </b-col>
      <b-col>
        <b-row cols="sm-12">
          <b-col>
            <b-row class="nationalityBox">
              <b-col>
                <b-img :src="`/images/flags/${playerFlag}.png`"></b-img>
              </b-col>
              <b-col>
                <h5>{{ player.nationality }}</h5>
              </b-col>
            </b-row>
            <b-row>
              <h5>{{ player.age }}</h5>
            </b-row>
            <b-row>
              <h5>{{ player.position[1] }}</h5>
            </b-row>
            <h5></h5>
            <h5></h5>
          </b-col>
          <b-col></b-col>
        </b-row>
      </b-col>
      <b-col>
        <h5>Shooting: {{ player.stats.shooting }}</h5>
        <h5>Crossing: {{ player.stats.shooting }}</h5>
        <h5>Sprinting: {{ player.stats.shooting }}</h5>
        <h5>Passing: {{ player.stats.shooting }}</h5>
      </b-col>
    </b-row>
    <b-row class="justify-content-center">
      <b-col cols="md-7">
        <img
          :src="`/images/${player.position[0]}_spivesPITCH.png`"
          alt="Football Field"
          class="footballIcon" />
      </b-col>
    </b-row>
  </b-container>
</template>
<script setup>
import { useMainStore } from '@/stores/main'

const route = useRoute()
const store = useMainStore()

const player = ref()

const playerFlag = computed(() => {
  switch (player.value.nationality) {
    case 'Liberian':
      return 'lr'
    case 'Nigerian':
      return 'ng'
    case 'Ghanian':
      return 'gh'
    default:
      return 'gh'
  }
})
player.value = store.getPlayer(Number(route.params.id))[0]
onMounted(() => {})
</script>

<style>
img {
  max-width: 80%;
}
.nationalityBox {
}
</style>
