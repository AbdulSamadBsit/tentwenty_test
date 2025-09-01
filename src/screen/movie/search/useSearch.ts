// hooks/useSearch.ts
import {useEffect, useState} from 'react';

import useReduxStore from '../../../hooks/useReduxStore';
import {fetchCategories, searchMovies} from '../../../redux/slices/moviesSlice';

export const useSearch = () => {
  const {dispatch, getState, navigation} = useReduxStore();

  const [searchResults, setSearchResults] = useState([]);

  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');

  const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(
    null,
  );

  useEffect(() => {
    if (!query) {
      setSearchResults([]);
      return;
    }

    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    const timer = setTimeout(() => {
      onRefetch(query);
    }, 500); // 500ms debounce

    setDebounceTimer(timer);

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [query]);

  function onRefetch(text?: string) {
    console.log('onRefetch');

    let param = text || '';
    setLoading(true);
    dispatch(searchMovies(param))
      .unwrap()
      .then(res => {
        setLoading(false);
        setSearchResults(res || []);
      })
      .catch(err => {
        setLoading(false);
        console.error(err);
      });
  }

  function onClear() {
    setQuery('');
    setSearchResults([]);
    onRefetch();
  }

  return {
    onRefetch,
    searchResults,
    loading,
    setLoading,
    query,
    setQuery,
    onClear
  };
};
