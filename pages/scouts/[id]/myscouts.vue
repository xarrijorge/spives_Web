<template>
  <div class="my-scouts" v-for="player in playerData">
    <!-- <div class="watchCard">
      <b-img :key="player.id" :src="player.image" alt="Player Image" fluid />
      <div class="data">
        <div class="profile">
          <h4>Profile Summary</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quod
            accusantium enim incidunt eius et magnam nesciunt itaque repellat
            eos nobis optio nihil consequuntur illum facilis perspiciatis hic,
            veritatis consequatur.
          </p>
        </div>
        <div class="skills">
          <h5>Skills</h5>
          <div class="skill-sets">
            <div class="skill-set">
              <b-img src="/images/shooting.png" alt="Football" />
              <p>shooting 0</p>
            </div>
            <div class="skill-set">
              <b-img src="/images/passing.png" alt="Football" />
              <p>shooting 0</p>
            </div>
            <div class="skill-set">
              <b-img src="/images/crossing.png" alt="Football" />
              <p>shooting 0</p>
            </div>
            <div class="skill-set">
              <b-img src="/images/sprinting.png" alt="Football" />
              <p>shooting 0</p>
            </div>
            <div class="skill-set">
              <b-img src="/images/shooting.png" alt="Football" />
              <p>shooting 0</p>
            </div>
            <NuxtLink :to="`/talents/${player.id}`">
              <button class="detailsButton">More Details</button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div> -->
    <div class="watchCard">
      <div class="requestBox">
        <div>
          <b-img
            :key="player.id"
            :src="player.image"
            alt="Player Image"
            fluid />
        </div>
        <div>
          <button class="requestButton">Request Contact</button>
        </div>
      </div>
      <div class="data">
        <div class="profile">
          <h4>Profile Summary</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quod
            accusantium enim incidunt eius et magnam nesciunt itaque repellat
            eos nobis optio nihil consequuntur illum facilis perspiciatis hic,
            veritatis consequatur.
          </p>
        </div>
        <div class="skills">
          <h5>Skills</h5>
          <div class="skill-sets">
            <div class="skill-set">
              <b-img :src="`/images/${player.foot}.png`" alt="Football" />
              <p>Foot</p>
            </div>
            <div class="skill-set">
              <b-img src="/images/shooting.png" alt="Football" />
              <p>shooting 0</p>
            </div>
            <div class="skill-set">
              <b-img src="/images/passing.png" alt="Football" />
              <p>Passing 0</p>
            </div>
            <div class="skill-set">
              <b-img src="/images/crossing.png" alt="Football" />
              <p>Crossing 0</p>
            </div>
            <div class="skill-set">
              <b-img src="/images/sprinting.png" alt="Football" />
              <p>Sprinting</p>
            </div>
          </div>
        </div>

        <div class="skills">
          <div class="skill-sets">
            <div class="skill-set">
              <b-img src="/images/profile/activity.png" alt="Football" />
              <p>Activity</p>
            </div>
            <div class="skill-set">
              <b-img src="/images/profile/ballsPlayed.png" alt="Football" />
              <p>Balls Played</p>
            </div>
            <div class="skill-set">
              <b-img src="/images/profile/distance.png" alt="Football" />
              <p>Distance</p>
            </div>
            <div class="skill-set">
              <b-img src="/images/profile/kicks.png" alt="Football" />
              <p>Kicks</p>
            </div>
          </div>
          <!-- Second bank of icons start here -->
          <div class="skill-sets">
            <div class="skill-set">
              <b-img src="/images/profile/sprintspeed.png" alt="Football" />
              <p>Sprints Speed</p>
            </div>
            <div class="skill-set">
              <b-img src="/images/profile/sprints.png" alt="Football" />
              <p>Sprints</p>
            </div>
            <div class="skill-set">
              <b-img src="/images/profile/kickspeed.png" alt="Football" />
              <p>Kicks Speed</p>
            </div>
            <div class="skill-set">
              <b-img src="/images/profile/passes.png" alt="Football" />
              <p>Passes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from '@/stores/main'
import { useAuthStore } from '@/stores/auth'

const store = useMainStore()
const authStore = useAuthStore()
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

onMounted(() => {
  getPlayerDataFromWatchlist(authStore.user.watchlist)
})
</script>
<style>
.my-scouts {
  max-width: 1200px;
  width: 80%;
  margin: 0 auto;
}

.header {
  margin: 50px;
}
.watchCard {
  display: grid;
  grid-template-columns: 30% 1fr;
  justify-content: center;
  align-items: center;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
.watchCard img {
  height: 300px;
}
.data {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #eceaea;
}
.skills {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.skill-sets {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: flex-end;
}
.skill-set img {
  height: 40px;
}
.detailsButton {
  background-color: #000066;
  width: 100px;
  height: 35px;
  color: #fff;
  border-radius: 50px;
  font-size: 12px;
  margin: 0;
  outline: none;
  border: none;
}
</style>
