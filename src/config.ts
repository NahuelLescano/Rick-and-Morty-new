export const config = {
    API_URL: import.meta.env.VITE_RICK_AND_MORTY_API_URL as string,
    BASE_URL: import.meta.env.VITE_RICK_AND_MORTY_BASE_URL as string,
};

const { API_URL, BASE_URL } = config;
export { API_URL, BASE_URL };
