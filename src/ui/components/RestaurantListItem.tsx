import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const RestaurantListItem = ({result}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{uri: result.image_url}} />
      <View style={styles.descriptionContainer}>
        <Text style={styles.titleStyle}>{result.name}</Text>
        <Text style={styles.subTitleStyle}>
          {result.rating} Stars, {result.review_count} Reviews
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    width: 172,
    marginBottom: 18,
    backgroundColor: '#f4f4f4',
    borderRadius: 8,
    overflow: 'hidden',
    paddingBottom: 10,
  },
  descriptionContainer: {
    marginLeft: 8,
    marginTop: 4,
  },
  titleStyle: {
    fontWeight: 'bold',
  },
  subTitleStyle: {
    fontWeight: 'normal',
    fontSize: 13,
    color: 'gray',
  },
  imageStyle: {
    width: 172,
    height: 125,
    marginBottom: 5,
  },
});
export default RestaurantListItem;
