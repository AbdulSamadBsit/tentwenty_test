import axiosInstance from './axiosInstance'; // Adjust the path as needed
import {AxiosRequestConfig, AxiosResponse} from 'axios';

interface GetParams {
  [key: string]: any;
}

const get = async <T = any>(url: string, params?: GetParams): Promise<T> => {
  const config: AxiosRequestConfig = {
    params,
  };
  console.log(url);

  try {
    const response: AxiosResponse<T> = await axiosInstance.get(url, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getService = {
  get,
};

export default getService;
