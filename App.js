import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/login';
import ForumCreateScreen from './screens/ForumCreate';
import DrawerNavigator from './navigation/DrawerNavigation';

const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <RootStack.Navigator mode="modal" headerMode="none">
      <RootStack.Screen name="Login" component={LoginScreen} />
      <RootStack.Screen name="Main" component={DrawerNavigator} />
      <RootStack.Screen name ="ForumCreate" component={ForumCreateScreen} />
    </RootStack.Navigator>
  </NavigationContainer>
  );
}