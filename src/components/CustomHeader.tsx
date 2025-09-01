import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon, {Icons} from './Icons';
import useReduxStore from '../hooks/useReduxStore';

interface CustomHeaderProps {
  title: string; // 🔹 required
  leftIcon?: string; // optional
  onLeftPress?: () => void; // optional
  rightIcon?: string; // optional
  onRightPress?: () => void; // optional
}

const CustomHeader: React.FC<CustomHeaderProps> = ({
  title,
  leftIcon = 'arrow-back-ios',
  onLeftPress,
  rightIcon,
  onRightPress,
}) => {
  const {navigation} = useReduxStore();

  function onPress() {
    if (onLeftPress) {
      onLeftPress();
    } else {
      navigation.goBack();
    }
  }

  function onRight() {
    if (onRightPress) {
      onRightPress();
    } else {
      navigation.navigate('Notification');
    }
  }

  return (
    <View style={styles.container}>
      {leftIcon ? (
        <Icon type={Icons.MaterialIcons} name={leftIcon} onPress={onPress} />
      ) : (
        <View style={styles.iconContainer} />
      )}

      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>

      {rightIcon ? (
        <Icon
          type={Icons.Ionicons}
          name={rightIcon}
          size={24}
          onPress={onRight}
        />
      ) : (
        <View style={styles.iconContainer} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 10,
    paddingHorizontal: 10,
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
