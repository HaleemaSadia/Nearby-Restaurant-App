import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import RestaurantListItem from './RestaurantListItem';
import {useNavigation} from '@react-navigation/native';

const RestaurantList = ({restaurants}) => {
  const navigation = useNavigation();

  if (!restaurants.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>All Nearby Restaurants</Text>
      <FlatList
        data={restaurants}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        keyExtractor={result => result.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('DetailScreen', {id: item.id})
              }>
              <RestaurantListItem result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 15,
    marginTop: 10,
  },
  container: {
    paddingBottom: 10,
  },
});
export default RestaurantList;
