<template>
  <b-container fluid>
    <b-row class="justify-content-center mt-5">
      <b-col xs="12" sm="10" md="8" lg="6">
        <b-form @submit.prevent="submitForm">
          <b-form-group label="Name:" label-for="name" required>
            <b-form-input
              v-model="formData.name"
              id="name"
              required></b-form-input>
          </b-form-group>
          <b-form-group label="Nationality:" label-for="nationality" required>
            <b-form-input
              v-model="formData.nationality"
              id="nationality"
              required></b-form-input>
          </b-form-group>
          <b-form-group label="Age:" label-for="age" required>
            <b-form-input
              v-model="formData.age"
              id="age"
              type="number"
              min="1"
              required></b-form-input>
          </b-form-group>
          <b-form-group label="Position:" label-for="position" required>
            <b-form-checkbox-group
              v-model="formData.position"
              id="position"
              :options="positionOptions"
              :aria-describedby="'position-' + positionOptions.length"
              stacked></b-form-checkbox-group>
            <small
              :id="'position-' + positionOptions.length"
              class="form-text text-muted"
              >Select all that apply</small
            >
          </b-form-group>
          <b-form-group label="Gender:" label-for="gender" required>
            <div>
              <b-form-radio
                v-model="formData.gender"
                value="Male"
                name="gender"
                inline>
                Male
              </b-form-radio>
              <b-form-radio
                v-model="formData.gender"
                value="Female"
                name="gender"
                inline>
                Female
              </b-form-radio>
            </div>
          </b-form-group>
          <b-form-group label="Image:" label-for="image" required>
            <b-form-file
              v-model="formData.image"
              id="image"
              accept=".jpg,.jpeg,.png"
              required></b-form-file>
          </b-form-group>
          <b-form-group>
            <b-form-checkbox
              v-model="formData.acceptTerms"
              id="acceptTerms"
              required>
              I accept the Terms of Service and Privacy Policy.
            </b-form-checkbox>
          </b-form-group>
          <b-button class="contactButton" type="submit" variant="primary"
            >Submit</b-button
          >
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup>
const router = useRouter()

const positionOptions = [
  { value: 'GK', text: 'Goalkeeper' },
  { value: 'LB', text: 'Left Back' },
  { value: 'CB', text: 'Center Back' },
  { value: 'RB', text: 'Right Back' },
  { value: 'LWB', text: 'Left Wing Back' },
  { value: 'RWB', text: 'Right Wing Back' },
  { value: 'CDM', text: 'Central Defensive Midfielder' },
  { value: 'CM', text: 'Central Midfielder' },
  { value: 'CAM', text: 'Central Attacking Midfielder' },
  { value: 'LM', text: 'Left Midfielder' },
  { value: 'RM', text: 'Right Midfielder' },
  { value: 'LW', text: 'Left Winger' },
  { value: 'RW', text: 'Right Winger' },
  { value: 'SS', text: 'Second Striker' },
  { value: 'CF', text: 'Center Forward' },
]

const genderOptions = [
  { value: 'Male', text: 'Male' },
  { value: 'Female', text: 'Female' },
]
const formData = ref({
  email: '',
  password: '',
  confirmPassword: '',
  name: '',
  nationalityId: '',
  age: 0,
  gender: 'Male',
  userType: 'Talent',
  ageRange: '',
  avatar: '',
  playerPositions: [],
})

const submitForm = async () => {
  try {
    const response = await useAPIFetch(
      'https://spives.onrender.com/auth/register',
      {
        method: 'POST',
        data: formData.value,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    console.log(response.data) // Handle success response
    // Optionally, redirect to another page upon successful registration
    router.push('/login')
    show?.({
      title: 'Registration Successful',
      message: 'You have successfully registered.',
      variant: 'success',
    })
  } catch (error) {
    console.error(error) // Handle error response
  }
}
</script>
