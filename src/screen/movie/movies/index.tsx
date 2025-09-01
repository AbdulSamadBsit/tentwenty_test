import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {MovieCardProps} from '../../../redux/slices/moviesSlice';
import CustomFlatList from '../../../components/CustomFlatList';
import {useNavigation} from '@react-navigation/native';
import Icon, {Icons} from '../../../components/Icons';
import {API, SCREENS} from '../../../constants';
import {useMovieList} from './useMovieList';
import styles from './styles';

const MovieCard: React.FC<MovieCardProps> = ({item}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        navigation.navigate('MovieDetailsScreen', {movie: item});
      }}
      >
      <ImageBackground
        source={{
          uri: API.IMAGE_URL + item?.backdrop_path,
        }}
        style={styles.image}
        imageStyle={{borderRadius: 12}}>
        <View style={styles.overlay}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const WatchScreen: React.FC = ({navigation, route}: any) => {
  const {movies, loading, fetchMovies} = useMovieList();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Watch</Text>
        <Icon
          type={Icons.MaterialIcons}
          name="search"
          size={24}
          // color="#000"
          onPress={() => {
            navigation.navigate(SCREENS.CATEGORY);
          }}
        />
      </View>

      <CustomFlatList
        data={movies || []}
        loading={loading}
        onRefresh={fetchMovies}
        RenderItem={({item}) => {
          return <MovieCard item={item} />;
        }}
      />
    </SafeAreaView>
  );
};

export default WatchScreen;
