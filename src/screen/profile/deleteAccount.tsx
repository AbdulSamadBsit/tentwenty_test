//import liraries
import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import useProfile from './useProfile';
import Icon, {Icons} from '../../components/Icons';
import CustomButton from '../../components/CustomButton';
import CustomHeader from '../../components/CustomHeader';
import AlertModal from '../../components/CustomAlertModal';

// create a component
const DeleteAccount = () => {
  const {styles, image, theme, isModal, setModal} = useProfile();
  return (
    <View style={styles.container}>
      <CustomHeader title="Delete Account" />
      <View style={[styles.card, {alignSelf: 'center', borderRadius: 100}]}>
        <Image source={image} style={styles.profile_image} />
        <View style={styles.warning_icon}>
          <Icon
            type={Icons.Ionicons}
            name="warning"
            color={theme.colors.background}
            size={18}
          />
        </View>
      </View>

      <View style={{flex: 1}}>
        <Text style={styles.name}>User Name</Text>

        <Text style={[styles.title, {marginTop: 50}]}>
          Things to check when deleting your socount:
        </Text>

        <View>
          {Things.map((item, index) => {
            return (
              <View key={index} style={styles.row}>
                <View style={styles.dot} />
                <Text style={styles.points}>{item}</Text>
              </View>
            );
          })}
        </View>
      </View>
      <CustomButton title="Deactive Account" onPress={() => {}} />

      <Text
        onPress={() => {
          setModal(true);
        }}
        style={styles.delete_account}>
        Delete Account
      </Text>

      <AlertModal
        danger
        isModalVisible={isModal}
        title={'Delete Account'}
        desc={"Are you wan't to delete this account?"}
        onAccepte={() => {
          setModal(false);
        }}
        onCancelled={() => {
          setModal(false);
        }}
      />
    </View>
  );
};

//make this component available to the app
export default DeleteAccount;
let Things = [
  "You can't log in to application with this account after deleting it.",
  "You can't register a new account using the email address linked to this account.",
  'Your data on this application will be delete',
  'Your account, will be parmanenlty deleted in 14 days, you may reactivate it at anytime wthin this parid.',
];
