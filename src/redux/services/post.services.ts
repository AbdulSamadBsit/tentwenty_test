import axiosInstance from './axiosInstance'; // Adjust path
import { AxiosRequestConfig, AxiosResponse } from 'axios';

interface RequestParams {
  [key: string]: any;
}

const post = async <T = any>(uri: string, body: RequestParams): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axiosInstance.post(uri, body);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const formDataPost = async <T = any>(uri: string, body: FormData): Promise<T> => {
  const config: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };

  try {
    const response: AxiosResponse<T> = await axiosInstance.post(uri, body, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const Post = {
  post,
  formDataPost,
};

export default Post;
