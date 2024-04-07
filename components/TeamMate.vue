<template>
  <div class="team-member">
    <img :src="imageUrl" alt="Team Member Image" class="team-member-image" />
    <div class="team-member-info">
      <h3 class="team-member-name">{{ name }}</h3>
      <p class="team-member-position">{{ position }}</p>
      <p class="team-member-description">{{ description }}</p>
      <div class="social-media-icons">
        <NuxtLink :to="socialMediaLinks[0]">
          <font-awesome :icon="['fab', 'square-facebook']" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps([
  'imageUrl',
  'name',
  'position',
  'description',
  'socialMediaLinks',
])
</script>

<style scoped>
.team-member {
  text-align: center;
  margin-bottom: 20px;
}

.team-member-image {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 10px;
}

.team-member-name {
  font-size: 1.5rem;
  margin-bottom: 5px;
}

.team-member-position {
  font-style: italic;
  margin-bottom: 10px;
}

.team-member-description {
  margin-bottom: 20px;
}

.social-media-icons {
  display: flex;
  justify-content: center;
}

.social-media-icons a {
  margin: 0 10px;
  color: #333;
}

.social-media-icons a:hover {
  color: #007bff;
}
</style>
