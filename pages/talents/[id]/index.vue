<template>
  <main>
    <div class="top">
      <div>
        <div class="flag-row">
          <b-img :src="`/images/flags/${playerFlag}.png`"></b-img>
          <h1>{{ player.nickname }}</h1>
        </div>
        <div class="playerImage-row">
          <b-img :src="player.image" class="player-img"></b-img>
          <div class="details">
            <h5>
              Age: <span>{{ player.age || '??' }}</span>
            </h5>
            <h5>
              Position: <span>{{ player.position || '??' }}</span>
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
              Appearances: <span>{{ player.appearance || '??' }}</span>
            </h5>
          </div>
        </div>
        <div class="stats-row">
          <div class="player-stats">
            <b-col class="stat-box">
              <img class="stat-icon" src="/images/sprinting.png" />
              <span>?? %</span>
            </b-col>
            <b-col class="stat-box">
              <img class="stat-icon" src="/images/passing.png" />
              <span>?? %</span>
            </b-col>
            <b-col class="stat-box">
              <img class="stat-icon" src="/images/shooting.png" />
              <span>?? %</span>
            </b-col>
            <b-col class="stat-box">
              <img class="stat-icon" src="/images/crossing.png" />
              <span>?? %</span>
            </b-col>
          </div>
          <div class="position-box">
            <b-col class="position">{{ player.position }}</b-col>
          </div>
        </div>
      </div>
      <div class="gallery-box">
        <div>
          <a href="https://youtube.com/spives" target="_blank">
            <b-img src="/images/profile/galleryicon.png" class="gallery-icon" />
          </a>
          <span>gallery</span>
        </div>
        <b-img src="/images/profile/newpitch.png" class="pitch-icon" />
      </div>
    </div>
    <b-container class="bottom">
      <p class="bio">
        <span>Biography</span> Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Qui quaerat corporis recusandae sunt corrupti, iusto
        deserunt laboriosam sint! Culpa possimus voluptatem similique laudantium
        praesentium obcaecati odio iure, ab autem eos?
      </p>
      <div class="big-stats-box">
        <div class="big-stat">
          <img src="/images/profile/ballsPlayed.png" alt="" class="big-icon" />
          <div class="stat-text">
            <h5>Balls Played</h5>
            <h5>{{ player.passes || '??' }}</h5>
          </div>
        </div>
        <div class="big-stat">
          <img src="/images/profile/sprints.png" alt="" class="big-icon" />
          <div class="stat-text">
            <h5>Sprints</h5>
            <h5>{{ player.passes || '??' }}</h5>
          </div>
        </div>
        <div class="big-stat">
          <img src="/images/profile/kicks.png" alt="" class="big-icon" />
          <div class="stat-text">
            <h5>Kicks</h5>
            <h5>{{ player.passes || '??' }}</h5>
          </div>
        </div>
        <div class="big-stat">
          <img src="/images/profile/activity.png" alt="" class="big-icon" />
          <div class="stat-text">
            <h5>Activity</h5>
            <h5>{{ player.passes || '??' }}</h5>
          </div>
        </div>
        <div class="big-stat">
          <img src="/images/profile/distance.png" alt="" class="big-icon" />
          <div class="stat-text">
            <h5>Distance</h5>
            <h5>{{ player.passes || '??' }}</h5>
          </div>
        </div>
        <div class="big-stat">
          <img src="/images/profile/passes.png" alt="" class="big-icon" />
          <div class="stat-text">
            <h5>Passes</h5>
            <h5>{{ player.passes || '??' }}</h5>
          </div>
        </div>
        <div class="big-stat">
          <img src="/images/profile/sprintspeed.png" alt="" class="big-icon" />
          <div class="stat-text">
            <h5>Sprint Speed</h5>
            <h5>{{ player.passes || '??' }}</h5>
          </div>
        </div>
        <div class="big-stat">
          <img src="/images/profile/kickspeed.png" alt="" class="big-icon" />
          <div class="stat-text">
            <h5>Kick Speed</h5>
            <h5>{{ player.passes || '??' }}</h5>
          </div>
        </div>
      </div>
    </b-container>
  </main>
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
const { players } = storeToRefs(store)

player.value = store.getPlayer(route.params.id)[0]

onMounted(() => {
  console.log(player)
})
</script>

<style>
.big-stats-box {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: auto;
  justify-content: center;
  row-gap: 20px;
  flex-wrap: wrap;
  padding: 0;
  width: 80vw;
}
.big-stat {
  display: flex;
  align-items: center;
}
.big-icon {
  height: 70px;
  margin: 0 10px;
}
.stat-text {
  background-color: rgb(227, 223, 223);
  width: 180px;
  padding: 20px;
}
.player-stats {
  background-color: #fff;
  border-radius: 10px;
  height: 60px;
  width: 450px;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: #ff9956;
  margin: 0;
  padding: 0;
}
.stat-icon {
  height: 40px;
  margin: 5px;
}
.stat-box {
  display: flex;
  justify-content: center;
}
.bio {
  margin: 20px;
}
.bio p {
  font-weight: 400;
}
.bio span {
  font-weight: bold;
}

.position-box {
  display: flex;
  margin: 0;
  padding: 0;
  margin-left: 20px;
}
.position {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: slateblue;
  border: 3px solid #ff9956;
  display: flex;
  align-items: center;
  justify-content: center;
}
.stats-row {
  display: flex;
  align-items: center;
  margin: 30px 0;
}

.playerImage-row {
  display: flex;
  margin: 50px 0;
  margin-top: 0;
}
.player-img {
  margin: 0;
  padding: 0;
  /* width: 450px; */
  width: auto;
  height: 50vh;
  border: 8px solid #fff;
  border-radius: 30px;
  margin-right: 50px;
}
.details span {
  color: #ff9956;
}
.details h5 {
  line-height: 1.5;
}

.flag-row {
  height: auto;
  padding: 0;
  display: flex;
  align-items: center;
}
.flag-row img {
  height: 30px;
  margin: 0;
  padding: 0;
  margin-right: 20px;
}
.flag-row h1 {
  font-weight: 800;
  color: #000066;
}
.gallery-box {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin-left: auto;
  margin-right: 20%;
}
.gallery-box span {
  font-size: 25px;
}
.gallery-icon {
  width: 50px;
  margin: 10px;
}
.pitch-icon {
  width: 150px;
}
.top {
  padding: 0;
  margin-top: 100px;
  display: flex;
}
.bottom {
  padding: 0;
  margin: 50px 0;
  width: 70vw;
}
main {
  width: 80vw;
  margin: 0 auto;
  color: #000066;
}
</style>
