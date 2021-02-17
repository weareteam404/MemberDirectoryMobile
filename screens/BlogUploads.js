import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, Button, Image, Linking} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { moment } from 'moment';

function BlogUploadsScreen({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const moment = require('moment'); 

  useEffect(() => {
    fetch('https://member-directory.herokuapp.com/bloguploader')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

    return (
    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' , marginTop:20 }}>
        <Text style={{ fontSize: 30 }}>Blog Uploads</Text>
        
        {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data.reverse()}
          keyExtractor={({ _id }, index) => _id}
          renderItem={({ item }) => (
            
            <Text style={{
              marginVertical:10,
              fontSize: 20,
              backgroundColor:'white',
              borderWidth: 1, 
              borderColor:'black',
              borderRadius:10,
              margin:5
            }}
            onPress={() => Linking.openURL(item.url)}
            >{item.title}
                
              {" \n "}
              <Image
              style={{
                flex:1,
                width:200,height:100,
                resizeMode: 'contain',
                marginBottom:20
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