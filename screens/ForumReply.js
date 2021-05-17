import React, { useEffect, setState, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, Button, TextInput, Alert, FlatList } from 'react-native';
import firebase from 'firebase/app'
import "firebase/auth";

function ForumReplyScreen({ navigation, route }) {
  const [isLoading, setLoading] = useState(true);
  const data1 =[];
  const [data, setData] = useState([]);
  const [value, onChangeText] = React.useState('');
  const { id } = route.params;
  const user = firebase.auth().currentUser;

  const moment = require('moment'); 
  console.log(id+" "+user.uid);

  useEffect(() => {
    fetch('https://member-directory.herokuapp.com/forum/'+id)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [data]);


 const send = () =>{
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ body: value,
          date: new Date(),
          firebaseId:user.uid
        })
    };
    fetch('https://member-directory.herokuapp.com/forum/reply/'+id, requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ postId: id }))
        .finally(alert("Reply sended"));
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
        <Text style={{ fontSize: 30 }}>Forum Message </Text>

        <Text style={{
              marginVertical:10,
              fontSize: 20,
              backgroundColor:'white',
              borderWidth: 1, 
              borderColor:'black',
              borderRadius:10,
              margin:5,
              width:'90%'
            }}>
            {isLoading ? <ActivityIndicator/> : (
               <Text style={{
                marginVertical:10,
                fontSize: 20
              }}>{"\t"}{data.forum.message}{"\n"} 

              <Text style={{fontSize: 16}}>
              {"\t"}{data.forum.firstname && " \n By: "}
              {data.forum.firstname}{" "}{data.forum.lastname}{" \n "}
              {moment.utc(data.forum.createdAt).local().startOf('seconds').fromNow()}

              </Text>
              </Text>
              
            )}
            {"\n Enter reply here: \n "}
            
        <TextInput
          style={{ height: 40, borderColor: 'gray', margin:5, borderWidth: 1 }}
          onChangeText={text => onChangeText(text)}
          value={value}
        />{"\t"}

        <Button
          style={{margin:10, marginVertical:10}}
          width='5'
          title="Add"
          onPress={send}
        />
        {"\n Replies: \n "}
         {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data.forum.reply}
          renderItem={({ item }) => (
            <Text style={{
                fontSize: 16,
                padding: 4,
              }}
              >
            {item.body}{"\n"}
            <Text style={{
                fontSize: 14,
                padding: 2,
              }}
              >
            {item.firstname && " \n By: "}
            {item.firstname}{" "}{item.lastname}{" \t "}
            {moment.utc(item.date).local().startOf('seconds').fromNow()}{"\n"}
            </Text></Text>
          )}

          
          />
         )}
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