import axiosInstance from './axiosInstance'; // Adjust path
import { AxiosResponse } from 'axios';

const deleteWithToken = async <T = any>(uri: string, params?: object): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axiosInstance.delete(uri, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default {
  deleteWithToken,
};
