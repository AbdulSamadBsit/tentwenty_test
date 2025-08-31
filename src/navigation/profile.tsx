import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from '../constants';
import {Profile, EditProfile, ChangePassword, DeleteAccount} from '../screen/profile';


function ProfileNavigation() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator  screenOptions={{headerShown: false}}>
      <Stack.Screen name={SCREENS.Profile} component={Profile} />
      <Stack.Screen name={SCREENS.EditProfile} component={EditProfile} />
      <Stack.Screen name={SCREENS.ChangePassword} component={ChangePassword} />
      <Stack.Screen name={SCREENS.DeleteAccount} component={DeleteAccount} />
    </Stack.Navigator>
  );
}

export default ProfileNavigation;
