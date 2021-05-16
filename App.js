import { StatusBar } from 'expo-status-bar';
import React from 'react';
import firebase from 'firebase/app'
import {firebaseConfig} from './config/FirebaseConfig';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/login';
import ForumCreateScreen from './screens/ForumCreate';
import ForumReplyScreen from './screens/ForumReply';
import DrawerNavigator from './navigation/DrawerNavigation';
import BlogView from './screens/BlogView';

const RootStack = createStackNavigator();

export default function App() {

  if(!firebase.default.apps){
    firebase.initializeApp(firebaseConfig);
  }
  

  return (
    <NavigationContainer>
    <RootStack.Navigator mode="modal" headerMode="none">
      <RootStack.Screen name="Login" component={LoginScreen} />
      <RootStack.Screen name="Main" component={DrawerNavigator} />
      <RootStack.Screen name ="Forum Create" component={ForumCreateScreen} />
      <RootStack.Screen name ="Forum Reply" component={ForumReplyScreen} />
      <RootStack.Screen name ="Blog View" component={BlogView} />
    </RootStack.Navigator>
  </NavigationContainer>
  );
}