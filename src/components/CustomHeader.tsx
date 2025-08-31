import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native';
import Icon, {Icons} from './Icons';
import useReduxStore from '../hooks/useReduxStore';
import {SCREENS} from '../constants';

const CustomHeader = ({
  title = '',
  leftIcon = 'arrow-back-sharp',
  onLeftPress  ,
  rightIcon,
  onRightPress,
}) => {
  const {dispatch, theme, navigation} = useReduxStore();
  function onPress() {
    if (onLeftPress) {
      onLeftPress();
    } else {
      navigation.goBack();
    }
  }

  function onRight() {
    if (onRightPress) {
      rightIcon();
    } else {
      navigation.navigate(SCREENS.Notification);
    }
  }

  return (
    <View style={styles.container}>
      <Icon type={Icons.Ionicons} name={leftIcon} onPress={onPress} />

      <Text
        style={[styles.title, {color: theme.colors.text}]}
        numberOfLines={1}>
        {title}
      </Text>

      <Icon
        type={Icons.Ionicons}
        name={'notifications'}
        size={24}
        onPress={onRight}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: Platform.OS === 'ios' ? 100 : 70,
    // paddingTop: Platform.OS === 'ios' ? 50 : 20,
    paddingVertical: 10,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 10,
  },
  iconContainer: {
    width: 40,
    alignItems: 'center',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default CustomHeader;
