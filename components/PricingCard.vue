<template>
  <div>
    <b-col class="pricing-card">
      <b-col class="pricing-header">
        <div class="imgBox">
          <img :src="PricingIcon" alt="Football Icon" class="pricing-icon" />
        </div>
        <h2 class="pricing-title">{{ cardTitle }}</h2>
        <div class="pricing-price">
          <h2 style="font-weight: 500">$ {{ price }}<small>/mo</small></h2>
          <p>Billed monthly</p>
        </div>
      </b-col>
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
        <b-button>{{ buttonText }}</b-button>
      </div>
    </b-col>
  </div>
</template>

<script setup>
import PricingSVG from './PricingSVG.vue'

const props = defineProps([
  'PricingIcon',
  'cardTitle',
  'color',
  'benefits',
  'price',
  'buttontext',
  'buttoncolor',
])
const buttonText = props.buttontext || 'Contact Us'
</script>

<style scoped>
.pricing-card {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: #5f6570;
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
  text-align: center;
  border-radius: 1.25rem;
  flex-direction: column;
  padding: 2rem;
  display: flex;
  width: 100%;
  margin-bottom: 10px;
}

.pricing-header {
  grid-column-gap: 0.5rem;
  grid-row-gap: 0.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  display: flex;
  margin: 0;
  padding: 0;
}
hr {
  margin: 0;
  padding: 0;
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
.pricing-price {
  line-height: 3;
  margin-bottom: -20px;
}
.pricing-price h2 {
  color: v-bind(color);
  margin: 0;
  padding: 0;
}

.pricing-price small {
  font-size: 1.5rem;
  color: #1f2c3d;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
  line-height: 2;
}

.feature-list li {
  display: flex;
  align-items: center;
  text-align: left;
}

.feature-list li svg {
  margin-right: 0.5rem;
}
.pricing-action button {
  width: 100%;
  background-color: v-bind(buttoncolor);
  border: none;
  height: 48px;
  padding: 12px 28px;
}
.pricing-action button:hover {
  background-color: #1f2c3d;
}

@media screen and (max-width: 768px) {
  .pricingContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
  }
  .pricing-card {
    width: 80vw;
  }
}
</style>
