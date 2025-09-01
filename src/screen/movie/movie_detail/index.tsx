import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CustomSkeleton from '../../../components/CustomSkeleton';
import Icon, {Icons} from '../../../components/Icons';
import {useMovieDetail} from './useMovieDetail';
import {API} from '../../../constants';
import moment from 'moment';
import styles from './styles';

export default function MovieDetailsScreen({navigation, route}: any) {
  const {movie} = route?.params || {};
  const {movieDetail, loading, goBack, openLink, genresColors} = useMovieDetail(
    movie.id,
  );

  return (
    <ScrollView style={styles.container}>
      {/* Poster Header */}
      <CustomSkeleton isLoading={loading}>
        <ImageBackground
          source={{
            uri: movieDetail?.backdrop_path
              ? API.IMAGE_URL + movieDetail.backdrop_path
              : 'https://via.placeholder.com/300x450',
          }}
          style={styles.poster}>
          {/* Floating Back Icon */}
          <TouchableOpacity style={styles.backButton} onPress={goBack}>
            <Icon
              type={Icons.MaterialIcons}
              name="arrow-back"
              size={22}
              color="white"
              onPress={goBack}
            />
          </TouchableOpacity>

          <View style={styles.overlay}>
            <Text style={styles.title}>{movieDetail?.title}</Text>
            <Text style={styles.releaseDate}>
              In Theaters{' '}
              {moment(movieDetail?.release_date).format('MMMM D, YYYY')}
            </Text>

            {/* Buttons */}
            <TouchableOpacity style={styles.ticketButton} onPress={openLink}>
              <Text style={styles.ticketText}>Get Tickets</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.trailerButton} onPress={openLink}>
              <Icon
                type={Icons.Feather}
                name="play-circle"
                size={20}
                color="white"
                onPress={openLink}
              />
              <Text style={styles.trailerText}>Watch Trailer</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </CustomSkeleton>

      {/* Content */}

      <CustomSkeleton isLoading={loading}>
        <View style={styles.content}>
          {/* Genres */}
          <Text style={styles.sectionTitle}>Genres</Text>
          <View style={styles.genresContainer}>
            {movieDetail?.genres?.map((genre: any, index: number) => (
              <Text
                key={index}
                style={[styles.genre, {backgroundColor: genresColors(index)}]}>
                {genre?.name}
              </Text>
            ))}
          </View>

          {/* Overview */}
          <Text style={styles.sectionTitle}>Overview</Text>
          <Text style={styles.overview}>
            {movieDetail?.overview || 'No overview available.'}
          </Text>
        </View>
      </CustomSkeleton>
    </ScrollView>
  );
}
