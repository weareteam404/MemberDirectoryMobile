import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, Button, TextInput, Alert, list } from 'react-native';

function ForumReplyScreen({ navigation },route) {
  const [value, onChangeText] = React.useState('');

  const send = () =>{
    fetch('https://member-directory.herokuapp.com/forum/', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              message: value
            })
          })
          alert(
            "Post added",
            "posted on forum",
            [{ text: "OK", onPress: () => value=''}]
            
          )
  }
    return (
    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' , marginTop:20}}>
        <Text style={{ fontSize: 30 }}>Forum post{route._id}</Text>

        <Text style={{
              marginVertical:10,
              fontSize: 20,
              backgroundColor:'white',
              borderWidth: 1, 
              borderColor:'black',
              borderRadius:10,
              margin:5,
              width:'90%'
            }}>{" Enter reply here: \n "}
            
        <TextInput
          style={{ height: 40, borderColor: 'gray', margin:5, borderWidth: 1 }}
          onChangeText={text => onChangeText(text)}
          value={value}
        />{"\n\n"}

        <Button
          style={{margin:10, marginVertical:10}}
          width='5'
          title="Add"
          onPress={send}
        />
        </Text>

        <Button
          onPress={() => navigation.navigate('Forum')}
          width='5'
          title="Back"
        />
      </View>
    );
  }
  
  export default ForumReplyScreen;