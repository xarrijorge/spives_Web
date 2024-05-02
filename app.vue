<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup></script>
<style>
html * {
  font-family: 'Montserrat', sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
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
a {
  text-decoration: none;
}

.watchCard {
  display: grid;
  grid-template-columns: 30% 1fr;
  justify-content: center;
  align-items: center;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
.watchCard img {
  height: 300px;
}
.data {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #eceaea;
}
.skills {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 50px;
}
.skill-sets {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: flex-end;
  margin-bottom: 50px;
}
.skill-set {
  margin-right: 20px;
}
.skill-set img {
  height: 40px;
}
.requestButton {
  background-color: transparent;
  border: 1px solid #9e9c9c;
  width: 50%;
  height: 50px;
  border-radius: 15px;
  font-weight: bold;
  font-size: 17px;
  margin: 20px 0;
}
</style>
