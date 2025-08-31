// loader.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the state type
interface LoaderState {
  isVisible: boolean;
}

// Initial state with type
const initialState: LoaderState = {
  isVisible: false,
};

// Create the slice
export const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    showLoader: (state) => {
      state.isVisible = true;
    },
    hideLoader: (state) => {
      state.isVisible = false;
    },
  },
});

// Export actions and reducer
export const { showLoader, hideLoader } = loaderSlice.actions;
export default loaderSlice.reducer;
