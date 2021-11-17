import React, {useState, useEffect} from 'react'
import { ImageBackground } from 'react-native'
import { StyleSheet, View, Text, Image } from 'react-native'
import { ImageLogo } from '../../assets'

const Splash = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000)
  }, [navigation]);

  return (
    <View style={styles.background}>
      <Image source={ImageLogo} style={styles.logo}></Image>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  background: {
    flex:1,
    backgroundColor:'#ff6871'
  },
  logo: {
    width:250,
    marginTop:150,
    marginLeft:70
  }
})