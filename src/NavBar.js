import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const NavBar = ({search}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: '#0d111c',
      }}>
      <View
        style={{
          backgroundColor: '#263e60',
          width: '100%',
          height: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Image
          style={{width: 70, height: 50}}
          source={require('./Asset/cinema.webp')}
        />
        {search && (
          <>
            <TextInput style={styles.input} placeholder="Search Movies" />
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.buttonText}>Log Out</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    borderRadius: 10,
    width: '50%',
    marginTop: 10,
    color: '#fff',
    placeholderTextColor: '#fff',
  },
  button: {
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
