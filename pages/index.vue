<template>
  <b-container fluid>
    <!-- Hero Section -->
    <b-row class="mb-5 section-container hero-section">
      <b-col cols="12" md="5" class="hero-text">
        <h1>you deserve to be seen..</h1>
        <p>
          the pain of not getting scouted or the fear of not getting scouted is
          something we hope to tackle.. join us in putting you one step ahead.
        </p>
        <ContactButton />
      </b-col>
      <b-col cols="12" md="7">
        <b-img
          class="heroImage"
          src="/images/HomeHero.png"
          fluid
          alt="Nuxt Logo" />
      </b-col>
    </b-row>

    <!-- Young Talents Section -->
    <b-row class="talents">
      <h3>create your profile card and be seen</h3>
      <p>we believe that every footballer has the opportunity to shine</p>
      <div class="cardbox">
        <PlayerCard v-for="player in talents" class="pcard" :player="player" />
      </div>
      <b-col>
        <b-button small>Create Card</b-button>
      </b-col>
    </b-row>

    <!-- Story Section -->

    <b-row class="story">
      <h2>stories we enjoy telling</h2>
      <div class="storybox">
        <b-img src="/images/childrenplaying.png" />
        <div class="tale">
          <p>
            On one of our trips to an local football field in East Legon, Accra,
            Ghana. We got to experience an amazing pool of talent and it become
            more dire why we need to these find a way to create a platform that
            gives the young African football talent an opportunity to showcase
            their talents.
          </p>
          <b-button small>Read More..</b-button>
        </div>
      </div>
      <div class="storybox">
        <b-img src="/images/childrenplaying.png" />
        <div class="tale">
          <p>
            On one of our trips to an local football field in East Legon, Accra,
            Ghana. We got to experience an amazing pool of talent and it become
            more dire why we need to these find a way to create a platform that
            gives the young African football talent an opportunity to showcase
            their talents.
          </p>
          <b-button small>Read More..</b-button>
        </div>
      </div>
    </b-row>

    <!-- Pricing Plans Section -->
    <b-row class="mb-5 pricing">
      <b-img src="images/talentsPricing.png" cols="12" md="6" />
      <b-img src="images/scoutsPricing.png" cols="12" md="6" />
      <b-img src="images/scoutsPricing2.png" cols="12" md="6" />
    </b-row>

    <!-- Our Team Section -->
    <b-row class="mb-5 team">
      <b-col cols="12" class="team-section">
        <div class="text">
          <h1>the team</h1>
          <p>
            Diverse, Dynamic, Driven – that's Team Spives! Hailing from Lagos,
            Accra, and Mozambique, we're a vibrant squad passionate about
            showcasing the best of African football talent
          </p>
        </div>
        <b-row>
          <b-col cols="6" md="3">
            <b-img src="/images/PauloProfile.jpeg" fluid />
            <p class="name">Paulo Ouana</p>
            <p class="position">CTO</p>
          </b-col>
          <b-col cols="6" md="3">
            <b-img src="/images/ushaProfile.jpeg" fluid />
            <p class="name">Ushahemba Shir</p>
            <p class="position">COO</p>
          </b-col>
          <b-col cols="6" md="3">
            <b-img src="/images/CaptainProfile.jpeg" fluid />
            <p class="name">Nunya Tomey</p>
            <p class="position">CPO</p>
          </b-col>
          <b-col cols="6" md="3">
            <b-img src="/images/GenesisProfile.jpeg" fluid />
            <p class="name">Genesis Chukwuma</p>
            <p class="position">CEO</p>
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <!-- Contact Us Section -->
    <b-row class="mt-5 section-container" id="contact">
      <b-col cols="12">
        <ContactUs />
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup>
import { useMainStore } from '@/stores/main'
import ContactUs from '../components/ContactUs.vue'
import ContactButton from '../components/ContactButton.vue'

const store = useMainStore()
const { players } = storeToRefs(store)

const talents = players.value.slice(0, 3)
</script>

<style scoped>
* {
  color: #000066;
}
.section-container {
  margin: 50px auto;
  padding: 0 5%;
}

.hero-section {
  max-width: 100vw;
  height: calc(100vh - 50px);
  align-items: center;
  margin-top: -2%;
  padding: 20px 4%;
}

.hero-text {
  padding: 0 50px;
}

.hero-text h1 {
  color: #000066;
  text-transform: uppercase;
  font-size: 3.5rem;
  font-weight: 800;
}
.hero-text p {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #5f6570;
  margin: 20px 0;
}
.heroImage {
  max-width: 90%;
}
.team {
  /* background: linear-gradient(#fffffff8, #fffffff8), url('/images/storybg.png'); */
  background-position: center;
  margin: 0;
  background-size: contain;
  height: max-content;
  margin: 50px auto;
  padding: 0 5%;
}
.team-section {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.team-section .text {
  width: 60%;
  line-height: 2;
  margin: 20px 0;
}
.talents {
  background-color: #000066;
  padding: 50px;
  height: max-content;
  text-align: center;
  align-items: space-evenly;
}
.pricing {
  padding: 50px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #d9d9d9;
}
.pricing img {
  max-width: 30%;
}
.talents * {
  color: #fff;
}
.talents img {
  max-width: 100%;
}
.talents button {
  background-color: #ff6633;
}
.cardbox {
  display: flex;
  justify-content: space-evenly;
  height: max-content;
  width: 100%;
  margin: 20px 0;
}
.pcard {
}

.story {
  height: max-content;
  background: linear-gradient(#fffffff8, #fffffff8), url('/images/storybg.png');
  background-position: center;
  background-size: contain;
  padding: 100px;
  display: flex;
  flex-direction: column;
}
.story h2 {
  font-weight: bold;
}
.storybox {
  display: flex;
  justify-content: space-between;
  margin: 50px 0;
}
.storybox img {
  height: 250px;
}
.storybox .tale {
  margin: 0 50px;
}
.tale button {
  margin-top: 50px;
  background-color: #000066;
  color: #fff;
}

.name {
  margin-top: 10px;
}
.position {
  font-weight: bold;
}
/* Custom styles for pricing cards on mobile */
@media (max-width: 767px) {
  .team-section .text {
    width: 100%;
  }
  .talents {
    flex-direction: column;
    align-items: center;
  }
  .pricing {
    flex-direction: column;
    align-items: center;
  }
  .pricing img {
    max-width: 80%;
  }
}
</style>
