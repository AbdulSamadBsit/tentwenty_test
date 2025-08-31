import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from '../constants';
import { ForgetPassword, Login, SignUp } from '../screen/auth';


function AuthNavigation() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator  screenOptions={{headerShown: false}}>
      <Stack.Screen name={SCREENS.Login} component={Login} />
      <Stack.Screen name={SCREENS.SignUp} component={SignUp} />
      <Stack.Screen name={SCREENS.ForgetPassword} component={ForgetPassword} />
    </Stack.Navigator>
  );
}

export default AuthNavigation;
