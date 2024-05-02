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
        <button class="requestButton">Add to Watchlist</button>
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
    </div>
  </div>
</template>
<script setup>
import { useMainStore } from '@/stores/main'

const route = useRoute()
const store = useMainStore()

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
  align-items: flex-start;
  margin-top: 50px;
}
.skill-sets {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: flex-end;
  margin-bottom: 50px;
}
.skill-set {
  margin-right: 20px;
}
.skill-set img {
  height: 40px;
}
.requestButton {
  background-color: transparent;
  border: 1px solid #9e9c9c;
  width: 50%;
  height: 50px;
  border-radius: 15px;
  font-weight: bold;
  font-size: 17px;
  margin: 20px 0;
}
.videos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>
