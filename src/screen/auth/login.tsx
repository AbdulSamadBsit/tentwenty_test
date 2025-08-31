import React, {useRef} from 'react';
import {Text, TouchableOpacity} from 'react-native';
// import {TextInput, Button, Title, HelperText} from 'react-native-paper';
import {View, TextInput as RNTextInput} from 'react-native';

import useAuth from './useAuth';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';

const Login = () => {
  const {
    email,
    styles,
    password,
    setPassword,
    moveSignUp,
    handleLogin,
    handleEmailChange,
    moveForgetPassword
  } = useAuth();
  const passwordRef = useRef<RNTextInput>(null);

  return (
    <View style={styles.container}>

      <Text style={styles.title} >Login</Text>
      <CustomTextInput
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
        returnKeyType="next"
        onSubmitEditing={() => passwordRef.current?.focus()}
        blurOnSubmit={false}
      />
      <CustomTextInput
        ref={passwordRef}
        label="Confirm Password"
        placeholder="Enter your Confirm password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        returnKeyType="done"
      />
      <Text onPress={moveForgetPassword} style={styles.forgetPassword} >ForgetPassword</Text>

      <CustomButton
        title="Submit"
        onPress={handleLogin}
        // loading={loading}
      />
      <TouchableOpacity onPress={moveSignUp} style={styles.createAccountView}>
        <Text style={styles.text}>Don't have a account </Text>
        <Text style={styles.createAccount}>Sign In </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
