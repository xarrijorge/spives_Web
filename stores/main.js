import { defineStore } from 'pinia'
import Players from '@/assets/Players.js'

export const useMainStore = defineStore('main', () => {
    const players = ref([...Players])

    const getPlayerByID = (id) =>
        players.value.filter((player) => player.id === id)
    const findByIdAndUpdate = (id, newData) => {
        const index = players.value.findIndex((player) => player.id === id)
        if (index !== -1) {
            // Update the player's data
            players.value[index] = { ...players.value[index], ...newData }
        }
    }

    return {
        players,
        getPlayerByID,
        findByIdAndUpdate,
    }
})


// Function to shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

shuffleArray(Players);