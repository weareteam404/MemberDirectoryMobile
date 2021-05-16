import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View, Button, Image, Dimensions  } from 'react-native';
import HTMLView from 'react-native-htmlview';

function BlogView({ navigation, route }) {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const contentWidth = Dimensions.get('window').width;
  const { id } = route.params;

  useEffect(() => {
    fetch('https://member-directory.herokuapp.com/blog/'+id)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [data]);

    return (
      <View style={{ flex: 1, justifyContent: 'flex-start' , marginTop:20}}>
        <Text style={{ fontSize: 30 }}>Blog</Text>

        {isLoading ? <ActivityIndicator/> : (
          <View style={{flex:1, alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'row'}}>
            <Text style={{
              marginVertical:10,
              fontSize: 20
            }}>{data.blog.title}{"\n"} 
            <Image
              style={{
                flex:1,
                resizeMode: 'contain',
                marginBottom:5
              }}
              source={{
                uri: data.blog.coverImage
              }}
            />
            {"\n"}
            <Text style={{
              fontSize: 14,
              padding: 5,
            }}
            >
              <HTMLView        
                value={data.blog.body}
                stylesheet={styles}
                renderNode={renderNode}
              />
            
            </Text></Text>
            </View>
      )}

        <Button
          onPress={() => navigation.navigate('Blog')}
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

  export default BlogView;