<template>
  <b-container fluid>
    <!-- Hero Section -->
    <b-row class="mb-5 hero-section">
      <b-col cols="12" md="6" class="hero-text">
        <h1>you deserve to be seen..</h1>
        <p>
          the pain of not getting scouted or the fear of not getting scouted is
          something we hope to tackle.. join us in putting you one step ahead.
        </p>
        <ContactButton />
      </b-col>
      <b-col cols="12" md="6">
        <b-img src="/images/HomeHero.png" fluid alt="Nuxt Logo" />
      </b-col>
    </b-row>

    <!-- Young Talents Section -->
    <b-row class="mb-5 section-container">
      <b-col v-for="player in talents" :key="player.id" cols="md-3">
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
    </b-row>

    <!-- Our Team Section -->
    <b-row class="mb-5 section-container">
      <b-col cols="12">
        <h1>Our Team</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla.
        </p>
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

const talents = Players.splice(0, 4)
</script>

<style scoped>
.section-container {
  max-width: 80vw;
  margin-left: auto;
  margin-right: auto;
}

.hero-section {
  max-width: 100vw;
  height: calc(100vh - 50px);
  align-items: center;
  padding: 0 2rem;
}

.hero-text h1 {
  color: #000066;
  text-transform: uppercase;
  margin: 0 auto;
  font-family: Open Sans, sans-serif;
  font-size: 3.5rem;
  font-weight: 700;
}
.hero-text p {
  margin-bottom: 0;
  font-family: Open Sans, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #5f6570;
}
/* Custom styles for pricing cards on mobile */
@media (max-width: 767px) {
}
</style>
