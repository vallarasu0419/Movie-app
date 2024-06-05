import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import NavBar from './NavBar';
import axios from 'axios';

const Login = () => {
  const navigation = useNavigation();
  const apiKey = '80f5dfd6a54f5ac300eba1c8ca1bc325';
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const responseToken = await axios.get(
        `https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`,
        {
          headers: {
            accept: 'application/json',
          },
        },
      );
      const requestToken = responseToken.data.request_token;

      const options = {
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
        },
      };
      const responseValidation = await axios.post(
        `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${apiKey}`,
        {
          username: username,
          password: password,
          request_token: requestToken,
        },
        options,
      );
      if (responseValidation.status === 200) {
        Alert.alert('Success', 'Login Successful', [{text: 'OK'}], {
          cancelable: false,
        });
        navigation.navigate('Home');
      } else {
        Alert.alert(
          'Invalid Credentials',
          'Please check your username and password',
          [{text: 'OK'}],
          {cancelable: false},
        );
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <>
      <NavBar />
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.signInText}>Sign In</Text>
          <Text style={styles.subText}>
            Sign in to your self-service portal
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={text => setUsername(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d111c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  signInText: {
    fontFamily: 'Calibri',
    fontWeight: '400',
    fontSize: 25,
    marginBottom: 10,
  },
  subText: {
    fontFamily: 'Calibri',
    fontWeight: '400',
    fontSize: 15,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    borderRadius: 10,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: '#ff7d65',
    height: 40,
    width: '100%',
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

export default Login;
