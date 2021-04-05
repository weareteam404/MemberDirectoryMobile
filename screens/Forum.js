import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, Button, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { moment } from 'moment';

function ForumScreen({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const moment = require('moment'); 

  useEffect(() => {
    fetch('https://member-directory.herokuapp.com/forum/home')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

    return (
    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' , marginTop:20}}>
        <Text style={{ fontSize: 30 }}>Forum</Text>
        
        {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data.reverse()}
          keyExtractor={({ _id }, index) => _id}
          renderItem={({ item }) => (
            
            <TouchableWithoutFeedback onPress={() => navigation.navigate('ForumReply',{id:(item._id)})}>
            <Text style={{
              marginVertical:10,
              fontSize: 20,
              backgroundColor:'white',
              borderWidth: 1, 
              borderColor:'black',
              borderRadius:10,
              margin:5,
              width:'90%'
            }}>{" "}
              <MaterialCommunityIcons name="human-greeting" size={20} color="black" /> {item.firstname} {item.lastname} {"\n "}
              {item.message} {"\n "}
            <Text style={{
              fontSize: 14
            }}>

            {moment.utc(item.createdAt).local().startOf('seconds').fromNow()}
            </Text>
            </Text>

            </TouchableWithoutFeedback>
          )}
        />
      )}

        <Button
          onPress={() => navigation.navigate('ForumCreate')}
          title="Add Post"
        />
      </View>
    );
  }
  
  export default ForumScreen;