import {Restaurant} from '../types';
import {search} from '../webServices';
import yelp from '../webServices/yelp';

export const getSearchResults = async (
  searchTerm,
  latitude,
  longitude,
): Promise<Restaurant[]> => {
  try {
    const response = await yelp.get(search, {
      params: {
        limit: 30,
        term: searchTerm,
        latitude: latitude,
        longitude: longitude,
        radius: 4000,
      },
    });
    const searchResponse: Restaurant[] = await response.data.businesses;
    return searchResponse;
  } catch (error) {
    throw new Error(`Failed to fetch restaurants: ${error.message}`);
  }
};

export const getRestaurantDetail = async (id): Promise<Restaurant> => {
  try {
    const response = await yelp.get(`/${id}`);
    const restaurantDetailResponse: Restaurant = await response.data;
    return restaurantDetailResponse;
  } catch (error) {
    throw new Error(`Failed to fetch restaurants: ${error.message}`);
  }
};
