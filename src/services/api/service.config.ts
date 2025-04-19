import axios, { AxiosRequestConfig } from 'axios';
import AppConfig from '../../config';

export const ConfigApp: AxiosRequestConfig = {
  headers: { 'Content-Type': 'application/json' },
};

const projectApi = axios.create({
  baseURL: AppConfig.apiUrl,
  withCredentials: true,
});

export default projectApi;
