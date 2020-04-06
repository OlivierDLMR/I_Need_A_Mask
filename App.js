import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {Ionicons} from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import AddScreen from "./screens/AddScreen";
import SearchScreen from "./screens/SearchScreen";



const Tab = createBottomTabNavigator();

export default function App() {
  const homeScreenOptions = {

    drawerIcon: ({ focused, color, size }) => <Ionicons name='Entypo' size={32} color={black}/>,
    tabLabel: 'Location',
    tabIcon: ({focused, color, size}) => <ion-icon name='location-sharp'> size={size} color={color}/</ion-icon>,
    tabLabel: 'Add',
    tabIcon: ({focused, color, size}) => <ion-icon name='add-circle-sharp'> size={size} color={color}/</ion-icon>
  };
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='Home' component={HomeScreen}/>
          <Tab.Screen name='Location' component={SearchScreen}/>
          <Tab.Screen name='Add' component={AddScreen}/>
        </Tab.Navigator>
      </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});