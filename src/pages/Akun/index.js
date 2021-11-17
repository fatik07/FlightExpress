import React, { useState } from 'react'
import { Image,Text, StyleSheet, View, Dimensions, ImageBackground } from 'react-native'
import { ImageHeader, ImagePP } from '../../assets';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-elements/dist/buttons/Button'
import {AuthContext} from '../../providers/AuthProvider'
import * as firebase from 'firebase'

const Akun = () => {

  const[Name, setName] = useState('');
  const[Email, setEmail] = useState('');
  const[Telp, setTelp] = useState();

  var userId = firebase.auth().currentUser.uid;
  firebase.database().ref('/users/' + userId).once('value').then((snapshot) => {
    var username = (snapshot.val().name) || 'admin';
    var email = (snapshot.val().email) || 'admin@gmail.com';
    var telp = (snapshot.val().telp) || '089+++++';
    setName(username);
    setEmail(email);
    setTelp(telp);
  });

  return (
    <AuthContext.Consumer>
    {(auth) => (
    <View>
      <ImageBackground source={ImageHeader} style={styles.header}>
        <View style={{ flexDirection:'row',justifyContent:'center',marginHorizontal:20 }}>
          <Text style={styles.title}>User Profile</Text>
        </View>
      </ImageBackground>
      
      <View style={{ flexDirection:'row', justifyContent:'center' }}>
        <View style={{ flexDirection:'column',justifyContent:'center' }}>
          {/* <View style={styles.bgImg}>
            <Image style={styles.userImg} source={ ImagePP }></Image>
          </View> */}
          <Text style={styles.name}>"Welcome, {Name}"</Text>
        </View>
      </View>
      <Text style={styles.infoH1}>Informasi Lengkap</Text>
      <View style={styles.info}>
        <View style={{ flexDirection:'row' }}>
          <Text style={{ fontSize:16 }}>Nama Lengkap:</Text>
          <Text style={{ fontSize:16,marginLeft:100 }}>{Name}</Text>
        </View>
        <View style={{ flexDirection:'row' }}>
          <Text style={{ fontSize:16 }}>Email:</Text>
          <Text style={{ fontSize:16,marginLeft:155 }}>{Email}</Text>
        </View>
        <View style={{ flexDirection:'row' }}>
          <Text style={{ fontSize:16 }}>No Telephone:</Text>
          <Text style={{ fontSize:16,marginLeft:107 }}>{Telp}</Text>
        </View>
      </View>
      <View style={{ flexDirection:'row',justifyContent:'center' }}>
        <Button 
        buttonStyle={styles.submit}
        title="logout" 
        onPress={function() { 
          auth.setIsLoggedIn(false);
          auth.setCurrentUser({});
        }}
        />
      </View>
      
    </View>
    )}
    </AuthContext.Consumer>
  )
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default Akun

const styles = StyleSheet.create({
  header: {
    width: windowWidth,
    height: windowHeight * 0.15
  },
  title:{
    fontSize:28,
    marginTop:40,
    textAlign:'center',
    color:'white'
  }, 
  userImg: {
    backgroundColor:'#fff',
    width: 120,
    height: 120,
    borderRadius:75,
    marginTop:-70
  },
  name: {
    marginTop:30,
    fontSize:32,
    textAlign:'center'
  },
  infoH1: {
    marginTop:50,
    marginLeft:10,
    fontSize:20,
    fontWeight:'bold'
  },
  info: {
    marginLeft:10,
    marginTop:10, 
  },
  submit: {
    marginTop:50,
    borderRadius:15,
    width:200,
    backgroundColor:'#ff6871'
  }
})