import React, { useEffect, setState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, Button, TextInput, Alert, list } from 'react-native';

function ForumReplyScreen({ navigation, route }) {
  const [value, onChangeText] = React.useState('');
  const { id } = route.params;

 const send = () =>{
    // Simple PUT request with a JSON body using fetch
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ body: value })
    };
    fetch('https://member-directory.herokuapp.com/forum/reply/'+{id}, requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ postId: data.id }));
}
/*
  const send = () =>{
    fetch('https://member-directory.herokuapp.com/forum/reply/'+{id}, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              body: value
            })
          }).then(response => response.json())
          .then(data => this.setState({ id: {id} }));
          alert(
            "Reply added",
            "reply posted on forum",
            [{ text: "OK", onPress: () => value=''}]
            
          )
  }*/
    return (
    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' , marginTop:20}}>
        <Text style={{ fontSize: 30 }}>Forum Reply </Text>

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