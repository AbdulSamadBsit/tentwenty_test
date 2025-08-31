import {useEffect, useState} from 'react';
import {requestUserPermission} from '../firebase/notificationService';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {DarkTheme, LightTheme} from '../themes';

const useNavigation = () => {
  const {theme} = useSelector((state: RootState) => state.theme);

  const currentTheme = theme === 'dark' ? DarkTheme : LightTheme;

  // useEffect(() => {
  //   requestUserPermission();
  // }, []);
  return {
    currentTheme
  };
};

export default useNavigation;
