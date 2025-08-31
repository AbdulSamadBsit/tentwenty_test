import {useState} from 'react';
import {forgotPasswordAction, loginAction} from '../../redux/slices/auth';
import useReduxStore from '../../hooks/useReduxStore';
import createStyles from './styles';
import { SCREENS } from '../../constants';

const useAuth = () => {
  const {dispatch, theme, navigation} = useReduxStore();

  const [email, setEmail] = useState( __DEV__? "shohab@yopmail.com": '');
  const [password, setPassword] = useState( __DEV__? "12345678": '');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [emailError, setEmailError] = useState('');
  const [loading, setLoading] = useState(false); // optional loading state

  const styles = createStyles(theme);

  const validateEmail = (value: string) => {
    const regex = /^\S+@\S+\.\S+$/;
    if (!regex.test(value)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    validateEmail(value);
  };

  const handleLogin = async () => {
    if (!email || !password) {
      setEmailError('Email and password are required.');
      return;
    }

    try {
      setLoading(true);
      await dispatch(loginAction({email, password})).unwrap(); // unwrap gives raw response or throws
      console.log('Login successful!');
      navigation.navigate(SCREENS.PROFILE_STACK);

      // navigation.navigate('Home'); // optionally redirect
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleForgetPassword = async () => {
    if (!email) {
      setEmailError('Email are required.');
      return;
    }

    try {
      setLoading(true);
      await dispatch(forgotPasswordAction({email, password})).unwrap(); // unwrap gives raw response or throws
      console.log('Login successful!');

      // navigation.navigate('Home'); // optionally redirect
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setLoading(false);
    }
  };

  function moveForgetPassword() {
    navigation.navigate('ForgetPassword');
  }

  function moveLogin() {
    navigation.navigate('Login');
  }

  function moveSignUp() {
    navigation.navigate('SignUp');
  }

  return {
    theme,
    styles,
    email,
    password,
    secureText,
    confirmPassword,
    emailError,
    loading,
    setEmail,
    moveLogin,
    moveSignUp,
    handleLogin,
    setPassword,
    setSecureText,
    handleEmailChange,
    setConfirmPassword,
    moveForgetPassword,
    handleForgetPassword,
  };
};

export default useAuth;
