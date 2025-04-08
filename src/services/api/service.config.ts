import axios, { AxiosRequestConfig } from 'axios';

export const serverURL = import.meta.env.VITE_PUBLIC_API_BACKEND;

export const ConfigApp: AxiosRequestConfig = {
  headers: { 'Content-Type': 'application/json' },
};

const projectApi = axios.create({
  baseURL: serverURL,
  withCredentials: true,
});

export default projectApi;
