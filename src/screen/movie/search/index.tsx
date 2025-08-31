import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon, {Icons} from '../../../components/Icons';

// Type for search result movie
interface MovieResult {
  id: string;
  title: string;
  genre: string;
  image: string;
}

const searchResults: MovieResult[] = [
  {
    id: '1',
    title: 'Timless',
    genre: 'Fantasy',
    image:
      'https://m.media-amazon.com/images/M/MV5BMzI1NDM2NjM5OV5BMl5BanBnXkFtZTgwNzcxNzEzOTE@._V1_.jpg',
  },
  {
    id: '2',
    title: 'In Time',
    genre: 'Sci-Fi',
    image:
      'https://m.media-amazon.com/images/M/MV5BMTQ2NjM5NTk5MF5BMl5BanBnXkFtZTcwOTI0NDE5Ng@@._V1_.jpg',
  },
  {
    id: '3',
    title: 'A Time To Kill',
    genre: 'Crime',
    image:
      'https://m.media-amazon.com/images/M/MV5BNjcxZDU1NjktYmY3Zi00ZGVmLThmNDgtNGJmMWNjNzNhZTY4XkEyXkFqcGc@._V1_.jpg',
  },
];

interface MovieCardProps {
  item: MovieResult;
}

const MovieCard: React.FC<MovieCardProps> = ({item}) => {
  return (
    <View style={styles.movieRow}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
        style={styles.poster}
      />
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
  const [query, setQuery] = useState('Tim');

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Icon
          type={Icons.Ionicons}
          name="search-outline"
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
        <TouchableOpacity onPress={() => setQuery('')}>
          <Icon
            type={Icons.Ionicons}
            name="close-outline"
            size={22}
            color="#666"
          />
        </TouchableOpacity>
      </View>

      {/* Top Results */}
      <Text style={styles.sectionTitle}>Top Results</Text>

      <FlatList
        data={searchResults}
        keyExtractor={item => item.id}
        renderItem={({item}) => <MovieCard item={item} />}
        contentContainerStyle={{paddingBottom: 20}}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SearchResultsScreen;

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
    backgroundColor: '#f2f2f2',
    borderRadius: 30,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 6,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#000',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
    marginBottom: 10,
  },
  movieRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  poster: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 12,
  },
  movieInfo: {
    flex: 1,
  },
  movieTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  genre: {
    fontSize: 13,
    color: '#888',
    marginTop: 2,
  },
});
