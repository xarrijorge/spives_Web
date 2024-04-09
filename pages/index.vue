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
    <b-row class="talents section-container">
      <b-col v-for="player in talents" :key="player.id">
        <PlayerCard :player="player" />
      </b-col>
    </b-row>

    <!-- Pricing Plans Section -->
    <b-row class="mb-5 section-container">
      <b-col cols="12" md="4">
        <PricingCard
          PricingIcon="/images/triangle.png"
          card-title="Scouts"
          color="#00A1C0"
          price="2"
          :benefits="[
            'Access to trainers/coaches',
            'Opportunity to meet scout',
            'Access to create analytics',
          ]" />
      </b-col>
      <b-col cols="12" md="4">
        <PricingCard
          PricingIcon="/images/diamond.png"
          card-title="Scouts"
          color="#FF6632"
          price="52"
          :benefits="[
            'Easy access to multiple player profiles',
            'Access to player analytics',
            'Player info data',
            'Connect with other coaches/scouts',
          ]" />
      </b-col>
      <b-col cols="12" md="4">
        <PricingCard
          PricingIcon="/images/hexagon.png"
          card-title="Scouts"
          color="#F8B34A"
          price="86"
          :benefits="[
            'Create club profiles',
            'Access player profiles',
            'Access to scouts/coaches',
            'Access to create multiple player analytics',
            'One-on-one consultation',
          ]" />
      </b-col>
    </b-row>

    <!-- Our Team Section -->
    <b-row class="mb-5 section-container">
      <b-col cols="12" class="team-section">
        <div class="text">
          <h1>Our Team</h1>
          <p>
            Across Africa, a passionate team unites. We bring diverse talents
            together to showcase the best of African creativity on the global
            stage. Meet the Spives family!
          </p>
        </div>
        <b-row>
          <b-col cols="6" md="3">
            <b-img src="/images/PauloProfile.jpeg" fluid />
          </b-col>
          <b-col cols="6" md="3">
            <b-img src="/images/XarriProfile.jpeg" fluid />
          </b-col>
          <b-col cols="6" md="3">
            <b-img src="/images/CaptainProfile.jpeg" fluid />
          </b-col>
          <b-col cols="6" md="3">
            <b-img src="/images/GenesisProfile.jpeg" fluid />
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
import PricingCard from '../components/PricingCard.vue'
import ContactUs from '../components/ContactUs.vue'
import ContactButton from '../components/ContactButton.vue'
import Players from '../assets/Players'

const talents = Players.splice(0, 3)
</script>

<style scoped>
.section-container {
  margin: 0 auto;
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
.team-section {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.team-section .text {
  width: 40%;
  line-height: 2;
  margin: 20px 0;
}
.talents {
  display: flex;
  justify-content: center;
  align-items: center;
}
/* Custom styles for pricing cards on mobile */
@media (max-width: 767px) {
  .team-section .text {
    width: 100%;
  }
}
</style>
