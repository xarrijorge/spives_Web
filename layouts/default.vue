<template>
  <div class="layout">
    <b-navbar
      toggleable="md"
      type="light"
      variant="light"
      class="mainNav sticky-top">
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
                <b-nav-item class="navItem" href="/signup">Signup</b-nav-item>
                <NuxtLink to="/#contact"
                  ><b-button class="contactButton"
                    >Contact Us</b-button
                  ></NuxtLink
                >
              </b-navbar-nav>
            </b-collapse>
          </b-col>
        </b-row>
      </b-container>
    </b-navbar>
    <slot />
    <b-row class="footer d-flex align-items-center">
      <b-col cols="6">
        <p class="mb-0">
          © {{ new Date().getFullYear() }} product of The Trinity Corp.
        </p>
      </b-col>
      <b-col
        cols="6"
        class="text-right d-flex align-items-center justify-content-end">
        <a
          href="https://www.instagram.com/gospives?igsh=Nzl3MHlzb3RseTQ2"
          target="_blank"
          class="icon">
          <font-awesome :icon="['fab', 'instagram']" />
        </a>
        <a
          href="https://www.instagram.com/gospives?igsh=Nzl3MHlzb3RseTQ2"
          class="icon"
          target="_blank">
          <font-awesome :icon="['fab', 'twitter']" />
        </a>
        <a
          href="https://www.instagram.com/gospives?igsh=Nzl3MHlzb3RseTQ2"
          class="icon"
          target="_blank">
          <font-awesome :icon="['fab', 'tiktok']" />
        </a>
        <a
          href="https://www.instagram.com/gospives?igsh=Nzl3MHlzb3RseTQ2"
          class="icon"
          target="_blank">
          <font-awesome :icon="['fab', 'linkedin']" />
        </a>
      </b-col>
    </b-row>
  </div>
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
}
a.nav-link {
  color: #000066;
  font-weight: thin;
}
.footer {
  width: 100vw;
  background-color: #000066;
  color: white;
  font-family: Montserrat, sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  height: 10vh;
}
.text-right {
  text-align: right;
}
.icon {
  color: #ff9950;
  font-size: 1.7rem;
  margin: 0 8px;
}
.icon:hover {
  color: #ffc;
}
.layout {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.footer {
  margin: 0;
  padding: 0;
  margin-top: auto;
}
</style>
<script setup>
const route = useRoute()

onMounted(() => {
  console.log(route.params)
})
</script>
