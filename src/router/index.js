import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../pages/Home';
import Ticket from '../pages/Ticket';
import Pesan from '../pages/Pesan';
import Event from '../pages/Event';
import Akun from '../pages/Akun';
import Splash from '../pages/Splash';
import { BottomNavigator } from '../component';
import Penerbangan from '../pages/Home/perbangan';
import Bali from '../pages/Home/wisata/bali';
import {AuthContext} from '../providers/AuthProvider';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
      <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
        <Tab.Screen name="Home" component={Home} options={{ headerShown:false }}/>
        <Tab.Screen name="Pesan" component={Pesan} options={{ headerShown:false }}/>
        {/* <Tab.Screen name="Ticket" component={Ticket} options={{ headerShown:false }}/> */}
        <Tab.Screen name="Event" component={Event} options={{ headerShown:false }}/>
        <Tab.Screen name="Akun" component={Akun} options={{ headerShown:false }}/>
      </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <AuthContext.Consumer>
    {(auth) => (
      <Stack.Navigator initialRouteName="MainApp">
        {/* <Stack.Screen name="Home" component={Home} options={{ headerShown:false }} /> */}
        {/* <Stack.Screen name="Splash" component={Splash} options={{ headerShown:false }} /> */}
        <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown:false }} />
        <Stack.Screen name="Penerbangan" component={Penerbangan} options={{ headerShown:false }} />
        <Stack.Screen name="Bali" component={Bali} options={{ headerShown:false }} />
        {/* <Stack.Screen name="cariTiket" component={cariTiket} options={{ headerShown:false }} /> */}
      </Stack.Navigator>
    )}
    </AuthContext.Consumer>
  );
};

export default Router;
