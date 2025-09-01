// hooks/useMovieDetail.ts
import {
  clearMovieDetail,
  fetchMovieDetail,
} from '../../../redux/slices/moviesSlice';
import useReduxStore from '../../../hooks/useReduxStore';
import {useEffect} from 'react';
import {Linking, Alert} from 'react-native';

export const useMovieDetail = (id: number) => {
  const {dispatch, getState, navigation} = useReduxStore();
  const {movieDetail, loading} = getState('movies');

  useEffect(() => {
    if (id) {
      dispatch(fetchMovieDetail(id));
    }
    return () => {
      dispatch(clearMovieDetail());
    };
  }, [id]);

  function goBack() {
    navigation.goBack();
  }

  // New function to open link
  async function openLink() {
    let url = movieDetail?.homepage;

    console.log(url);
    
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert('Invalid URL', `Cannot open this link: ${url}`);
      }
    } catch (error) {
      console.error('Failed to open URL:', error);
    }
  }

  function genresColors(index: number) {
    switch (index) {
      case 0:
        return '#10B981'; // green
      case 1:
        return '#EC4899'; // pink
      case 2:
        return '#6366F1'; // indigo
      case 3:
        return '#F59E0B'; // amber
      case 4:
        return '#EF4444'; // red
      case 5:
        return '#3B82F6'; // blue
      case 6:
        return '#8B5CF6'; // purple
      case 7:
        return '#FBBF24'; // yellow
      case 8:
        return '#14B8A6'; // teal
      case 9:
        return '#F472B6'; // rose
      default:
        return '#999999'; // gray
    }
  }

  return {movieDetail, loading, goBack, openLink, genresColors};
};
