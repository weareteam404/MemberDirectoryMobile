import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function LoginScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is login!</Text>
        <Button onPress={() => navigation.navigate('Main')} title="Enter" />
      </View>
    );
  }

  export default LoginScreen;