<template>
  <b-card class="playerCard" bg-variant="orange">
    <div class="cardUpper">
      <b-col cols="12">
        <!-- Player Image -->
        <b-img
          :src="`/images/${player.image}`"
          fluid
          alt="Player Image"
          class="playerImage" />
      </b-col>
      <!-- Percentage stat of shooting, speed, Passing, and dribbling -->
      <div class="playerStats">
        <div class="statBox">
          <img class="statIcon" src="/images/shooting.png" />
          <span>{{ player.stats.shooting }}%</span>
        </div>
        <div class="statBox">
          <img class="statIcon" src="/images/shooting.png" />
          <span>{{ player.stats.shooting }}%</span>
        </div>
        <div class="statBox">
          <img class="statIcon" src="/images/shooting.png" />
          <span>{{ player.stats.shooting }}%</span>
        </div>
        <div class="statBox">
          <img class="statIcon" src="/images/shooting.png" />
          <span>{{ player.stats.shooting }}%</span>
        </div>
      </div>
      <div class="overallStats">
        <!-- Overall stat progress bar and football field map icon -->
        <div class="percentBox">
          <circle-progress
            percent="30"
            fill-color="skyblue"
            empty-color="blue"
            size="80"
            :border-width="12"
            :border-bg-width="12" />
          <div>
            <p>Overall</p>
            <h4>70%</h4>
          </div>
        </div>
        <img
          :src="`/images/${player.position[0]}_spivesPITCH.png`"
          alt="Football Field"
          class="footballIcon" />
      </div>
    </div>
    <b-row class="playerDetails">
      <!-- Vertical list of player details -->
      <b-col cols="12">
        <ul style="list-style-type: none; margin: 0; padding: 0">
          <li>
            <h3>{{ player.name }}</h3>
          </li>
          <li><b>Age:</b> {{ player.age }}</li>
          <li><b>Position:</b> {{ player.position[1] }}</li>
          <li><b>Power Foot:</b> {{ player.powerFoot }}</li>
          <li><b>Weight:</b> {{ player.weight }}</li>
          <li><b>Height:</b> {{ player.height }}</li>
        </ul>
      </b-col>
    </b-row>
  </b-card>
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
.playerCard {
  margin-bottom: 20px;
  padding: 0;
  position: relative;
  width: 350px;
}

.playerImage {
  border-radius: 10px 10px 0 0;
  max-width: 100%;
}

.playerStats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 125%;
  background-color: #fff;
  border-radius: 10px;
  position: relative;
  /* right: 25px; */
  bottom: 100px;
}
.overallStats {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  font-size: 14px;
  margin-top: -70px;
}

.playerDetails {
  background-image: url('/images/croppedBG.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top 95px left 170px;
}
.cardUpper {
  background-color: #ff9950;
  border-radius: 20px;
  /* position: relative; */
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
}
.statBox {
  display: flex;
  flex-direction: row;
  height: max-content;
  padding: 0 5px;
}
.statIcon {
  height: 50px;
}
.footballIcon {
  height: 60px;
}
.percentBox {
  display: flex;
}
</style>
