import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function ForumScreen({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://member-directory.herokuapp.com/forum/home')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

    return (
    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' , marginTop:20 }}>
        <Text style={{ fontSize: 30 }}>Forum</Text>
        
        {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ _id }, index) => _id}
          renderItem={({ item }) => (
            
            <Text style={{
              backgroundColor: '#f9c2ff',
              marginVertical:10,
              fontSize: 20
            }}>
              <MaterialCommunityIcons name="human-greeting" size={24} color="black" />
              {item.message} {"\n"}
            <Text style={{
              backgroundColor: '#f9c2ff',
              fontSize: 14
            }}
            >
            {item.updatedAt}</Text>
            </Text>

          )}
        />
      )}

        <Button
          onPress={() => navigation.navigate('Login')}
          title="Log out"
        />
        <Button
          onPress={() => navigation.navigate('ForumCreate')}
          title="Add Post"
        />
      </View>
    );
  }
  
  export default ForumScreen;