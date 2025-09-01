import React, { useState } from 'react';
import {
  View,
  FlatList,
  FlatListProps,
  RefreshControl,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import utils from '../utils';
import CustomSkeleton from './CustomSkeleton';

// Omit renderItem from FlatListProps, since we use our own RenderItem
interface CustomFlatListProps<ItemT> extends Omit<FlatListProps<ItemT>, 'renderItem'> {
  loading?: boolean;
  isLoadingMore?: boolean;
  RenderItem: (props: { item: ItemT; index: number }) => React.ReactElement;
}

export default function CustomFlatList<ItemT>({
  data,
  loading = false,
  refreshing = false,
  onRefresh,
  onEndReached,
  isLoadingMore = false,
  RenderItem,
  numColumns = 1,
  contentContainerStyle = {},
  ...rest
}: CustomFlatListProps<ItemT>) {
  const [reachedEnd, setReachedEnd] = useState(false);

  const handleEndReached = () => {
    if (!reachedEnd && onEndReached) {
      setReachedEnd(true);
      onEndReached();
    }
  };

  const renderListItem = ({ item, index }: { item: ItemT; index: number }) => (
    <CustomSkeleton isLoading={loading}>
      {RenderItem({ item, index })}
    </CustomSkeleton>
  );

  const renderFooter = () => {
    if (loading) return null;

    if (isLoadingMore) {
      return (
        <View style={{ padding: 16, alignItems: 'center' }}>
          <ActivityIndicator size="small" />
        </View>
      );
    }

    if (reachedEnd && onEndReached && (data?.length ?? 0) > 6) {
      return (
        <TouchableOpacity
          onPress={onEndReached}
          style={{ padding: 16, alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', color: 'blue' }}>Load More</Text>
        </TouchableOpacity>
      );
    }

    return null;
  };

  const displayData = loading
    ? (Array.from({ length: 5 }, (_, i) => ({ id: `${i}` })) as ItemT[])
    : data;

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={displayData}
        keyExtractor={utils.keyExtractor}
        renderItem={renderListItem}
        numColumns={numColumns}
        onEndReached={handleEndReached}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.2}
        refreshControl={
          onRefresh ? (
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          ) : undefined
        }
        ListFooterComponent={renderFooter}
        contentContainerStyle={
          contentContainerStyle || { marginTop: 10, paddingHorizontal: 10 }
        }
        style={{ flex: 1 }}
        {...rest} // ✅ pass all other FlatList props
      />
    </View>
  );
}
