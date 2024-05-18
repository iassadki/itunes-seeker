import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen.js';
import LikedSongsScreen from './screens/LikedSongsScreen';
import SearchScreen from './screens/SearchScreen';
import SongDetailsScreen from './screens/SongDetailsScreen.js';
import ArtistDetailsScreen from './screens/ArtistDetailsScreen.js';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Provider } from 'react-redux';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreenNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Liked Songs" component={LikedSongsScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreenNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="SongDetailsScreen" component={SongDetailsScreen} />
        <Stack.Screen name="ArtistDetailsScreen" component={ArtistDetailsScreen} />
        <Stack.Screen name="LikedSongsScreen" component={LikedSongsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
