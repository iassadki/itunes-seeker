import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native';
import LikedSongsScreen from './screens/LikedSongsScreen';
import SongScreen from './screens/SongScreen';
import HomeScreen from './screens/HomeScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LikedSongsScreen"
        component={LikedSongsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SongScreen"
        component={SongScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Liked" component={LikedSongsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
