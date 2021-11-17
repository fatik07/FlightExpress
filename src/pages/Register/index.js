import React, {useState} from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { ImageLogo } from '../../assets'
import { Input, Card, Button } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MCicon from 'react-native-vector-icons/MaterialCommunityIcons'
// import {storeData, storeDataJSON} from '../../functions/AsyncStorageFunctions'
import * as firebase from 'firebase'

const Register = (props) => {

  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Telp, setTelp] = useState('');
  const [Password, setPassword] = useState('');

  return (
    <View style={{ flex:1,backgroundColor:'#ff6871' }}>
        <View style={styles.card}>
          <Image source={ImageLogo} style={styles.logo}></Image>
        
          <View style={styles.input}>
          <Input 
          leftIcon={<Ionicons name="people-outline" size={24} color="black" />} 
          placeholder="Username"
          onChangeText={function(currentInput) {
            setName(currentInput);
          }}
          autoCompleteType="off"
        />
        <Input 
          leftIcon={<Ionicons name="mail-outline" size={24} color="black" />} 
          placeholder="Email Address" 
          onChangeText={function(currentInput) {
            setEmail(currentInput);
          }}
          autoCompleteType="off"
        />
        <Input 
          leftIcon={<MCicon name="phone" size={24} color="black" />} 
          placeholder="No Telp"
          keyboardType='number-pad'
          onChangeText={function(currentInput) {
            setTelp(currentInput);
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
          title="Register"
          type='solid'
          buttonStyle={styles.register}
          onPress={function(){
            if (Name && Email && Telp && Password) {
              firebase.auth().createUserWithEmailAndPassword(Email, Password).then((userCreds) => {
                userCreds.user.updateProfile({displayName:Name});
                firebase.database().ref().child('users/').child(userCreds.user.uid).set({
                  name: Name,
                  email: Email,
                  telp: Telp,
                  pesan: ''
                }).then( () => {
                  alert('account created success');
                  console.log(userCreds.user);
                  props.navigation.navigate('Login');
                }).catch((error) => {
                  alert(error)
                })
              }).catch((error) => {
                alert(error)
              })
            } else {
              alert('belum ada')
            }
            // let currentUser = {
            //   name: Name,
            //   email: Email,
            //   telp: Telp,
            //   password: Password
            // };
            // storeDataJSON(Email, currentUser);
            // props.navigation.navigate('Login');
          }}
        />
        <Button
          type="clear"
          title="SUdah punya akun ?"
          onPress={function(){
            props.navigation.navigate('Login')
          }}
        />
          </View>
        </View>
      </View>
  )
}

export default Register

const styles = StyleSheet.create({
  card: {
    backgroundColor:'rgba(255,255,255,0.7)',
    width:280,
    height:490,
    borderRadius:30,
    marginLeft:50,
    marginTop:120
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
    marginTop:10
  },
  register: {
    borderRadius:15,
    backgroundColor:'#ff6871'
  }
})
