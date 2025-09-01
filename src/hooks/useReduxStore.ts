// useReduxStore.ts
import {useSelector, useDispatch, TypedUseSelectorHook} from 'react-redux';
import {AppDispatch, RootState} from '../redux/store';
import {DarkTheme, LightTheme} from '../themes';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  MovieDetail: { id: string };
  Notification: undefined;
  // add more screens here
};
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;


// Custom hook to use Redux store with type safety
const useReduxStore = () => {
  const dispatch = useDispatch<AppDispatch>();
  const getState = <K extends keyof RootState>(key: K): RootState[K] =>
    useSelector((state: RootState) => state[key]);

  const navigation = useNavigation<NavigationProp>();

  const currentTheme = getState('theme');
  const theme = currentTheme.theme === 'dark' ? DarkTheme : LightTheme;

  return {dispatch, getState, theme, navigation, currentTheme};
};

export default useReduxStore;
