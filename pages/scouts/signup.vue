<template>
  <div class="main">
    <b-container fluid>
      <!-- Hero Section -->
      <b-row>
        <b-col cols="12" sm="12">
          <img
            src="/images/scoutsHero.jpg"
            alt="Hero Image"
            class="img-fluid" />
        </b-col>
      </b-row>

      <!-- Scout Signup Form -->
      <b-row class="justify-content-center mt-5 sm-12">
        <b-col cols="4">
          <h2 class="mb-4">Scout Signup</h2>
          <b-form @submit.prevent="submitForm">
            <b-form-group
              id="nameInput"
              label="Name:"
              label-for="name"
              class="mb-4"
              required>
              <b-form-input id="name" v-model="form.name"></b-form-input>
            </b-form-group>
            <b-form-group
              id="emailInput"
              label="Email:"
              label-for="email"
              class="mb-4"
              required>
              <b-form-input
                type="email"
                id="email"
                v-model="form.email"></b-form-input>
            </b-form-group>
            <b-form-group
              id="nationalityInput"
              label="Nationality:"
              label-for="nationality"
              class="mb-4"
              required>
              <b-form-input
                id="nationality"
                v-model="form.nationality"></b-form-input>
            </b-form-group>
            <b-form-group
              id="regionInput"
              label="Scout Region:"
              label-for="region"
              class="mb-4"
              required>
              <b-form-input id="region" v-model="form.region"></b-form-input>
            </b-form-group>
            <b-form-group
              id="ageRangeInput"
              label="Expected Talent Age Range:"
              label-for="ageRange"
              class="mb-4"
              required>
              <b-form-input
                id="ageRange"
                v-model="form.ageRange"></b-form-input>
            </b-form-group>
            <b-form-group id="consentCheckbox" class="mb-4">
              <b-form-checkbox v-model="form.consent" required>
                I consent to receiving notifications via email.
              </b-form-checkbox>
            </b-form-group>
            <b-button class="contactButton" type="submit">Submit</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  nationality: '',
  region: '',
  ageRange: '',
  consent: false,
})

const submitForm = () => {
  // Add logic here to handle form submission
  console.log('Form submitted:', form.value)
}
</script>

<style scoped>
.main {
  margin: 0;
  padding: 0;
  margin-top: -50px;
  margin-bottom: 50px;
}
img {
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  object-position: top center;
}
</style>
