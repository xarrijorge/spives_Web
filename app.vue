<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup></script>
<style>
html * {
  font-family: 'Montserrat', sans-serif;
}
body {
  background-color: #f2f3f7;
  font-family: 'Montserrat', sans-serif;
}
.contactButton:hover {
  background-color: #1f2c3d;
}
.contactButton {
  background-color: #ff6632;
  border: none;
  outline: none;
  color: #fff;
  text-align: center;
  border-radius: 0.5rem;
  padding: 0.75rem 1.75rem;
  font-size: 1rem;
  font-weight: 400;
  text-decoration: none;
  transition-property: #000066;
}
p {
  margin: 0;
  padding: 0;
}
button:hover {
  cursor: pointer;
}
</style>
