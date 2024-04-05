<template>
    <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/talents">Talents</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
    </ul>
    <slot />
</template>
<style></style>
<script setup>
onMounted(() => {
    console.log('mounted')
})
</script>