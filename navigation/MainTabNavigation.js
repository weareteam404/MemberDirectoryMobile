import React from 'react';

import { View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createDrawerNavigator } from '@react-navigation/drawer';

import GalleryScreen from '../screens/Gallery';
import ForumScreen from '../screens/Forum';
import EventsScreen from '../screens/Events';
import NotificationScreen from '../screens/Notification';

const MainTab = createMaterialBottomTabNavigator();

function MainTabScreen() {
    return ( 
        <MainTab.Navigator 
        initialRouteName = "Home"
        activeColor = "#000000"
        inactiveColor = "#7F7F7F"
        barStyle = { { backgroundColor: '#FFFFFF' } } 
        >
        <MainTab.Screen name = "Forum"
        component = { ForumScreen }
        options = {
            {
                tabBarLabel: 'Forum',
                tabBarIcon: ({ color }) => ( <
                    MaterialCommunityIcons name = "forum"
                    color = { color }
                    size = { 26 }
                    />
                ),
            }
        }
        /> 
        <MainTab.Screen name = "Gallery"
        component = { GalleryScreen }
        options = {
            {
                tabBarLabel: 'Gallery',
                tabBarIcon: ({ color }) => ( <
                    MaterialCommunityIcons name = "image-multiple"
                    color = { color }
                    size = { 26 }
                    />
                ),
            }
        }
        /> 
        <MainTab.Screen name = "Events"
        component = { EventsScreen }
        options = {
            {
                tabBarLabel: 'Events',
                tabBarIcon: ({ color }) => ( <
                    MaterialCommunityIcons name = "calendar-star"
                    color = { color }
                    size = { 26 }
                    />
                ),
            }
        }
        /> 
        <MainTab.Screen name = "Notifications"
        component = { NotificationScreen }
        options = {
            {
                tabBarLabel: 'Notifications',
                tabBarIcon: ({ color }) => ( <
                    MaterialCommunityIcons name = "bell"
                    color = { color }
                    size = { 26 }
                    />
                ),
            }
        }
        /> 
        <MainTab.Screen name = "Menu"
        component = { OpenDrawer }
        options = {
            {
                tabBarLabel: 'Menu',
                tabBarIcon: ({ color }) => ( <
                    MaterialCommunityIcons name = "menu"
                    color = { color }
                    size = { 26 }
                    />
                ),
            }
        }
        /> 
        </MainTab.Navigator>
    );
}

function OpenDrawer({ navigation }) {
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('tabPress', e => {
            // Prevent default behavior
            e.preventDefault();

            navigation.openDrawer();
        });

        return unsubscribe;
    }, [navigation]);

    return ( 
        <View style = {
            { flex: 1 } } >
        </View>
        // On first click this creates a empty tab but works then after
    );
}

export default MainTabScreen;