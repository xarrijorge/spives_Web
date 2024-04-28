<template>
  <b-row class="contactUs">
    <b-col md="6">
      <div class="form-container">
        <h2>Contact Us</h2>
        <p>
          Our team would love to hear from you, either as a talent or a scout,
          your feedback matters to us"
        </p>
        <b-form @submit.prevent="submitForm">
          <b-form-group label="Name" label-for="name">
            <b-form-input
              v-model="formData.name"
              id="name"
              placeholder="Enter your name"
              class="mb-3" />
          </b-form-group>
          <b-form-group label="Email" label-for="email">
            <b-form-input
              v-model="formData.email"
              id="email"
              type="email"
              placeholder="Enter your email"
              class="mb-3" />
          </b-form-group>
          <b-form-group label="Message" label-for="message">
            <b-form-textarea
              v-model="formData.message"
              id="message"
              placeholder="Type anything..."
              class="mb-3" />
          </b-form-group>
          <b-form-group>
            <b-form-checkbox
              v-model="formData.acceptTerms"
              name="terms"
              size="lg"
              required>
              I accept the Terms of Service and Privacy Policy.
            </b-form-checkbox>
          </b-form-group>
          <b-button class="contactButton" type="submit">Submit</b-button>
        </b-form>
      </div>
    </b-col>
    <b-col md="6">
      <div class="image-container">
        <img
          src="/images/contact_us_iconspives.png"
          alt="Contact Image"
          class="contactImage" />
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
input,
textarea {
  background-color: #d9d9d9;
}
input[type='check'] {
  width: 50px;
  height: 100px;
  background-color: red;
}

.image-container {
  text-align: center;
}
.contactImage {
  max-width: 80%;
}

.contactButton {
  background-color: #000066 !important;
  margin: 10px 0;
  color: white;
}

@media (max-width: 720px) {
  .image-container {
    margin-top: 20px;
    display: none;
  }
}
</style>
