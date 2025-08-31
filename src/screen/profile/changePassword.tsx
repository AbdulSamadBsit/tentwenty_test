//import liraries
import React, {Component} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import useProfile from './useProfile';
import Icon, {Icons} from '../../components/Icons';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import CustomHeader from '../../components/CustomHeader';

// create a component
const ChangePassword = () => {
  const {styles, data, image} = useProfile();

  return (
    <View style={styles.container}>
      <CustomHeader title="Change Password" />

      <View style={styles.card}>
        <CustomTextInput
          placeholder="Current Password"
          label="Current Password"
        />
        <CustomTextInput placeholder="New Password" label="New Password" />
        <CustomTextInput
          placeholder="Confirm New Password"
          label="Confirm New Password"
        />
      </View>

      <CustomButton
        title="Update"
        buttonStyle={styles.btnStyle}
        onPress={() => {}}
      />
    </View>
  );
};

//make this component available to the app
export default ChangePassword;
