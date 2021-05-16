import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View, Button, Image, Dimensions  } from 'react-native';
import HTMLView from 'react-native-htmlview';

function JobView({ navigation, route }) {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();
  const { id } = route.params;

  useEffect(() => {
    fetch('https://memdir.herokuapp.com/jobs/'+id)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [data]);

    return (
      <View style={{ flex: 1, justifyContent: 'flex-start' , marginTop:20}}>
        <Text style={{ fontSize: 30 }}>Job Updates</Text>

        {isLoading ? <ActivityIndicator/> : (
          <View style={{flex:1, alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'row'}}>
            <Text style={{
              marginVertical:10,
              fontSize: 20
            }}>{data.title}{"\n"} 
            {"\n"}
            <Text style={{
              fontSize: 14,
              padding: 5,
            }}
            >
            {data.description}{"\n Requirements:\n"}
            <FlatList
          data={data.requirements}
          renderItem={({ item }) => (
            <Text style={{
                fontSize: 14,
                padding: 5,
              }}
              >
            {item}{"\n"}
            </Text>
          )}
          />
            {"\n"}{"Closing Date: "}{data.closingDate}{"\n"}
            {moment.utc(item.date).local().startOf('seconds').fromNow()}
            </Text></Text>
            </View>
      )}

        <Button
          onPress={() => navigation.navigate('Main')}
          title="Back"
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    a: {
      fontWeight: '300',
      color: '#4b4453', // make links coloured gray
    },
    width : Dimensions.get('window').width
  });

  function renderNode(node) {
    if (node.name === 'img') {
      return (
        <Image
          source={{ uri: node.attribs.src, cache: 'reload' }}
          style={{
            width: 'auto',
            height: node.attribs.height || Dimensions.get('window').height, 
            resizeMode: 'contain',
          }}
        />
      );
    }
  }

  export default JobView;