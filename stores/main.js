import { defineStore } from 'pinia'
import Players from '@/assets/Players.js'

export const useMainStore = defineStore('main', () => {
    const players = ref([...Players])

    const getPlayer = (id) => players.value.filter(player => player.id === id)

    return { players, getPlayer }
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