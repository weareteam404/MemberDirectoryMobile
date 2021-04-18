import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, Button} from 'react-native';


function NotificationScreen({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const moment = require('moment'); 

  useEffect(() => {
    fetch('https://memdir.herokuapp.com/jobs/')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

    return (
    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' , marginTop:20 }}>
        <Text style={{ fontSize: 30 }}>Job Alerts</Text>

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

            >{" "}
              {item.title}
              {" \n "}
            <Text style={{
              fontSize: 14
            }}>
              {item.description}{" \n "}
            {moment.utc(item.date).local().startOf('seconds').fromNow()}
            </Text>
            </Text>

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
  
  export default NotificationScreen;