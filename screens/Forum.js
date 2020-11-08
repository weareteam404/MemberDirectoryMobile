import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, Button } from 'react-native';

function ForumScreen({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://member-directory.herokuapp.com/forum')
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
            <Text>{item.message}, {item.updatedAt}</Text>
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
  
  export default ForumScreen;