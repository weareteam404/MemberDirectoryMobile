import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View, Button } from 'react-native';

function BlogScreen({ navigation }) {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://member-directory.herokuapp.com/blog')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

    return (
    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' , marginTop:20}}
    >
        <Text style={{ fontSize: 30 }}>Blog</Text>

        {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ _id }, index) => _id}
          renderItem={({ item }) => (
            <Text style={{
              backgroundColor: '#f9c2ff',
              marginVertical:10,
              fontSize: 20
            }}>{item.title}{"\n"} <Text style={{
              backgroundColor: '#f9c2ff',
              fontSize: 14
            }}
            >{item.body.substring(0, 54)}... </Text></Text>
            

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