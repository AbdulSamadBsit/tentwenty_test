//import liraries
import React, {Component, useState} from 'react';
import useReduxStore from '../../hooks/useReduxStore';
import createStyles from './styles';
import {SCREENS} from '../../constants';
import {toggleTheme} from '../../redux/slices/theme';

// create a component
const useProfile = () => {
  const [isModal, setModal] = useState(false);

  const {dispatch, theme, navigation, currentTheme} = useReduxStore();

  const [isEnabled, setIsEnabled] = useState(
    currentTheme.theme === 'dark' ? true : false,
  );

  const toggleSwitch = () => {
    changeTheme();
    setIsEnabled(previousState => !previousState);
  };

  function changeTheme() {
    dispatch(toggleTheme());
  }

  const styles = createStyles(theme);
  let image = {
    uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  };
  let data = [
    {
      id: 1,
      title: 'Edit Profile',
      icon: 'person',
      navigate: () => {
        navigation.navigate(SCREENS.EditProfile);
      },
    },
    {
      id: 2,
      title: 'Change Password',
      icon: 'build',
      navigate: () => {
        navigation.navigate(SCREENS.ChangePassword);
      },
    },
    {
      id: 3,
      title: 'De-Active Account',
      icon: 'chevron-forward-outline',
      navigate: () => {
        navigation.navigate(SCREENS.DeleteAccount);
      },
    },
    {
      id: 4,
      title: 'Privacy Policy',
      icon: 'file-tray-full-sharp',
    },
    {
      id: 5,
      title: 'Terms Condition',
      icon: 'document-text',
    },
    {
      id: 5,
      title: 'Permsission',
      icon: 'chevron-forward-outline',
    },
    {
      id: 5,
      title: 'Theme',
      icon: 'color-palette',
    },
    {
      id: 5,
      title: 'Logout',
      icon: 'exit',
      navigate: () => {
        setModal(true);
      },
    },
  ];
  return {
    styles,
    theme,
    data,
    image,
    isModal,
    setModal,
    isEnabled,
    setIsEnabled,
    toggleSwitch,
  };
};

// define your styles

//make this component available to the app
export default useProfile;
