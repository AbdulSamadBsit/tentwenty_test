// hooks/useCategory.ts
import {useEffect} from 'react';

import useReduxStore from '../../../hooks/useReduxStore';
import {fetchCategories} from '../../../redux/slices/moviesSlice';

export const useCategory = () => {
  const {dispatch, getState, navigation} = useReduxStore();

  const {categories, loading, error} = getState('movies');

  useEffect(() => {
    onRefetch();
  }, []);

  function onRefetch() {
    dispatch(fetchCategories());
  }

  return {
    onRefetch,
    categories,
    loading,
    error,
  };
};
