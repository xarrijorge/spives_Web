<template>
  <b-navbar toggleable="md" type="light" variant="light" class="mainNav">
    <b-container fluid>
      <b-row class="justify-content-between align-items-center">
        <b-col>
          <b-navbar-brand href="/">
            <img src="/images/mainLogo.png" alt="Logo" height="30" />
          </b-navbar-brand>
        </b-col>
        <b-col cols="auto">
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        </b-col>
        <b-col cols="auto">
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item class="navItem" href="/talents">Talents</b-nav-item>
              <b-nav-item class="navItem" href="/scouts">Scouts</b-nav-item>
              <ContactButton />
            </b-navbar-nav>
          </b-collapse>
        </b-col>
      </b-row>
    </b-container>
  </b-navbar>
  <slot />
</template>
<style>
.mainNav {
  border-bottom: 1px solid #000066;
  background-color: #000066;
  width: 100%;
  height: auto;
  min-height: 4.5rem;
  padding: 0 5%;
  font-family: Montserrat, sans-serif;
  margin-bottom: 50px;
}
a.nav-link {
  color: #000066;
  font-weight: thin;
  letter-spacing: 2px;
}
</style>
<script setup>
import ContactButton from '../components/ContactButton.vue'
onMounted(() => {
  console.log('mounted')
})
</script>
