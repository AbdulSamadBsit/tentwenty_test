import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Icon, {Icons} from '../../../components/Icons';
import {useNavigation} from '@react-navigation/native';
import {API, SCREENS} from '../../../constants';
import CustomFlatList from '../../../components/CustomFlatList';
import {useMovieList} from './useMovieList';

// Type for movie data
interface Movie {
  id: string;
  title: string;
  image: string;
}

interface MovieCardProps {
  item: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({item}) => {
  const navigation = useNavigation();  

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        navigation.navigate('MovieDetailsScreen', {movie: item});
      }}>
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

  const {movies, loading, error} = useMovieList();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Watch</Text>
        <Icon
          type={Icons.Ionicons}
          name="search-outline"
          size={24}
          color="#000"
          onPress={() => {
            navigation.navigate(SCREENS.PROFILE_STACK);
          }}
        />
      </View>

      <CustomFlatList
        data={movies || []}
        loading={loading}
        onRefresh={() => {}}
        RenderItem={({item}) => {
          return <MovieCard item={item} />;
        }}
      />
    </SafeAreaView>
  );
};

export default WatchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#0c1a36',
  },
  card: {
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 180,
    justifyContent: 'flex-end',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 10,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});
