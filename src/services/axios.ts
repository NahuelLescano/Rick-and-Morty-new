import axios, { type AxiosInstance, type AxiosResponse } from "axios";
import { API_URL } from "@/config";

let axiosInstance: AxiosInstance;

const createAxios = (baseURL: string) => {
    axiosInstance = axios.create({ baseURL });
};

const setupInterceptors = () => {
    axiosInstance.interceptors.response.use(
        (response: AxiosResponse) => {
            console.log(`Response from: ${response.config.url}`, {
                data: response.data,
                status: response.status,
            });
            return response;
        },
        (error) => {
            if (error.response) {
                console.error(`Error response from: ${error.response.config.url}`);
            } else {
                console.error(`Error: ${error.message}`);
            }
            return Promise.reject(error);
        },
    );
};

export const getAxiosInstance = (): AxiosInstance => {
    createAxios(API_URL);
    setupInterceptors();
    return axiosInstance;
};
