import Axios, { InternalAxiosRequestConfig } from "axios";
import { BASE_URL } from "@env";
import { getStoredData } from "@/utils/storage";

async function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  const token = await getStoredData({ id: "user-token" });

  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
  config.headers.Accept = 'application/json';

  return config;
}

export const axios = Axios.create({
  baseURL: BASE_URL
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const { data: { message, statusCode } } = error.response;

    return Promise.reject({ error: true, status: statusCode, message });
  }
);