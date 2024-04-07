<template>
  <b-card class="playerCard" bg-variant="orange">
    <div class="cardUpper">
      <b-row>
        <b-col cols="12">
          <!-- Player Image -->
          <b-img
            :src="`/images/${player.image}`"
            fluid
            alt="Player Image"
            class="playerImage" />
        </b-col>
      </b-row>
      <b-row class="playerStats">
        <!-- Percentage stat of shooting, speed, Passing, and dribbling -->
        <b-col cols="3">
          <p>Shooting: {{ player.stats.shooting }}%</p>
        </b-col>
        <b-col cols="3">
          <p>Speed: {{ player.stats.speed }}%</p>
        </b-col>
        <b-col cols="3">
          <p>Passing: {{ player.stats.passing }}%</p>
        </b-col>
        <b-col cols="3">
          <p>Dribbling: {{ player.stats.dribbling }}%</p>
        </b-col>
      </b-row>
      <b-row class="overallStats" bg-variant="orange">
        <!-- Overall stat progress bar and football field map icon -->
        <b-col cols="12">
          <circle-progress :percent="70" />
          <img
            src="/images/fieldSVG.png"
            alt="Football Field"
            class="footballIcon"
            width="80px" />
        </b-col>
      </b-row>
    </div>
    <b-row class="playerDetails">
      <!-- Vertical list of player details -->
      <b-col cols="12">
        <ul style="list-style-type: none">
          <li>
            <h3>{{ player.name }}</h3>
          </li>
          <li><b>Age:</b> {{ player.age }}</li>
          <li><b>Position:</b> {{ player.position }}</li>
          <li><b>Power Foot:</b> {{ player.powerFoot }}</li>
          <li><b>Weight:</b> {{ player.weight }}</li>
          <li><b>Height:</b> {{ player.height }}</li>
        </ul>
      </b-col>
    </b-row>
  </b-card>
</template>

<script setup>
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
}

.playerImage {
  border-radius: 10px 10px 0 0;
  max-width: 100%;
}

.playerStats {
  display: flex;
  font-size: 14px;
  height: auto;
  background-color: white;
}
.overallStats {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  height: 60px;
}

.playerDetails {
  padding: 10px;
  background-image: url('/images/croppedBG.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top 95px left 170px;
}
.cardUpper {
  background-color: #ff9950;
  border-radius: 20px;
}
</style>
