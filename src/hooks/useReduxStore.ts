// useReduxStore.ts
import {useSelector, useDispatch, TypedUseSelectorHook} from 'react-redux';
import {AppDispatch, RootState} from '../redux/store';
import {DarkTheme, LightTheme} from '../themes';
import { useNavigation } from '@react-navigation/native';

// Custom hook to use Redux store with type safety
const useReduxStore = () => {
  const dispatch = useDispatch<AppDispatch>();
  const getState = <K extends keyof RootState>(key: K): RootState[K] =>
    useSelector((state: RootState) => state[key]);

  const navigation = useNavigation()

  const currentTheme = getState('theme');
  const theme = currentTheme.theme === 'dark' ? DarkTheme : LightTheme;

  return {dispatch, getState, theme, navigation, currentTheme};
};

export default useReduxStore;
