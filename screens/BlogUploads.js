import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, Button, Image, Linking, TouchableWithoutFeedback} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { moment } from 'moment';

function BlogUploadsScreen({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data1, setData] = useState([]);

  const moment = require('moment'); 

  useEffect(() => {
    fetch('https://member-directory.herokuapp.com/bloguploader')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [data1]);

    return (
    <View style={{ flex: 1, justifyContent: 'flex-start' , marginTop:20 }}>
        <Text style={{ fontSize: 30 }}>Blog Uploads</Text>
        
        {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data1}
          keyExtractor={({ _id }, index) => _id}
          renderItem={({ item }) => (
            <Text style={{
              marginVertical:11,
              fontSize: 20,
              backgroundColor:'white',
              borderWidth: 1, 
              borderColor:'black',
              borderRadius:10,
              margin:5
            }}>
            <Text 
            onPress={() => Linking.openURL(item.url)}
            >{item.title}
                
              {" \n "}
              <Image
              style={{
                flex:1,
                width:200,height:100,
                resizeMode: 'contain',
                marginBottom:5
              }}
              source={{
                uri: item.image
              }}
              
            />
            {"\n "}
            <Text style={{
              fontSize: 14
            }}>

            {moment.utc(item.updatedAt).local().startOf('seconds').fromNow()}
            
            </Text>
            </Text>

            <TouchableWithoutFeedback onPress={() =>
               fetch(`https://member-directory.herokuapp.com/bloguploader/like/${item._id}`, {
                method: "PATCH",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({item})
              })
               .then((response)=>{
                 return response.json()
             })
             .then(({data})=>{
                 console.log(data);
             })
             .catch((err)=>{console.log(err);})
            }>
            <Text>
            {"\n\t "}
            <MaterialCommunityIcons name="thumb-up-outline" size={20} color="black" />{item.like}
            </Text>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() =>
               fetch(`https://member-directory.herokuapp.com/bloguploader/unlike/${item._id}`, {
                method: "PATCH",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({item})
              })
               .then((response)=>{
                 return response.json()
             })
             .then(({data})=>{
                 console.log(data);
             })
             .catch((err)=>{console.log(err);})
            }>
            <Text>
            {"\t\t "}<MaterialCommunityIcons name="thumb-down-outline" size={20} color="black" />{item.dislike}
            </Text>
            </TouchableWithoutFeedback>
            </Text>
          )}
        />
      )}

        <Button
          onPress={() => navigation.navigate('Login')}
          title="Back"
        />
      </View>
    );
  }
  
  export default BlogUploadsScreen;