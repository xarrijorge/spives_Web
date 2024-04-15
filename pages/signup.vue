<template>
  <div class="main">
    <h2>Are you Talent or Scout?</h2>
    <b-row class="signup">
      <div
        class="signup-card talent"
        img-src="/images/talent_image.jpg"
        img-alt="Talent Image"
        img-top
        @click="goToTalentPage">
        <font-awesome :icon="['fas', 'futbol']" class="signup-icon" />
        <h4 class="mb-0">Talent</h4>
      </div>
      <div
        class="signup-card scout"
        img-src="/images/scout_image.jpg"
        img-alt="Scout Image"
        img-top
        @click="goToScoutPage">
        <font-awesome :icon="['fas', 'binoculars']" class="signup-icon" />
        <h4 class="mb-0">Scout</h4>
      </div>
    </b-row>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToTalentPage = () => {
  router.push('/talents/signup')
}

const goToScoutPage = () => {
  router.push('/scouts/signup')
}
</script>

<style scoped>
.main {
  margin: 0 auto;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
}
.main h2 {
  margin-top: 20px;
  font-size: 2rem;
  font-weight: 700;
  color: #000066;
}
.signup {
  color: white;
  height: 80vh;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.signup-card {
  cursor: pointer;
  transition: filter 0.3s;
  width: 30%;
  height: 50%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.signup-card:hover {
  filter: grayscale(0%);
}
.signup-icon {
  font-size: 45px;
  margin-bottom: 20px;
}

.talent {
  background-color: #000066;
}

.scout {
  background-color: #ff9956;
}

.talent:hover {
  background-color: #0056b3;
}

.scout:hover {
  background-color: #e68a00;
}
</style>
