// hooks/useMovieList.ts
import {fetchUpcomingMovies} from '../../../redux/slices/moviesSlice';
import useReduxStore from '../../../hooks/useReduxStore';
import {useEffect, useState} from 'react';

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
}

export const useMovieList = () => {
  const {dispatch, theme, navigation ,getState} = useReduxStore();
  const { loading, error, movies} = getState('movies');

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    dispatch(fetchUpcomingMovies()).unwrap();
  };

  return {movies, loading, error, fetchMovies};
};
