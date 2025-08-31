import axiosInstance from './axiosInstance'; // Adjust path as needed
import { AxiosRequestConfig, AxiosResponse } from 'axios';

interface RequestBody {
  [key: string]: any;
}

const patch = async <T = any>(url: string, body: RequestBody): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axiosInstance.patch(url, body);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const patchService = {
  patch,
};

export default patchService;
