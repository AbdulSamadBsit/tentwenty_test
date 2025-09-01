import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import Icon, {Icons} from '../../../components/Icons';
import CustomFlatList from '../../../components/CustomFlatList';
import CustomHeader from '../../../components/CustomHeader';
import {MovieCardProps} from '../../../redux/slices/moviesSlice';
import {useNavigation} from '@react-navigation/native';
import {API} from '../../../constants';
import {useSearch} from './useSearch';
import styles from './styles';

const MovieCard: React.FC<MovieCardProps> = ({item}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.movieRow}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('MovieDetailsScreen', {movie: item});
        }}>
        <Image
          source={{
            uri: API.IMAGE_URL + item?.poster_path,
          }}
          style={styles.poster}
        />
      </TouchableOpacity>
      <View style={styles.movieInfo}>
        <Text style={styles.movieTitle}>{item.title}</Text>
        <Text style={styles.genre}>{item.genre}</Text>
      </View>
      <TouchableOpacity>
        <Icon
          type={Icons.Ionicons}
          name="ellipsis-vertical"
          size={20}
          color="#888"
        />
      </TouchableOpacity>
    </View>
  );
};

const SearchResultsScreen: React.FC = () => {
  const {searchResults, loading, onRefetch, query, setQuery, onClear} =
    useSearch();

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title="Search Results" />
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Icon
          type={Icons.MaterialIcons}
          name="search"
          size={20}
          color="#666"
          style={styles.searchIcon}
        />
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Search"
          placeholderTextColor="#999"
          style={styles.searchInput}
        />
        <TouchableOpacity onPress={onClear}>
          <Icon
            type={Icons.MaterialIcons}
            name="close"
            size={22}
            color="#666"
            onPress={onClear}
          />
        </TouchableOpacity>
      </View>

      {/* Top Results */}
      <Text style={styles.sectionTitle}>Top Results</Text>

      <CustomFlatList
        data={searchResults || []}
        loading={loading}
        onRefresh={onRefetch}
        RenderItem={({item}) => {
          return <MovieCard item={item} />;
        }}
      />
    </SafeAreaView>
  );
};

export default SearchResultsScreen;
