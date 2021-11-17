import React, { Component } from 'react'
import { Text, StyleSheet, View, AppRegistry } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as firebase from 'firebase'

import Router from './src/router';
import Register from './src/pages/Register';
import Login from './src/pages/Login';

import { AuthContext,AuthProvider } from './src/providers/AuthProvider';
import Splash from './src/pages/Splash';

const AuthStack = createNativeStackNavigator();

const AuthStackScreen = () => {
  return(
    <AuthStack.Navigator initialRouteName="Splash">
      <AuthStack.Screen name="Splash" component={Splash} options={{ headerShown:false }} />
      <AuthStack.Screen name="Register" component={Register} options={{ headerShown:false }} />
      <AuthStack.Screen name="Login" component={Login} options={{ headerShown:false }}/>
    </AuthStack.Navigator>
  )
}

const firebaseConfig = {
  apiKey: "AIzaSyCBgsqb1zmGQkIYMtHeO9jVioLt5WovY7s",
  authDomain: "flightexpress-edfc9.firebaseapp.com",
  databaseURL: "https://flightexpress-edfc9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "flightexpress-edfc9",
  storageBucket: "flightexpress-edfc9.appspot.com",
  messagingSenderId: "174661902755",
  appId: "1:174661902755:web:f3144235572f23e17f3a16",
  measurementId: "G-DCY83ZQXJ0"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default class App extends Component {
  render() {
    return (
      <AuthProvider>
        <AuthContext.Consumer>
          {(auth) => (
            <NavigationContainer NavigationContainer>
              {auth.IsLoggedIn?<Router/>:<AuthStackScreen/>}
            </NavigationContainer>
          )}
        </AuthContext.Consumer>
      </AuthProvider>
    );
  }
}

// const styles = StyleSheet.create({});

AppRegistry.registerComponent('App', () => App);
