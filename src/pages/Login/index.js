import React, {useState} from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { ImageLogo } from '../../assets'
import { Input, Card, Button } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MCicon from 'react-native-vector-icons/MaterialCommunityIcons'
import {AuthContext} from '../../providers/AuthProvider'
// import {getDataJSON} from '../../functions/AsyncStorageFunctions'
// import firebase from '@react-native-firebase/app'
// import auth from '@react-native-firebase/auth'
import * as firebase from 'firebase'


const Login = (props) => {

  // const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  return (
    <AuthContext.Consumer>
      {(auth) => (
      <View style={{ flex:1,backgroundColor:'#ff6871' }}>
        <View style={styles.card}>
          <Image source={ImageLogo} style={styles.logo}></Image>
        
          <View style={styles.input}>
            <Input 
              leftIcon={<Ionicons name="mail-outline" size={24} color="black" />} 
              placeholder="Email Address"
              onChangeText={function(currentInput) {
                setEmail(currentInput);
              }} 
              autoCompleteType="off"
            />
            <Input 
              leftIcon={<Ionicons name="key-outline" size={24} color="black" />} 
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={function(currentInput) {
                setPassword(currentInput);
              }}
            />
            <Button
              title="Login"
              type='solid'
              buttonStyle={styles.login}
              onPress={function() {
                firebase.auth().signInWithEmailAndPassword(Email, Password).then((userCreds) => {
                  auth.setIsLoggedIn(true);
                  auth.setCurrentUser(userCreds.user);
                }).catch((error) => {
                  alert(error)
                })
                // let userData = await getDataJSON(Email);
                // if(userData.password == Password){
                //   auth.setIsLoggedIn(true);
                //     auth.setCurrentUser(userData);
                // } else {
                //   alert('failed login');
                // }
              
              }}
            />
            <Button
              type="clear"
              title="Tidak punya akun ?"
              onPress={function(){
                props.navigation.navigate('Register')
              }}
            />
          </View>
        </View>
      </View>
    )}
    </AuthContext.Consumer>
  )
}

export default Login

const styles = StyleSheet.create({
  card: {
    backgroundColor:'rgba(255,255,255,0.7)',
    width:280,
    height:400,
    borderRadius:30,
    marginLeft:50,
    marginTop:150
  },
  logo: {
    width:100,
    height:100,
    marginLeft:90,
    marginTop:10
  },
  input: {
    width:250,
    marginLeft:15,
    marginTop:30
  },
  login: {
    borderRadius:15,
    backgroundColor:'#ff6871'
  }
})



// firebase.auth().signInWithEmailAndPassword(Email, Password).then((userCreds) => {
//   auth.setIsLoggedIn(true);
//   auth.setCurrentUser(userCreds.user);
// }).catch((error) => {
//   alert(error)
// })

// let userData = await getDataJSON(Email);
//                 if(userData.password == Password){
//                   auth.setIsLoggedIn(true);
//                     auth.setCurrentUser(userData);
//                 } else {
//                   alert('failed login');
//                 }
//               }}