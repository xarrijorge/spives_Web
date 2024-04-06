<template>
  <b-container style="background-color: #f2f3f7">
    <b-row class="hero">
      <b-col>
        <h1>you deserve to be seen..</h1>
        <p>
          the pain of not getting scouted or the fear of not getting scouted is
          something we hope to tackle.. join us in putting you one step ahead.
        </p>
        <b-button class="contactButton">Contact Us</b-button>
      </b-col>
      <b-col>
        <img
          width="800px"
          src="/images/HomeHero.png"
          alt="Nuxt Logo"
          class="logo" />
      </b-col>
    </b-row>
    <b-row class="cards">
      <b-card-group deck>
        <b-card
          title="Young Talents"
          img-src="/images/player-20holding-20ball-p-800.jpg"
          img-alt=" Image"
          img-top
          tag="article"
          style="max-width: 20rem; border: none">
          <b-card-text>
            We give young talents the platform to showcase their talents
          </b-card-text>
        </b-card>
        <b-card
          title="Young Talents"
          img-src="/images/istockphoto-1211615197-612x612.jpg"
          img-alt=" Image"
          img-top
          tag="article"
          style="max-width: 20rem; border: none">
          <b-card-text>
            We give young talents the platform to showcase their talents
          </b-card-text>
        </b-card>
        <b-card
          title="Young Talents"
          img-src="/images/2149479957-p-500.jpg"
          img-alt=" Image"
          img-top
          tag="article"
          style="max-width: 20rem; border: none">
          <b-card-text>
            We give young talents the platform to showcase their talents
          </b-card-text>
        </b-card>
      </b-card-group>
    </b-row>
    <b-row class="plans">
      <h1>Pricing Plans</h1>
      <PricingCard
        PricingIcon="/images/triangle.png"
        card-title="Scouts"
        color="#00A1C0"
        :benefits="[
          'Easy access to multiple player profiles',
          'Access to player analytics',
          'Player info data',
          'Connect with other coaches/scouts',
        ]" />
    </b-row>
  </b-container>
</template>
<style>
.hero {
  display: flex;
  align-items: center;
}

.contactButton {
  background-color: #ff6632;
  color: white;
  border: none;
  outline: none;
}
</style>
<script setup>
import PricingCard from '../components/PricingCard.vue'
</script>
