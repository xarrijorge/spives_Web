<template>
  <b-container>
    <b-col class="pricing-card">
      <b-col class="pricing-header">
        <div class="imgBox">
          <img :src="PricingIcon" alt="Football Icon" class="pricing-icon" />
        </div>
        <h2 class="pricing-title">{{ cardTitle }}</h2>
      </b-col>
      <div class="pricing-price">
        <h2>$ 52<small>/mo</small></h2>
        <p>Billed monthly</p>
      </div>
      <hr />
      <div class="pricing-features">
        <ul class="feature-list">
          <li v-for="(item, index) in benefits" :key="index">
            <PricingSVG :svgColor="color" />
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="pricing-action">
        <b-button>Subscribe Now</b-button>
      </div>
    </b-col>
  </b-container>
</template>

<script setup>
import PricingSVG from './PricingSVG.vue'

const props = defineProps(['PricingIcon', 'cardTitle', 'color', 'benefits'])
</script>

<style scoped>
.pricing-card {
  max-width: 25rem;
  text-align: center;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: #5f6570;
}

.pricing-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.imgBox {
  width: 100px;
  height: 100px;
  background-color: #dddee199;
  border-radius: 20px;
}

.pricing-icon {
  margin-right: 0.5rem;
  max-width: 100%;
}

.pricing-title {
  font-size: 1.5rem;
  font-weight: thin;
  margin-top: 40px;
  color: #1f2c3d;
}

.pricing-price h2 {
  color: v-bind(color);
}

.pricing-price small {
  font-size: 1.5rem;
  color: #1f2c3d;
}

.pricing-features {
  margin-bottom: 2rem;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
}

.feature-list li {
  display: flex;
  align-items: center;
  text-align: left;
  margin-bottom: 0.5rem;
}

.feature-list li svg {
  margin-right: 0.5rem;
}
.pricing-action button {
  width: 100%;
  background-color: #ff6632;
  border: none;
  height: 48px;
  padding: 12px 28px;
}
.pricing-action button:hover {
  background-color: #1f2c3d;
}
</style>
