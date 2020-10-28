import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import LoginScreen from './screens/login';
import GalleryScreen from './screens/Gallery';
import ForumScreen from './screens/Forum';
import EventsScreen from './screens/Events';
import NotificationScreen from './screens/Notification';


const MainTab = createMaterialBottomTabNavigator();
const RootStack = createStackNavigator();

function MainTabScreen() {
  return (
    <MainTab.Navigator
    initialRouteName="Forum"
    activeColor="#f0edf6"
    inactiveColor="#3e2465"
    barStyle={{ backgroundColor: '#694fad' }}
    >
      <MainTab.Screen name="Forum" component={ForumScreen} />
      <MainTab.Screen name="Gallery" component={GalleryScreen} />
      <MainTab.Screen name="Events" component={EventsScreen} />
      <MainTab.Screen name="Notifications" component={NotificationScreen} />
    </MainTab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
    <RootStack.Navigator mode="modal" headerMode="none">
      <RootStack.Screen name="Login" component={LoginScreen} />
      <RootStack.Screen name="Main" component={MainTabScreen} />
    </RootStack.Navigator>
  </NavigationContainer>
  );
}