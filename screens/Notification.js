import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function NotificationScreen({ navigation }) {
    return (
    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
        <Text style={{ fontSize: 30 }}>Notifications</Text>
        <Button
          onPress={() => navigation.navigate('Login')}
          title="Log out"
        />
      </View>
    );
  }
  
  export default NotificationScreen;