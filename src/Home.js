import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import NavBar from './NavBar';
import MovieCard from './MovieCard';
import axios from 'axios';

const Home = () => {
  const navigation = useNavigation();
  const API_KEY = '80f5dfd6a54f5ac300eba1c8ca1bc325';
  const API_URL = 'https://api.themoviedb.org/3';
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
  const [movieList, setMovieList] = useState([]);

  const getMovieList = async () => {
    try {
      const response = await axios.get(`${API_URL}/trending/movie/day`, {
        params: {
          api_key: API_KEY,
          language: 'en-US',
        },
      });
      setMovieList(response.data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getMovieList();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <NavBar search />
        <ImageBackground
          style={styles.imgBackground}
          resizeMode="cover"
          source={require('./Asset/bg2.jpeg')}>
          <View style={styles.overlay}>
            <Text style={styles.mainText}>Welcome to Our Movie Site</Text>
            <Text style={styles.subText}>
              Our Special <Text style={{color: '#ff1744'}}>Movies</Text>
            </Text>
            <Text style={styles.paragraph}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown.
            </Text>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Read More</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
        {movieList.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d111c',
  },
  imgBackground: {
    flex: 1,
    width: '100%',
    height: 300, // Adjust height as needed
  },
  overlay: {
    padding: 20,
    borderRadius: 10,
  },
  mainText: {
    fontFamily: 'Calibri',
    fontWeight: '400',
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subText: {
    fontFamily: 'Calibri',
    fontWeight: '400',
    fontSize: 36,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  paragraph: {
    fontFamily: 'Calibri',
    fontWeight: '400',
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ff7d65',
    height: 35,
    padding: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
