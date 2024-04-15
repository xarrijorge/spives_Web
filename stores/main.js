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
        "nickname": "wyndrick",
        "nationality": "Liberian",
        "age": 17,
        "position": ['cf', 'ss'],
        "gender": "Male",
        "foot": "Right",
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
        "name": "Richard Osei Asante",
        "nickname": "Skillful",
        "nationality": "Ghana",
        "age": 15,
        "position": ['RM'],
        'weight': '48.9kg',
        "foot": 'Right',
        "gender": "Female",
        "image": "/images/talents/RichardOseiAsante.png",
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
        "name": "Besard Oppong",
        "nickname": "Baby Messi",
        "nationality": "Ghanian",
        "age": 13,
        "weight": '42.2kg',
        "position": ['CDM'],
        "gender": "Male",
        "foot": "Left",
        "image": "/images/talents/BesardOppong.png",
        "stats": {
            "shooting": 75,
            "speed": 80,
            "passing": 70,
            "dribbling": 85,
            "overall": 78
        }
    },
];