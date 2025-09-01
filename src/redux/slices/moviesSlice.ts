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
  genre: string;
}

export interface MovieDetail extends Movie {
  backdrop_path?: string;
  runtime?: number;
  vote_average?: number;
  genres?: { id: number; name: string }[];
}

export interface MovieCardProps {
  item: Movie;
}

export interface Category {
  id: number;
  name: string;
}

export interface CategoryCardProps {
  item: Category;
}

interface MoviesState {
  movies: Movie[];
  categories: Category[];
  searchResults: Movie[];
  movieDetail: MovieDetail | null;
  loading: boolean;
  error: string | null;
}

const initialState: MoviesState = {
  movies: [],
  categories: [],
  searchResults: [],
  movieDetail: null,
  loading: false,
  error: null,
};

// 🔹 Upcoming Movies
export const fetchUpcomingMovies = createAsyncThunk<Movie[]>(
  API.MOVIE.UPCOMING,
  async (_, thunk) => {
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

// 🔹 Movie Categories
export const fetchCategories = createAsyncThunk<Category[]>(
  API.MOVIE.CATEGORIES,
  async (_, thunk) => {
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
  async (query, thunk) => {
    try {
      const response = await getService.get(API.MOVIE.SEARCH, {
        api_key: API.KEY,
        query,
      });
      return response.results as Movie[];
    } catch (error: any) {
      throw utils.showResponseError(error);
    }
  },
);

// 🔹 Movie Detail
export const fetchMovieDetail = createAsyncThunk<MovieDetail, number>(
  API.MOVIE.DETAIL,
  async (movieId, thunk) => {
    try {
      const response = await getService.get(`${API.MOVIE.DETAIL}${movieId}`, {
        api_key: API.KEY,
      });
      thunk.dispatch(moviesSlice.actions.saveMovieDetail(response));
      return response as MovieDetail;
    } catch (error) {
      throw utils.showResponseError(error);
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
    clearMovieDetail: state => {
      state.movieDetail = null;
    },
    saveMovies: (state, action: PayloadAction<Movie[]>) => {
      state.movies = action.payload;
    },
    saveCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
    saveSearchResults: (state, action: PayloadAction<Movie[]>) => {
      state.searchResults = action.payload;
    },
    saveMovieDetail: (state, action: PayloadAction<MovieDetail>) => {
      state.movieDetail = action.payload;
    },
  },
  extraReducers: builder => {
    // 🔹 Upcoming Movies
    builder
      .addCase(fetchUpcomingMovies.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUpcomingMovies.fulfilled, state => {
        state.loading = false;
      })
      .addCase(fetchUpcomingMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch upcoming movies';
      });

    // 🔹 Categories
    builder
      .addCase(fetchCategories.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, state => {
        state.loading = false;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch categories';
      });

    // 🔹 Search
    builder
      .addCase(searchMovies.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.searchResults = action.payload;
      })
      .addCase(searchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to search movies';
      });

    // 🔹 Movie Detail
    builder
      .addCase(fetchMovieDetail.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovieDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.movieDetail = action.payload;
      })
      .addCase(fetchMovieDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch movie details';
      });
  },
});

export const {
  clearMovies,
  clearSearch,
  clearMovieDetail,
  saveMovies,
  saveCategories,
  saveSearchResults,
  saveMovieDetail,
} = moviesSlice.actions;

export default moviesSlice.reducer;
