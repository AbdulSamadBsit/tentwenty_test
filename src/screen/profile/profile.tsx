//import liraries
import React from 'react';
import {View, Text, Image, FlatList, Switch} from 'react-native';
import useProfile from './useProfile';
import Icon, {Icons} from '../../components/Icons';
import CustomHeader from '../../components/CustomHeader';
import AlertModal from '../../components/CustomAlertModal';

// create a component
const Profile = () => {
  const {
    styles,
    theme,
    data,
    image,
    isModal,
    setModal,
    isEnabled,
    setIsEnabled,
    toggleSwitch,
  } = useProfile();

  function renderItem({item, index}) {

    return (
      <View style={styles.screen} key={index} >
        <View style={styles.row}>
          <Icon type={Icons.Ionicons} name={item.icon} style={styles.icon} />
          <Text style={styles.text}>{item.title}</Text>
        </View>

        {item.title === 'Theme' ? (
          <View style={styles.switchWrapper}>
            <Switch
              trackColor={{false: '#767577', true: theme.colors.background}}
              thumbColor={isEnabled ? theme.colors.primary : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        ) : (
          <Icon
            type={Icons.Ionicons}
            name={'chevron-forward-outline'}
            onPress={item.navigate}
          />
        )}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CustomHeader title="Delete Account" />

      <View style={[styles.card, styles.profile_view]}>
        <Image source={image} style={styles.profile_image} />
        <View style={styles.info}>
          <Text style={styles.title}>Name</Text>
          <Text style={styles.email}>shohab@yopmail.com</Text>
          <Text style={styles.phone}>+923118296802</Text>
        </View>
      </View>

      <View style={styles.card}>
        <FlatList
          data={data}
          scrollEnabled={false}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <AlertModal
        isModalVisible={isModal}
        title={'Logout'}
        desc={"Are you sure you wan't logout?"}
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
export default Profile;
