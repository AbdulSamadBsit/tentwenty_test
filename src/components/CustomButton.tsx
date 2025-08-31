import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
} from 'react-native';
import useReduxStore from '../hooks/useReduxStore';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress = () => {},
  loading = false,
  disabled = false,
  buttonStyle,
  textStyle,
}) => {
  const isDisabled = disabled || loading;

  const {theme} = useReduxStore();

  const styles = createStyles(theme);

  return (
    <TouchableOpacity
      style={[styles.button, isDisabled && styles.disabledButton, buttonStyle]}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={isDisabled}>
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const createStyles = (theme: any) =>
  StyleSheet.create({
    button: {
      height: 48,
      backgroundColor: theme.colors.primary,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 16,
      marginVertical: 10,
    },
    disabledButton: {
      backgroundColor: '#aaa',
    },
    buttonText: {
      color: theme.colors.lightColor,
      fontSize: 16,
      fontWeight: '600',
    },
  });

export default CustomButton;
