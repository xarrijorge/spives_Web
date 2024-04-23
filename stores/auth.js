import { defineStore } from 'pinia'

export const useAuthStore = defineStore(
    'authStore',
    () => {
        const token = ref(null)
        const isLoggedIn = ref(false)
        const user = ref({
            id: 1,
            name: 'John Doe',
            watchlist: [
                'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
                '3668a7d2-d5d8-41c2-9f0e-8d7a2b3b5b3f',
                '7a9fd7d2-0951-4f9e-b3d7-bdf9e986f9a4',
            ],
            favorites: [
                'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
                '3668a7d2-d5d8-41c2-9f0e-8d7a2b3b5b3f',
                '7a9fd7d2-0951-4f9e-b3d7-bdf9e986f9a4',
                '8c451f5d-84c0-4305-8102-84bc76f50de8',
            ],
        })
        return {
            token,
            isLoggedIn,
            user,
        }
    },
    {
        persist: true,
    }
)
