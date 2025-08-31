import React, {useRef} from 'react';
import {
  View,
  TextInput as RNTextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import useAuth from './useAuth';
import CustomButton from '../../components/CustomButton';
import CustomHeader from '../../components/CustomHeader';

const SignUp = () => {
  const {
    email,
    styles,
    password,
    moveLogin,
    setPassword,
    handleLogin,
    confirmPassword,
    handleEmailChange,
    setConfirmPassword,
  } = useAuth();
  const passwordRef = useRef<RNTextInput>(null);
  const confirmPasswordRef = useRef<RNTextInput>(null);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Sign Up</Text>

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
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        returnKeyType="done"
      />

      <CustomTextInput
        ref={confirmPasswordRef}
        label="Password"
        placeholder="Enter your password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        returnKeyType="done"
      />

      <CustomButton
        title="Submit"
        onPress={handleLogin}
        // loading={loading}
      />

      <TouchableOpacity
        onPress={moveLogin}
        activeOpacity={0.85}
        style={styles.createAccountView}>
        <Text style={styles.text}>You have a already account </Text>
        <Text style={styles.createAccount}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
