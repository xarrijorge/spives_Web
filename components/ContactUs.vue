<template>
  <b-row class="contactUs">
    <b-col md="6">
      <div class="form-container">
        <h2>Contact Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          ipsum arcu, tempor semper vulputate ut, volutpat eget ex.
        </p>
        <b-form @submit.prevent="submitForm">
          <b-form-group label="Name" label-for="name">
            <b-form-input
              v-model="formData.name"
              id="name"
              placeholder="Enter your name" />
          </b-form-group>
          <b-form-group label="Email" label-for="email">
            <b-form-input
              v-model="formData.email"
              id="email"
              type="email"
              placeholder="Enter your email" />
          </b-form-group>
          <b-form-group label="Message" label-for="message">
            <b-form-textarea
              v-model="formData.message"
              id="message"
              placeholder="Type anything..." />
          </b-form-group>
          <b-form-group>
            <b-form-checkbox v-model="formData.acceptTerms" id="terms">
              I accept the Terms of Service and Privacy Policy.
            </b-form-checkbox>
          </b-form-group>
          <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
      </div>
    </b-col>
    <b-col md="6">
      <div class="image-container">
        <img src="/images/contact_us_iconspives.png" alt="Contact Image" />
      </div>
    </b-col>
  </b-row>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  message: '',
  acceptTerms: false,
})

const submitForm = () => {
  // Handle form submission here
  console.log('Form submitted')
}
</script>

<style scoped>
.contactUs {
  display: flex;
  align-items: center;
  height: 80vh;
}
.form-container {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.image-container {
  text-align: center;
}
.image-container img {
  max-width: 100%;
}

@media (max-width: 768px) {
  .image-container {
    margin-top: 20px;
  }
}
</style>
