import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const MovieCard = ({movie}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('MovieDetails', {movieDetails: movie})
      }>
      <Image
        style={styles.imgBackground}
        resizeMode="cover"
        source={{uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}}
      />
      <View style={styles.detailsContainer}>
        <View>
          <Text style={styles.title}>{movie.original_title}</Text>
          <Text style={styles.rating}>Rating: {movie.vote_average}</Text>
        </View>
        <Image
          style={{width: 40, height: 40}}
          source={require('./Asset/play.png')}
        />
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 20,
    marginTop: 20,
  },
  imgBackground: {
    width: '100%',
    height: 200,
    borderRadius: 15,
  },
  detailsContainer: {
    backgroundColor: '#24446b',
    padding: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'times new roman',
  },
  rating: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'times new roman',
  },
});
