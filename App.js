import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import Home from './screens/HomeScreen';
import Search from './screens/SearchScreen';
import Add from './screens/AddScreen';

import {Ionicons} from "@expo/vector-icons";
import { createStore, applyMiddleware } from 'redux';

import { Provider } from 'react-redux'

import reducers from './reducers/index';

import thunk from "redux-thunk";


const store = createStore(reducers, applyMiddleware(thunk));
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();



function Location() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="LocationDetail" component={DetailScreen} />
        </Stack.Navigator>
    );
}



export default function App() {

  return (
      <Provider store={store}>
          <NavigationContainer>
          <Tab.Navigator screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === 'Home') {
                      iconName = 'ios-home'

                  } else if (route.name === 'Search') {
                      iconName ='ios-search';
                  }else if (route.name === 'Add') {
                      iconName = 'ios-add-circle';
                  }

                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
              },
          })}
                         tabBarOptions={{
                             activeTintColor: 'black',
                             inactiveTintColor: 'black',
                         }}>
              <Tab.Screen name="Home" component={Home} />
              <Tab.Screen name="Search" component={Search} />
              <Tab.Screen name="Add" component={Add} />
          </Tab.Navigator>
      </NavigationContainer>
      </Provider>
  );
}