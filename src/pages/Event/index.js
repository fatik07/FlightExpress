import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import MapView,{Marker} from 'react-native-maps';


export default class Event extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <MapView style={styles.map} initialRegion={{ 
          latitude:-7.3581853,
          longitude:112.6893124,
          latitudeDelta:0.001,
          longitudeDelta:0.001
         }}>
           <Marker coordinate={{ latitude:-7.358204595040063, longitude:112.68938884302229 }}></Marker>
         </MapView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
})
