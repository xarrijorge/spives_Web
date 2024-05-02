<template>
  <div class="watchCard">
    <div class="requestBox">
      <div>
        <b-img :key="player.id" :src="player.image" alt="Player Image" fluid />
      </div>
      <div>
        <button class="requestButton">Request Contact</button>
      </div>
      <div>
        <button class="requestButton" @click="addToWatchlist">
          Add to Watchlist
        </button>
      </div>
    </div>
    <div class="data">
      <div class="profile">
        <h4>Profile Summary</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quod
          accusantium enim incidunt eius et magnam nesciunt itaque repellat eos
          nobis optio nihil consequuntur illum facilis perspiciatis hic,
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
      <div class="media">
        <h4>See videos</h4>
        <div class="videos">
          <iframe
            :src="`https://www.youtube.com/embed/${videoSrc1}`"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
          <iframe
            :src="`https://www.youtube.com/embed/${videoSrc2}`"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
          <iframe
            :src="`https://www.youtube.com/embed/${videoSrc3}`"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>
        <div class="pitch">
          <!-- <b-img src="/images/profile/newpitch.png" /> -->
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
</template>
<script setup>
import { useMainStore } from '@/stores/main'
import { useAuthStore } from '@/stores/auth'

const route = useRoute()
const store = useMainStore()
const authStore = useAuthStore()

const player = ref()
const videoSrc1 = ref('EjyiCI1hzzo')
const videoSrc2 = ref('9V6ajuohjs4')
const videoSrc3 = ref('7ukRlUCnAqc')

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

player.value = store.getPlayerByID(route.params.id)[0]

onMounted(() => {
  console.log(player)
})
</script>

<style>
main {
  width: 80vw;
  margin: 0 auto;
  color: #000066;
}

.videos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>
