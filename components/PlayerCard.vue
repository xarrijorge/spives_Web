<template>
  <NuxtLink :to="`/talents/${player.id}`">
    <div class="player-card">
      <div
        class="image-card"
        bg-variant="orange"
        :style="{ 'background-image': `url(${player.image})` }">
        <img :src="`/images/flags/${nationality}.png`" class="flag" />
        <div class="graphics"></div>
      </div>
      <div class="player-stats">
        <div class="stat-box">
          <img class="stat-icon" src="/images/sprinting.png" />
          <span>?? %</span>
        </div>
        <div class="stat-box">
          <img class="stat-icon" src="/images/passing.png" />
          <span>?? %</span>
        </div>
        <div class="stat-box">
          <img class="stat-icon" src="/images/shooting.png" />
          <span>?? %</span>
        </div>
        <div class="stat-box">
          <img class="stat-icon" src="/images/crossing.png" />
          <span>?? %</span>
        </div>
      </div>
      <div class="details">
        <div>
          <h3 class="player-name">{{ player.nickname }}</h3>
          <h5>
            Age: <span>{{ player.age || '??' }}</span>
          </h5>
          <h5>
            Position: <span>{{ player.position[0] || '??' }}</span>
          </h5>
          <h5>
            Weight: <span>{{ player.weight || '??' }}</span>
          </h5>
          <h5>
            Height: <span>{{ player.height || '??' }}</span>
          </h5>
          <h5>
            Power Foot: <span>{{ player.foot || '??' }}</span>
          </h5>
          <h5>
            Appearances: <span>{{ player.appreances || '??' }}</span>
          </h5>
        </div>
        <img :src="playerPositionImage" class="pitch" />
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
import 'vue3-circle-progress/dist/circle-progress.css'

const props = defineProps({
  player: {
    type: Object,
    required: true,
  },
})

const nationality = computed(() => {
  switch (props.player.nationality) {
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
const playerPositionImage = computed(
  () => `/images/${props.player.position[0]}_spivesPITCH.png`
)
</script>

<style scoped>
.player-card {
  height: 65vh;
  width: 300px;
  border: 5px solid #000066;
  background-color: #fff;
  color: #000066;
  padding: 2% 4%;
  border-radius: 50px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.image-card {
  min-height: 300px;
  height: 70%;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  position: relative;
}
.player-stats {
  position: absolute;
  width: 350px;
  height: 70px;
  background-color: #fff;
  border-radius: 20px;
  bottom: 40%;
  margin: 0 auto;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* .player-stats {
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
} */

.stat-box {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 2px;
}
.stat-box span {
  align-self: flex-start;
}

.stat-icon {
  height: 50px;
}
.flag {
  height: 30px;
  margin-right: auto;
  position: absolute;
  top: 20px;
  left: 30px;
}
a {
  text-decoration: none;
  color: inherit;
}
.stats-box .stat-icon {
  max-width: 100%;
  position: relative;
}
.details {
  display: flex;
  align-items: center;
  padding-left: 10px;
}
.details * {
  font-size: 0.8vw;
}
.details .player-name {
  font-size: 1.3em;
  font-weight: 700;
  margin: 5px 0;
}
.details span {
  color: #ff9956;
}
.details h5 {
  line-height: 1.5;
}
.pitch {
  transform: rotate(-90deg);
  max-width: 45%;
  margin-left: auto;
}
@media (max-width: 720px) {
  .player-card {
    margin-bottom: 10px;
  }
  .details * {
    font-size: 0.8rem;
  }
}
</style>
