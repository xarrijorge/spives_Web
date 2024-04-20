import { defineStore } from 'pinia'
import Players from '@/assets/Players.js'

export const useMainStore = defineStore('main', () => {
    const players = ref([...Players])
    const user = ref({
        name: "John Doe",
        watchlist: [
            "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11",
            "3668a7d2-d5d8-41c2-9f0e-8d7a2b3b5b3f",
            "7a9fd7d2-0951-4f9e-b3d7-bdf9e986f9a4",
            "8c451f5d-84c0-4305-8102-84bc76f50de8",
            "abcc3f70-9731-4d85-8961-eafce5cb3dee",
            "86988471-6f29-4fdd-99c5-96235e636263",
            "a96b5d06-7c29-4e07-8c18-7b897e7f1a09",
            "0d99be15-e291-4af5-9da3-c55ebd0eff7d",
            "68bba7a1-be4c-40f1-a226-477b7f3d1e90",
            "9ddb44c1-012d-4e48-b727-5bf55eb84627",
            "d2bc74d4-25fc-47de-8d8d-3c586ee0e1b1",
            "7a2be9e2-f0a6-4818-ac6b-4e3e62c8d7b7"
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