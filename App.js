import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen.js';
import LikedSongsScreen from './screens/LikedSongsScreen';
import SearchScreen from './screens/SearchScreen';
import SongDetailsScreen from './screens/SongDetailsScreen.js';
import ArtistDetailsScreen from './screens/ArtistDetailsScreen.js';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Provider } from 'react-redux';
import store from './redux/store';
import { LikedSongsProvider } from './context/LikedSongsContext';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreenNavigator = () => {

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: '#000', borderTopWidth: 0 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Liked Songs"
        component={LikedSongsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <LikedSongsProvider>
      <SafeAreaView style={styles.safeArea}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="HomeScreen" // Changer le nom de l'écran initial si nécessaire
            screenOptions={{
              headerShown: false, // Cacher l'en-tête pour tous les écrans par défaut
              headerStyle: { backgroundColor: '#fff' },
              headerTintColor: '#000',
            }}
          >
            <Stack.Screen
              name="HomeScreen" // Renommer l'écran "Home" en "HomeScreen"
              component={HomeScreenNavigator}
            />
            <Stack.Screen
              name="SongDetailsScreen"
              component={SongDetailsScreen}
              options={{ headerShown: false }} // Cacher l'en-tête pour l'écran SongDetailsScreen
            />
            <Stack.Screen
              name="ArtistDetailsScreen"
              component={ArtistDetailsScreen}
              options={{ headerShown: false }} // Cacher l'en-tête pour l'écran ArtistDetailsScreen
            />
            <Stack.Screen
              name="LikedSongsScreen"
              component={LikedSongsScreen}
              options={{ headerShown: false }} // Cacher l'en-tête pour l'écran LikedSongsScreen
            />
          </Stack.Navigator>

        </NavigationContainer>
      </SafeAreaView>
    </LikedSongsProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
});
