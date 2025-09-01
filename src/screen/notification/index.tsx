import React, {useEffect} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import useNotification from './useNatification';

import CustomHeader from '../../components/CustomHeader';
import CustomSkeleton from '../../components/CustomSkeleton';

export default function Notification() {
  const {styles, listViewData, isLoading, setIsLoading} = useNotification();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  const renderItem = () => {
    let url = {
      uri: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600',
    };

    return (
      <CustomSkeleton isLoading={isLoading}>
        <View style={styles.renderItemContainer}>
          <TouchableOpacity activeOpacity={0.85}>
            <Image source={url} style={styles.img} />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.contentContainer}>
            <View>
              <Text>Notification Title</Text>
              <Text style={styles.notificationBody}>
                Notification Complete Detail Here
              </Text>
            </View>

            <Text style={styles.notificationTimeText} numberOfLines={1}>
              12/05/2025
            </Text>
          </TouchableOpacity>
        </View>
      </CustomSkeleton>
    );
  };

  const renderHiddenItem = () => (
    <View style={styles.rowBack}>
      <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnLeft]}>
        <Text style={styles.editText}>Read</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnRight]}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{flex: 1}}>
      <CustomHeader title="Notification" />

      <SwipeListView
        useFlatList={true}
        data={
          isLoading
            ? Array.from({length: 70}, (_, i) => ({id: `${i}`}))
            : listViewData
        }
        disableRightSwipe={true}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={0}
        rightOpenValue={-155}
        previewRowKey={'0'}
        previewOpenValue={0}
        previewOpenDelay={3000}
        refreshing={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
