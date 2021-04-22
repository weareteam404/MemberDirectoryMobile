import React, {useState} from 'react';
import {
  ImageBackground,
  View,
  Text,
  Button,
  TextInput,
  StyleSheet
} from 'react-native';

import Firebase from 'firebase/app'
import "firebase/auth";

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('kalumsilva@gmail.com');
  const [password, setPassword] = useState('kalumsilva123');

  const userLogin = () => {
    try 
    { 
    Firebase.auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => navigation.navigate('Main'))
          .catch(error => console.log(error))
    }
    catch (e) 
    {
      console.log('Error',e)
    }
    
  }

    return (
      <View style={styles.header}>
      <ImageBackground
        source={require('../img/loginback.jpg')}
        style={styles.ImageBackground}>
        <View style={styles.container}>
          <Text style={styles.text}>Login</Text>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.formContainerText}>User Name:</Text>
          <TextInput
            style={styles.textInputContainer}
            onChangeText={setEmail}
            value={email}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.formContainerText}> Password:</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.textInputContainer}
            onChangeText={setPassword}
            value={password}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Login" onPress={userLogin} />
        </View>
      </ImageBackground>
    </View>
    );
  }

  const styles = StyleSheet.create({
    ImageBackground: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    container: {
      alignSelf: 'center',
    },
    text: {
      marginTop: 77,
      color: 'black',
      fontWeight: 'bold',
      fontSize: 33,
      // italic: {fontStyle: 'italic'},
      //   alignItems:"center",
      //   justifyContent:"center"
    },
    header: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    formContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: 30,
      marginRight: 40,
      marginTop: 30,
    },
  
    buttonContainer: {
      width: '70%',
      marginTop: 44,
      marginLeft: 60,
      borderRadius: 55,
    },
    formContainerText: {
      fontSize: 20,
      marginTop: 5,
      fontWeight: 'bold',
      color: 'black',
    },
    textInputContainer: {
      backgroundColor: 'white',
      width: '70%',
      borderRadius: 22,
    },
  });

  export default LoginScreen;