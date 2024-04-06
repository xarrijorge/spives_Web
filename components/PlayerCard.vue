<template>
    <b-card :title="player.name" class="playerCard">
        <!-- Add player details here -->
        <p>Nationality: {{ player.nationality }}</p>
        <p>Age: {{ player.age }}</p>
        <p>Position: {{ player.position }}</p>
        <p>Gender: {{ player.gender }}</p>
    </b-card>
</template>

<script setup>
const props = defineProps({
    player: {
        type: Object,
        required: true
    }
})
</script>
<style scoped>
.playerCard {
    margin-bottom: 20px;
}
</style>