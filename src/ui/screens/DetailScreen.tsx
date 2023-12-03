import React, {useState, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  Image,
  FlatList,
  Alert,
  ScrollView,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {getRestaurantDetail} from '../../api';

const DetailScreen = () => {
  const [restaurantDetail, setRestaurantDetail] = useState(null);
  const route = useRoute();

  const id = route.params?.id;

  useEffect(() => {
    getDetail(id);
  }, []);

  const getDetail = async id => {
    try {
      const restaurantDetail = await getRestaurantDetail(id);
      setRestaurantDetail(restaurantDetail);
    } catch (error) {
      Alert.alert(
        'Fetch restaurant details failed with error: ',
        error.message,
      );
    }
  };

  if (!restaurantDetail) {
    return null;
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={restaurantDetail.photos}
        keyExtractor={photo => photo}
        renderItem={({item}) => {
          return <Image source={{uri: item}} style={styles.imageStyle} />;
        }}
      />
      <Text style={styles.titleStyle}>{restaurantDetail.name}</Text>
      <Text style={styles.subTitleStyle}>
        {restaurantDetail.rating} Stars, {restaurantDetail.review_count} Reviews
      </Text>
      <Text style={styles.descriptionText}>
        {
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
        }
      </Text>
      <Text>{restaurantDetail.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 120,
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 20,
  },
  subTitleStyle: {
    fontWeight: 'normal',
    fontSize: 13,
    color: 'gray',
  },
  imageStyle: {
    width: 340,
    height: 195,
    borderRadius: 5,
    marginRight: 10,
  },
  descriptionText: {
    fontSize: 15,
    marginTop: 10,
    textAlign: 'justify',
  },
});
export default DetailScreen;
