import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function EventsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' , marginTop:20}}>
        <Text style={{ fontSize: 30 }}>Events</Text>
        <Button
          onPress={() => navigation.navigate('Login')}
          title="Log out"
        />
      </View>
    );
  }
  
  export default EventsScreen;