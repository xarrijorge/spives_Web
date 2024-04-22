import { useMainStore } from "@/stores/main";

export const useAPIFetch = async (path, options = {}) => {
    const config = useRuntimeConfig();
    // const { show } = useToast()

    options.baseURL = config.public.baseURL;

    const store = useMainStore();
    const { token, isLoggedIn } = storeToRefs(store); // Destructure store properties

    const headers = isLoggedIn.value === true ? {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token.value}`, // Include auth token if present
    } : options.headers;

    return $fetch(path, { headers, ...options })
        .catch(async (error) => {
            if (error.response.status === 401) {

                await navigateTo('/login') // Redirect to login page
            }
            throw error; // Re-throw the error to propagate it if needed
        });
};