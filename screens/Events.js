import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, Button, Image} from 'react-native';


function EventsScreen({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://member-directory.herokuapp.com/events/')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

    return (
      <View style={{ flex: 1, justifyContent: 'flex-start' , marginTop:20 }}>
        <Text style={{ fontSize: 30 }}>Events</Text>

        {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
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
            <Image
              style={{
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
              {item.description}{"\n Number of participants: "}{item.attendance}{" "}{PaidOrFree(item.paid)}
            </Text>
            </Text>
          )}
        />
      )}

        <Button
          style={{ flex: 2 }}
          onPress={() => navigation.navigate('Login')}
          title="Log out"
        />
      </View>
    );
  }
  
function PaidOrFree(props){
  const isPaid = props;
  if(isPaid){
    return "\n Tickets available"
  }
  else{
    return "\n This is a free event"
  }
}

  export default EventsScreen;