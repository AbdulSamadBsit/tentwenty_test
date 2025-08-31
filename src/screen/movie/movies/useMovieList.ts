// hooks/useMovieList.ts
import {useEffect, useState} from 'react';
import axios from 'axios';
import useReduxStore from '../../../hooks/useReduxStore';
import {fetchUpcomingMovies} from '../../../redux/slices/moviesSlice';

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
}

interface MovieApiResponse {
  results: Movie[];
}

const API_KEY = '123456abcdefg'; // replace with your TMDb key
const BASE_URL = 'https://api.themoviedb.org/3';

export const useMovieList = () => {
  const {dispatch, theme, navigation} = useReduxStore();

  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    dispatch(fetchUpcomingMovies())
      .unwrap()
      .then(res => {
        setMovies(res);
        setLoading(false);
      })
      .catch(e => {
        console.log(e);
        setLoading(false);
      });
  };

  return {movies, loading, error};
};
