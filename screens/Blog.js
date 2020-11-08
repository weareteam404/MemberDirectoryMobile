import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function BlogScreen({ navigation }) {
    return (
    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' , marginTop:20}}
    >
        <Text style={{ fontSize: 30 }}>Blog</Text>
        <Button
          onPress={() => navigation.navigate('Login')}
          title="Log out"
        />
      </View>
    );
  }
  
  export default BlogScreen;