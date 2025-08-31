import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { LightTheme, DarkTheme } from '../themes';

export const useThemedStyles = (styleFunc: (theme: any) => any) => {

  const currentTheme = useSelector((state: RootState) => state.theme.theme);

  const theme = currentTheme === 'dark' ? DarkTheme : LightTheme;
  

  return useMemo(() => styleFunc(theme), [theme]);
};
