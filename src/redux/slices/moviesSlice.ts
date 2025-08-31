// store/slices/moviesSlice.ts
import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import getService from '../services/get.services';
import {API} from '../../constants';
import utils from '../../utils';

// ------------------ Types ------------------
export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
}

export interface Category {
  id: number;
  name: string;
}

interface MoviesState {
  movies: Movie[];
  categories: Category[];
  searchResults: Movie[];
  loading: boolean;
  error: string | null;
}

const initialState: MoviesState = {
  movies: [],
  categories: [],
  searchResults: [],
  loading: false,
  error: null,
};

// 🔹 Upcoming Movies
export const fetchUpcomingMovies = createAsyncThunk<Movie[]>(
  API.MOVIE.UPCOMING,
  async (postData, thunk) => {
    try {
      const response = await getService.get(API.MOVIE.UPCOMING, {
        api_key: API.KEY,
      });
      thunk.dispatch(moviesSlice.actions.saveMovies(response.results));

      return response.results as Movie[];
    } catch (error: any) {
      throw utils.showResponseError(error);
    }
  },
);

// 🔹 Movie Categories (Genres)

export const fetchCategories = createAsyncThunk<Category[]>(
  API.MOVIE.CATEGORIES,
  async (postData, thunk) => {
    try {
      const response = await getService.get(API.MOVIE.CATEGORIES, {
        api_key: API.KEY,
      });
      thunk.dispatch(moviesSlice.actions.saveCategories(response.genres));

      return response.genres as Category[];
    } catch (error) {
      throw utils.showResponseError(error);
    }
  },
);

// 🔹 Movie Search
export const searchMovies = createAsyncThunk<Movie[], string>(
  API.MOVIE.SEARCH,
  async (query: string, {rejectWithValue}) => {
    try {
      const response = await getService.get(API.MOVIE.SEARCH, {
        api_key: API.KEY,
        query,
      });
      return response.results as Movie[];
    } catch (error: any) {
      return rejectWithValue(error.message || 'Failed to search movies');
    }
  },
);

// ------------------ Slice ------------------
const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    clearMovies: state => {
      state.movies = [];
      state.error = null;
      state.loading = false;
    },
    clearSearch: state => {
      state.searchResults = [];
    },
    saveMovies: (state, action) => {
      state.movies = action.payload;
    },
    saveCategories: (state, action) => {
      state.categories = action.payload;
    },
    saveSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
  },
});

export const {
  clearMovies,
  clearSearch,
  saveMovies,
  saveCategories,
  saveSearchResults,
} = moviesSlice.actions;
export default moviesSlice.reducer;
