<template>
  <ClientOnly>
    <NuxtLink :to="`/talents/${player.id}`">
      <b-card class="player-card" bg-variant="orange">
        <div class="player-image-container">
          <b-col sm="12">
            <b-img
              :src="`/images/${player.image}`"
              fluid
              alt="Player Image"
              class="player-image" />
            <div class="country-flag">
              <!-- Country Flag Image -->
            </div>
          </b-col>
        </div>
        <div class="player-stats">
          <div class="stat-box">
            <img class="stat-icon" src="/images/sprinting.png" />
            <span>??%</span>
          </div>
          <div class="stat-box">
            <img class="stat-icon" src="/images/passing.png" />
            <span>??%</span>
          </div>
          <div class="stat-box">
            <img class="stat-icon" src="/images/shooting.png" />
            <span>??%</span>
          </div>
          <div class="stat-box">
            <img class="stat-icon" src="/images/crossing.png" />
            <span>??%</span>
          </div>
        </div>
        <div class="player-info">
          <h3 class="player-name">{{ player.name }}</h3>
          <p class="player-detail">
            <span class="detail-label">Age:</span> {{ player.age }}
          </p>
          <p class="player-detail">
            <span class="detail-label">Position:</span> {{ player.position[1] }}
          </p>
          <p class="player-detail">
            <span class="detail-label">Power Foot:</span> {{ player.powerFoot }}
          </p>
          <p class="player-detail">
            <span class="detail-label">Weight:</span> {{ player.weight }}
          </p>
          <p class="player-detail">
            <span class="detail-label">Height:</span> {{ player.height }}
          </p>
        </div>
        <div class="overall-stats">
          <div class="overall-progress">
            <circle-progress
              :percent="player.stats.overall"
              fill-color="skyblue"
              empty-color="blue"
              :size="80"
              :border-width="12"
              :border-bg-width="12" />
            <div class="overall-label">OVERALL</div>
          </div>
          <div class="field-diagram">
            <img
              :src="`/images/${player.position[0]}_spivesPITCH.png`"
              alt="Football Field"
              class="football-icon" />
          </div>
        </div>
      </b-card>
    </NuxtLink>
  </ClientOnly>
</template>

<script setup>
import 'vue3-circle-progress/dist/circle-progress.css'
import CircleProgress from 'vue3-circle-progress'

const props = defineProps({
  player: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.player-card {
  margin-bottom: 20px;
  padding: 0;
  width: 100%;
  position: relative;
}

.player-image-container {
  position: relative;
}

.player-image {
  border-radius: 10px 10px 0 0;
  max-width: 100%;
}

.country-flag {
  position: absolute;
  top: 10px;
  left: 10px;
  /* Add styles for the country flag image */
}

.player-stats {
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
}

.stat-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
}

.stat-icon {
  height: 50px;
}

.player-info {
  text-align: center;
  margin-top: 10px;
}

.player-name {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.player-detail {
  margin-bottom: 0.25rem;
}

.detail-label {
  font-weight: bold;
}

.overall-stats {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.overall-progress {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.overall-label {
  font-weight: bold;
  margin-top: 0.5rem;
}

.field-diagram {
  display: flex;
  align-items: center;
}

.football-icon {
  height: 60px;
}
</style>
