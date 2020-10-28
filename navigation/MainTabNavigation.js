
import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import GalleryScreen from '../screens/Gallery';
import ForumScreen from '../screens/Forum';
import EventsScreen from '../screens/Events';
import NotificationScreen from '../screens/Notification';

const MainTab = createMaterialBottomTabNavigator();

function MainTabScreen() {
  return (
    <MainTab.Navigator
    initialRouteName="Home"
    activeColor="#f0edf6"
    inactiveColor="#3e2465"
    barStyle={{ backgroundColor: '#694fad' }}
    >
      <MainTab.Screen
      name="Forum" 
      component={ForumScreen} 
      options={{
        tabBarLabel: 'Forum',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="forum" color={color} size={26} />
        ),
      }}
      />
      <MainTab.Screen
      name="Gallery" 
      component={GalleryScreen} 
      options={{
        tabBarLabel: 'Gallery',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="image-multiple" color={color} size={26} />
        ),
      }}
      />
      <MainTab.Screen 
      name="Events" 
      component={EventsScreen} 
      options={{
        tabBarLabel: 'Events',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="calendar-star" color={color} size={26} />
        ),
      }}
      />
      <MainTab.Screen 
      name="Notifications" 
      component={NotificationScreen} 
      options={{
        tabBarLabel: 'Notifications',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="bell" color={color} size={26} />
        ),
      }}
      />
    </MainTab.Navigator>
  );
}

export default MainTabScreen;