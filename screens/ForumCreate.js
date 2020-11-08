import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function ForumCreateScreen({ navigation }) {
    return (
    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' , marginTop:20}}
    >
        <Text style={{ fontSize: 30 }}>Add new question to forum</Text>

        

        <Button
          onPress={() => navigation.navigate('Forum')}
          title="Back"
        />
      </View>
    );
  }
  
  export default ForumCreateScreen;