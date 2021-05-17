import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MainTabScreen from "./MainTabNavigation";

import BlogScreen from '../screens/Blog';
import BlogUploadsScreen from '../screens/BlogUploads';
import LoginScreen from '../screens/login';
import BlogView from '../screens/BlogView';
import JobView from '../screens/jobView';
import ForumReplyScreen from '../screens/ForumReply';
import firebase from 'firebase/app'
import "firebase/auth";

import { color } from "react-native-reanimated";


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Main" component={MainTabScreen} />
      <Drawer.Screen name="Blog" component={BlogScreen} />
      <Drawer.Screen name="Blog Uploads" component={BlogUploadsScreen} />
      <Drawer.Screen name="BlogView" component={BlogView} />
      <Drawer.Screen name="ForumReplyScreen" component={ForumReplyScreen} />
      <Drawer.Screen name="JobView" component={JobView} />
      <Drawer.Screen name="Logout" component={LoginScreen} onPress={() => 
                  firebase.auth().signOut()
              } />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
