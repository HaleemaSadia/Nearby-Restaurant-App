import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  PermissionsAndroid,
  Platform,
  Alert,
} from 'react-native';
import SearchBar from '../components/SearchBar';
import Geolocation from '@react-native-community/geolocation';
import {Restaurant} from '../../types';
import {getSearchResults} from '../../api';
import RestaurantList from '../components/RestaurantList';

const Home = () => {
  const [term, setTerm] = useState('');
  const [currentLongitude, setCurrentLongitude] = useState('...');
  const [currentLatitude, setCurrentLatitude] = useState('...');
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  let watchID: number;

  useEffect(() => {
    requestLocationPermission();
    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, []);

  const fetchRestaurants = async () => {
    try {
      const searchResults = await getSearchResults(
        term,
        currentLatitude,
        currentLongitude,
      );
      setRestaurants(searchResults);
    } catch (error) {
      Alert.alert('Fetch restaurants failed with error: ', error.message);
    }
  };
  const requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      getCurrentLocation();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Access Required',
            message: 'This App needs to Access your location',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // If Permission is granted.
          getCurrentLocation();
        } else {
          console.warn('Permission Denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const currentLongitude = JSON.stringify(position.coords.longitude);

        const currentLatitude = JSON.stringify(position.coords.latitude);

        setCurrentLongitude(currentLongitude);
        setCurrentLatitude(currentLatitude);
      },
      error => {
        console.warn(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000,
      },
    );
  };

  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => fetchRestaurants()}
      />
      <RestaurantList restaurants={restaurants} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 120,
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  searchHistoryContainer: {
    marginTop: 30,
    zIndex: 999,
  },
  heading2: {
    color: '#ccc',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchItem: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#ffffff10',
  },
  searchText: {
    fontSize: 14,
    color: '#FFF',
  },
});

export default Home;
