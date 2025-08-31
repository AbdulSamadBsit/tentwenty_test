import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import patchService from '../services/patch.services'; // uses patch with token
import postService from '../services/post.services';   // uses post with token
import { API, CONSTANTS } from '../../constants';
import utils from '../../utils';

interface AuthState {
  accessToken: string | null;
}

const initialState: AuthState = {
  accessToken: null,
};

// Generic thunk input and output types
type RequestPayload = Record<string, any>;
type ResponseType = any; // replace with actual API response type if known

export const loginAction = createAsyncThunk<ResponseType, RequestPayload>(
  API.AUTH. LOGIN,
  async (postData, thunk) => {
    try {
      const response = await postService.post(API.AUTH.LOGIN, postData);
      return response;
    } catch (error) {
      throw utils.showResponseError(error);
    }
  }
);

export const signupAction = createAsyncThunk<ResponseType, RequestPayload>(
  API.AUTH.SIGN_UP,
  async (data, thunk) => {
    try {
      const response = await patchService.patch(API.AUTH.SIGN_UP, data);
      thunk.dispatch(authSlice.actions.saveSignUpToken(response?.token));
      return response;
    } catch (error) {
      throw utils.showResponseError(error);
    }
  }
);

export const verifyOtpAction = createAsyncThunk<ResponseType, RequestPayload>(
  API.AUTH.VERIFY_OTP,
  async (data) => {
    try {
      const response = await patchService.patch(API.AUTH.VERIFY_OTP, data);
      return response;
    } catch (error) {
      throw utils.showResponseError(error);
    }
  }
);

export const forgotPasswordAction = createAsyncThunk<ResponseType, RequestPayload>(
  API.AUTH.FORGOT_PASSWORD,
  async (data) => {
    try {
      const response = await postService.post(API.AUTH.FORGOT_PASSWORD, data);
      return response;
    } catch (error) {
      throw utils.showResponseError(error);
    }
  }
);

export const resetPasswordAction = createAsyncThunk<ResponseType, RequestPayload>(
  API.AUTH.RESET_PASSWORD,
  async (data) => {
    try {
      const response = await patchService.patch(API.AUTH.RESET_PASSWORD, data);
      return response;
    } catch (error) {
      throw utils.showResponseError(error);
    }
  }
);

export const logoutAction = createAsyncThunk<ResponseType, void>(
  API.AUTH.LOGOUT,
  async (_, thunk) => {
    try {
      const response = await postService.post(API.AUTH.LOGOUT, {});
      thunk.dispatch(authSlice.actions.removeAccessToken());
      return response;
    } catch (error) {
      thunk.dispatch(authSlice.actions.removeAccessToken());
      throw utils.showResponseError(error);
    }
  }
);

export const deleteAccountAction = createAsyncThunk<ResponseType, void>(
  API.AUTH.DEACTIVATE,
  async () => {
    try {
      const response = await postService.post(API.AUTH.DEACTIVATE, {});
      return response;
    } catch (error) {
      throw utils.showResponseError(error);
    }
  }
);

// LocalStorage helpers
const saveAccessTokenToStorage = async (accessToken: string) => {
  await AsyncStorage.setItem(CONSTANTS.CACHE_KEYS.ACCESS_TOKEN, JSON.stringify(accessToken));
};

const removeAccessTokenFromStorage = async () => {
  await AsyncStorage.removeItem(CONSTANTS.CACHE_KEYS.ACCESS_TOKEN);
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
      saveAccessTokenToStorage(action.payload);
    },
    saveSignUpToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
      saveAccessTokenToStorage(action.payload);
    },
    removeAccessToken: (state) => {
      state.accessToken = null;
      removeAccessTokenFromStorage();
    },

  },
});

export const {
  saveAccessToken,
  removeAccessToken,
  saveSignUpToken
} = authSlice.actions;

export default authSlice.reducer;
