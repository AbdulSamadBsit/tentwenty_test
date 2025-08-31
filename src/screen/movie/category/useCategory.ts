// hooks/useCategory.ts
import {useEffect} from 'react';

import useReduxStore from '../../../hooks/useReduxStore';
import {fetchCategories} from '../../../redux/slices/moviesSlice';

export const useCategory = () => {
  const {dispatch, getState, navigation} = useReduxStore();

  const {categories, loading, error} = getState('movies');

  // Fetch categories on mount
  useEffect(() => {
    onRefetch();

    return () => {
      // Cleanup if needed
    };
  }, []);

  function onRefetch() {
    dispatch(fetchCategories())
      .unwrap()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      });
  }

  return {
    onRefetch,
    categories,
    loading,
    error
  };
};
