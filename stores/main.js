import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
    const players = ref([...Players])

    const getPlayer = (id) => players.value.filter(player => player.id === id)

    return { players, getPlayer }
})

const Players = [
    {
        "id": 1,
        "name": "Wynston Cole",
        "nationality": "Liberian",
        "age": 17,
        "position": ['cf', 'Forward'],
        "gender": "Male",
        "image": "/images/PlayerCardImage2.jpeg",
        "stats": {
            "shooting": 85,
            "speed": 75,
            "passing": 80,
            "dribbling": 90,
            "overall": 82
        }
    },
    {
        "id": 2,
        "name": "Player 2",
        "nationality": "Country B",
        "age": 21,
        "position": ['cf', 'Forward'],
        "gender": "Female",
        "image": "/images/PlayerCardImage2.jpeg",
        "stats": {
            "shooting": 80,
            "speed": 85,
            "passing": 75,
            "dribbling": 88,
            "overall": 82
        }
    },
    {
        "id": 3,
        "name": "Player 3",
        "nationality": "Nigerian",
        "age": 26,
        "position": ['cf', 'Forward'],
        "gender": "Male",
        "image": "/images/PlayerCardImage2.jpeg",
        "stats": {
            "shooting": 75,
            "speed": 80,
            "passing": 70,
            "dribbling": 85,
            "overall": 78
        }
    },
];