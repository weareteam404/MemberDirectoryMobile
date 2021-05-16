import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, Button, Image, Dimensions, TouchableWithoutFeedback  } from 'react-native';


function BlogScreen({ navigation }) {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();
  const contentWidth = Dimensions.get('window').width;

  const moment = require('moment'); 

  useEffect(() => {
    fetch('https://member-directory.herokuapp.com/blog/Bloginterface')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [data]);

    return (
      <View style={{ flex: 1, justifyContent: 'flex-start' , marginTop:30}}>
        <Text style={{ fontSize: 30 }}>Blog</Text>

        {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ _id }, index) => _id}
          renderItem={({ item }) => (
            
            <TouchableWithoutFeedback onPress={() => 
              navigation.navigate('BlogView',{id:(item._id)})
            }>
            <Text style={{
              marginVertical:10,
              fontSize: 20,
              backgroundColor:'white',
              borderWidth: 1, 
              borderColor:'black',
              borderRadius:10,
              margin:5
            }}

            >{" "}
              {item.title}
              {" \n "}
            <Text style={{
              fontSize: 14
            }}>
              {item.categorie}{item.firstname && " \n By: "}
              {item.firstname}{" "}{item.lastname}{" \n "}
            {moment.utc(item.createdAt).local().startOf('seconds').fromNow()}
            </Text>
            </Text>

            </TouchableWithoutFeedback>
          )}
        />
      )}

        <Button
          onPress={() => navigation.navigate('Login')}
          title="Log out"
        />
      </View>
    );
  }
  
  export default BlogScreen;