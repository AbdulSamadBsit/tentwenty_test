import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {CategoryCardProps} from '../../../redux/slices/moviesSlice';
import CustomFlatList from '../../../components/CustomFlatList';
import CustomHeader from '../../../components/CustomHeader';
import Icon, {Icons} from '../../../components/Icons';
import {useCategory} from './useCategory';
import styles from './styles';

const CategoryCard: React.FC<CategoryCardProps> = ({item}) => {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.image}>
        <View style={styles.overlay}>
          <Text style={styles.title}>{item.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const CategoriesScreen: React.FC = ({navigation, route}: any) => {
  const {onRefetch, categories, loading, error} = useCategory();

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title="Categories" />

      {/* Search Bar */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SearchResultsScreen');
        }}
        style={styles.searchContainer}>
        <Icon
          type={Icons.MaterialIcons}
          name="search"
          size={20}
          color="#666"
          style={styles.searchIcon}
        />
        <Text style={styles.searchPlaceholder}>TV shows, movies and more</Text>

        <Icon
          type={Icons.MaterialIcons}
          name="close"
          size={22}
          color="#666"
        />
      </TouchableOpacity>

      {/* Categories Grid */}

      <CustomFlatList
        data={categories || []}
        loading={loading}
        onRefresh={onRefetch}
        numColumns={2}
        columnWrapperStyle={{justifyContent: "space-evenly"}}
        contentContainerStyle={{paddingBottom: 20}}
        showsVerticalScrollIndicator={false}
        RenderItem={({item}) => {
          return <CategoryCard item={item} />;
        }}
      />
    </SafeAreaView>
  );
};

export default CategoriesScreen;
