// store.ts
import { persistStore, persistReducer } from 'redux-persist';
import { configureStore, combineReducers, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

import loaderReducer from './slices/loader';
import themeReducer from './slices/theme';
import moviesReducer from './slices/moviesSlice';

// Define the root state interface
export interface RootState {
  loader: ReturnType<typeof loaderReducer>;
  theme: ReturnType<typeof themeReducer>;
  movies: ReturnType<typeof moviesReducer>;

}

// Persist config
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

// Combine reducers
const appReducer = combineReducers({
  loader: loaderReducer,
  theme: themeReducer,
  movies: moviesReducer,
});

// Root reducer with reset logic
const rootReducer = (state: RootState | undefined, action: PayloadAction<any>) => {
  if (action.type === 'auth/removeAccessToken') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

// Wrap with persistReducer
const persistedReducer = persistReducer<ReturnType<typeof rootReducer>>(persistConfig, rootReducer);

// Configure store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
  devTools: true,
});

// Export persistor
export const persistor = persistStore(store);

// Infer types
export type AppDispatch = typeof store.dispatch;
