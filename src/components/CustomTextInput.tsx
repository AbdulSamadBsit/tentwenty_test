import React, {forwardRef, useState} from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TextInputProps,
  TextInput as RNTextInput,
  TouchableOpacity,
} from 'react-native';
import useReduxStore from '../hooks/useReduxStore';
import Icon, {Icons} from './Icons';

interface CustomTextInputProps extends TextInputProps {
  label?: string;
  error?: string;
}

const CustomTextInput = forwardRef<RNTextInput, CustomTextInputProps>(
  ({label, error, secureTextEntry, ...props}, ref) => {
    const {theme} = useReduxStore();

    const styles = createStyles(theme);

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const isPasswordField = secureTextEntry === true;


    

    const togglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible);
    };

    return (
      <View style={styles.container}>
        {label && <Text style={styles.label}>{label}</Text>}
        <View style={styles.inputWrapper}>
          <TextInput
            ref={ref}
            style={[styles.input, error && styles.inputError]}
            placeholderTextColor="#888"
            secureTextEntry={isPasswordField && !isPasswordVisible}
            {...props}
          />
          {isPasswordField && (
            <TouchableOpacity
              onPress={togglePasswordVisibility}
              style={styles.icon}>
              <Icon
                type={Icons.Feather}
                name={isPasswordVisible ? 'eye' : 'eye-off'}
                size={20}
                color={theme.colors.primary}

              />
            </TouchableOpacity>
          )}
        </View>
        {error && <Text style={styles.errorText}>{error}</Text>}
      </View>
    );
  },
);

const createStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      marginVertical: 10,
    },
    label: {
      fontSize: 14,
      marginBottom: 4,
      color: theme.colors.text,
    },
    inputWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      backgroundColor: '#fff',
    },
    input: {
      flex: 1,
      height: 48,
      paddingHorizontal: 12,
      fontSize: 16,
    },
    inputError: {
      borderColor: 'red',
    },
    icon: {
      paddingHorizontal: 12,
    },
    errorText: {
      color: 'red',
      fontSize: 12,
      marginTop: 4,
    },
  });

export default CustomTextInput;
