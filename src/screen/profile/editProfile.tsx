//import liraries
import React, {Component} from 'react';
import {View, Image} from 'react-native';
import useProfile from './useProfile';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import Icon, {Icons} from '../../components/Icons';
import CustomHeader from '../../components/CustomHeader';

// create a component
const EditProfile = () => {
  const {styles, image} = useProfile();
  return (
    <View style={styles.container}>
      <CustomHeader title="Edit Profile" />

      <View style={[styles.card, {alignSelf: 'center', borderRadius: 100}]}>
        <Image source={image} style={styles.editProfileImage} />
        <View style={[styles.card, styles.editIcon]}>
          <Icon type={Icons.Ionicons} name="camera" />
        </View>
      </View>
      <View style={styles.card}>
        <CustomTextInput placeholder="First Name" label="First Name" />
        <CustomTextInput placeholder="Last Name" label="Last Name" />
        <CustomTextInput placeholder="Email" label="Email" />
      </View>
      <CustomButton
        title="Edit Profile"
        onPress={() => {}}
        buttonStyle={styles.btnStyle}
      />
    </View>
  );
};

export default EditProfile;
