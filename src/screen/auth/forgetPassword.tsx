import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
// import {TextInput, Button, Title, HelperText} from 'react-native-paper';

import useAuth from './useAuth';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';

const ForgetPassword = () => {
  const {
    email,
    styles,
    moveLogin,   
    handleEmailChange,
    handleForgetPassword,
  } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <CustomTextInput
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
        returnKeyType="next"
      />

      <CustomButton
        title="Submit"
        onPress={handleForgetPassword}
        // loading={loading}
      />




      <TouchableOpacity onPress={moveLogin} style={styles.createAccountView}>
        <Text style={styles.text}>Don't have a account </Text>
        <Text style={styles.createAccount}>Sign In </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgetPassword;
