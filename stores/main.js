import { defineStore } from 'pinia'
import Players from '@/assets/Players.js'

export const useMainStore = defineStore('main', () => {
    const players = ref([...Players])
    const user = ref({
        id: 1,
        name: "John Doe",
        isLoggedIn: true,
        watchlist: [
            "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11",
            "3668a7d2-d5d8-41c2-9f0e-8d7a2b3b5b3f",
            "7a9fd7d2-0951-4f9e-b3d7-bdf9e986f9a4",

        ],
        favorites: [
            "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11",
            "3668a7d2-d5d8-41c2-9f0e-8d7a2b3b5b3f",
            "7a9fd7d2-0951-4f9e-b3d7-bdf9e986f9a4",
            "8c451f5d-84c0-4305-8102-84bc76f50de8"
        ],

    })

    const getPlayerByID = (id) => players.value.filter(player => player.id === id)
    const findByIdAndUpdate = (id, newData) => {
        const index = players.value.findIndex(player => player.id === id);
        if (index !== -1) {
            // Update the player's data
            players.value[index] = { ...players.value[index], ...newData };
        }
    }


    return { players, user, getPlayerByID, findByIdAndUpdate }
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