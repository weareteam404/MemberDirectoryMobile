import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MainTabScreen from "./MainTabNavigation";

import BlogScreen from '../screens/Blog';
import LoginScreen from '../screens/login';
import { color } from "react-native-reanimated";


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Main" component={MainTabScreen} />
      <Drawer.Screen name="Blog" component={BlogScreen} />
      <Drawer.Screen name="Logout" component={LoginScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
