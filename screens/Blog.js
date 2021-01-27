import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View, Button, Image, Dimensions  } from 'react-native';
import HTMLView from 'react-native-htmlview';

function BlogScreen({ navigation }) {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const contentWidth = Dimensions.get('window').width;

  useEffect(() => {
    fetch('https://member-directory.herokuapp.com/blog/Bloginterface')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

    return (
    <View style={{ flex:1, alignItems: 'flex-start', justifyContent: 'flex-start' , marginTop:20}}>
        <Text style={{ fontSize: 30 }}>Blog</Text>

        {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ _id }, index) => _id}
          renderItem={({ item }) => (
            <Text style={{
              marginVertical:5,
              fontSize: 20
            }}>{item.title}{"\n"} 
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
            {"\n"}
            <Text style={{
              fontSize: 14,
              padding: 20,
            }}
            >
              <HTMLView style={{width:contentWidth-5}} value={item.body} />
            </Text></Text>
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