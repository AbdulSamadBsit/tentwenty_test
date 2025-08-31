import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import Modal from 'react-native-modal';
import Icon, {Icons} from './Icons';
import useReduxStore from '../hooks/useReduxStore';
import CustomButton from './CustomButton';

export default function AlertModal({
  isModalVisible,
  onAccepte,
  onCancelled,
  title,
  desc,
  danger
}) {
  const {theme} = useReduxStore();
  const styles = createStyles(theme);

  return (
    <Modal isVisible={Boolean(isModalVisible)} hasBackdrop={false}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContentContainer}>
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={onCancelled}
            style={{position: 'absolute', right: 5, top: 5}}>
            <Icon type={Icons.Ionicons} name="close" />
          </TouchableOpacity>

          <Icon
            type={Icons.Ionicons}
            name="warning"
            size={45}
            color={ danger ? "#860012":"#e6b800"}
          />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.desc}>{desc}</Text>

          <CustomButton
            title="Ok"
            buttonStyle={styles.btnStyle}
            onPress={onAccepte}
          />
          <CustomButton
            title="Cancel"
            buttonStyle={styles.btnStyle}
            onPress={onCancelled}
          />
        </View>
      </View>
    </Modal>
  );
}

const createStyles = (theme: any) =>
  StyleSheet.create({
    modalContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},

    title: {
      fontSize: 18,
      color: theme.colors.text,
      fontWeight: '600',
    },
    desc: {
      fontSize: 16,
      color: theme.colors.text + 90,
      textAlign: 'center',
    },

    modalContentContainer: {
      backgroundColor: theme.colors.lightColor,
      height: '30%',
      width: '80%',
      borderRadius: 10,
      paddingHorizontal: 20,
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    commonBtnContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
      borderRadius: 10,
      borderBottomColor: 'gray',
      backgroundColor: '#ccc',
      width: '100%',
    },
    btnStyle: {
      height: 30,
      width: '80%',
      marginVertical: 5,
    },
  });
