import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Navigation} from '@typings/navigation';
import {Image, StyleSheet} from 'react-native';
import {location} from '@utils/assets/images';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';

const Stack = createNativeStackNavigator<Navigation.MainNavigatorParams>();

const headerImage = () => {
  return <Image source={location} style={styles.headerIcon} />;
};
const MainNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Restaurant Finder',
          headerTransparent: true,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 22,
          },
          headerTitleAlign: 'center',
          headerLeft: headerImage,
        }}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{
          title: 'Restaurant Details',
          headerTransparent: true,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 22,
          },
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerIcon: {
    height: 50,
    width: 50,
    marginTop: 3,
  },
});

export default MainNavigator;
