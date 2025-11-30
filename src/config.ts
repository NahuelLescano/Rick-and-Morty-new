export const config = {
    API_URL: import.meta.env.VITE_RICK_AND_MORTY_API_URL as string,
    BASE_URL: import.meta.env.VITE_RICK_AND_MORTY_BASE_URL as string ?? "https://rickandmortyapi.com/api",
};

if (!config.API_URL) {
    throw new Error("URL is not defined");
}

const { API_URL, BASE_URL } = config;
export { API_URL, BASE_URL };
