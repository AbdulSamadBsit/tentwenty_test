import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Icon, {Icons} from '../../../components/Icons';
import {height} from '../../../constants';
import {RFValue} from 'react-native-responsive-fontsize';

export default function MovieDetailsScreen({navigation, route}: any) {
  function goBack() {
    navigation.goBack();
  }
  return (
    <ScrollView style={styles.container}>
      {/* Poster Header */}
      <ImageBackground
        source={{
          uri: 'https://i.pinimg.com/1200x/85/82/52/858252135b2363ec3ee83023920ab720.jpg',
        }}
        style={styles.poster}>
        {/* Floating Back Icon */}
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <Icon
            type={Icons.Ionicons}
            name="arrow-back"
            size={22}
            color="white"
            onPress={goBack}
          />
        </TouchableOpacity>

        <View style={styles.overlay}>
          <Text style={styles.title}>King’s Man</Text>
          <Text style={styles.releaseDate}>In Theaters December 22, 2021</Text>

          {/* Buttons */}
          <TouchableOpacity style={styles.ticketButton}>
            <Text style={styles.ticketText}>Get Tickets</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.trailerButton}>
            <Icon
              type={Icons.Ionicons}
              name="play-circle"
              size={20}
              color="white"
            />
            <Text style={styles.trailerText}>Watch Trailer</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      {/* Content */}
      <View style={styles.content}>
        {/* Genres */}
        <Text style={styles.sectionTitle}>Genres</Text>
        <View style={styles.genresContainer}>
          <Text style={[styles.genre, {backgroundColor: '#10B981'}]}>
            Action
          </Text>
          <Text style={[styles.genre, {backgroundColor: '#EC4899'}]}>
            Thriller
          </Text>
          <Text style={[styles.genre, {backgroundColor: '#6366F1'}]}>
            Science
          </Text>
          <Text style={[styles.genre, {backgroundColor: '#F59E0B'}]}>
            Fiction
          </Text>
        </View>

        {/* Overview */}
        <Text style={styles.sectionTitle}>Overview</Text>
        <Text style={styles.overview}>
          As a collection of history’s worst tyrants and criminal masterminds
          gather to plot a war to wipe out millions, one man must race against
          time to stop them. Discover the origins of the very first independent
          intelligence agency in The King’s Man. The comic book “The Secret
          Service” by Mark Millar and Dave Gibbons.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  poster: {
    height: height * 0.55,
    justifyContent: 'flex-end',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  title: {
    color: '#FACC15',
    fontSize: RFValue(24),
    fontWeight: 'bold',
  },
  releaseDate: {
    color: '#fff',
    fontSize: RFValue(12),
    marginTop: 4,
  },
  ticketButton: {
    backgroundColor: '#0EA5E9',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 16,
  },
  ticketText: {
    color: '#fff',
    fontWeight: '600',
  },
  trailerButton: {
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  trailerText: {
    color: '#fff',
    marginLeft: 8,
    fontWeight: '500',
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  sectionTitle: {
    fontSize: RFValue(16),
    fontWeight: '600',
    marginBottom: 8,
  },
  genresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  genre: {
    color: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    fontSize: RFValue(10),
    marginRight: 8,
    marginBottom: 8,
  },
  overview: {
    color: '#4B5563',
    fontSize: RFValue(12),
    lineHeight: 20,
    marginTop: 8,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 8,
    borderRadius: 20,
  },
});
