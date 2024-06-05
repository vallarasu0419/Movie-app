import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const MovieDetails = ({route}) => {
  const {movieDetails} = route.params;
  console.log(movieDetails);
  return (
    <View>
      <Image
        style={styles.imgBackground}
        resizeMode="cover"
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`,
        }}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{movieDetails.original_title}</Text>
        <Text style={styles.sub}>{movieDetails.overview}</Text>
        <Text style={styles.sub}>
          Release Date : {movieDetails.release_date}
        </Text>
        <Text style={styles.rating}>Rating : {movieDetails.vote_average}</Text>
        <Text style={styles.rating}>
          Original Language : {movieDetails.original_language}
        </Text>
      </View>
    </View>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({
  imgBackground: {
    width: '100%',
    height: 300,
  },
  detailsContainer: {
    backgroundColor: '#0d111c',
    padding: 15,
    height: '70%',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontFamily: 'times new roman',
    lineHeight: 30,
  },
  sub: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'times new roman',
  },
  rating: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'times new roman',
    lineHeight: 30,
  },
});
