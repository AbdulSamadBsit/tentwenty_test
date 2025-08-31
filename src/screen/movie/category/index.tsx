import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import Icon, {Icons} from '../../../components/Icons';
import CustomFlatList from '../../../components/CustomFlatList';
import {useCategory} from './useCategory';
import {COLORS} from '../../../constants';

const {width} = Dimensions.get('window');

// Type for category item
interface Category {
  id: string;
  name: string;
  image: string;
}

interface CategoryCardProps {
  item: Category;
}

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
      {/* Search Bar */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SearchResultsScreen');
        }}
        style={styles.searchContainer}>
        <Icon
          type={Icons.Ionicons}
          name="search-outline"
          size={20}
          color="#666"
          style={styles.searchIcon}
        />
        <Text style={styles.searchPlaceholder}>TV shows, movies and more</Text>

        <Icon
          type={Icons.Ionicons}
          name="close-outline"
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
        columnWrapperStyle={{justifyContent: 'space-between'}}
        contentContainerStyle={{paddingBottom: 20, paddingHorizontal: 10}}
        showsVerticalScrollIndicator={false}
        RenderItem={({item}) => {
          return <CategoryCard item={item} />;
        }}
      />
    </SafeAreaView>
  );
};

export default CategoriesScreen;

const CARD_WIDTH = (width - 48) / 2; // two columns with spacing

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f2f2f2',
    borderRadius: 30,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 6,
  },
  searchPlaceholder: {
    fontSize: 15,
    color: '#999',
    flex: 1,
  },
  card: {
    marginBottom: 16,
    width: CARD_WIDTH,
    height: 100,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: COLORS.primary,
    borderRadius: 12,
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    padding: 6,
  },
  title: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
  },
});
