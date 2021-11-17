import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Dimensions, Image } from 'react-native'
import { ImageHeader,ImageTicket } from '../../assets'
import Icon from 'react-native-vector-icons/Ionicons'

const cariTiket = ({navigation}) => {
  const Back = () => {
    navigation.goBack()
  }

  return (
    <View>
      <ImageBackground source={ImageHeader} style={styles.header}>
        <View style={{ flexDirection:'row',justifyContent:'space-between',marginHorizontal:10 }}>
          <Icon style={{ marginTop:15 }} name="chevron-back-outline" size={30} color="white" onPress={Back} />
          <Text style={styles.title}>Tiket Tersedia</Text>
          <Icon style={{ marginTop:20 }} name="md-ellipsis-vertical-outline" size={20} color="white"/>
        </View>
        <View style={{ flexDirection:'row',justifyContent:'center',marginLeft:20,marginRight:20 }}>
          <View style={{ flexDirection:'column' }}>
            <Text style={styles.nama}>JKT, ID</Text>
            <Text style={styles.subNama}>Jakarta, 23 Januari 2021</Text>
          </View>
          <Text style={styles.garis}> ------------- </Text>
          <View style={{ flexDirection:'column' }}>
            <Text style={styles.nama}>TYOA, JP</Text>
            <Text style={styles.subNama}>Jakarta, 23 Januari 2021</Text>
          </View>
        </View>
      </ImageBackground>

      <View>
        <ImageBackground source={ImageTicket} style={styles.tiket} >
          <View style={{ flexDirection:'row',marginLeft:70 }}>
          
            <Text style={styles.namaTiket}>JKT, ID</Text>
          
          <Text style={styles.garisTiket}> ------------- </Text>
          
            <Text style={styles.namaTiket}>TYOA, JP</Text>
            
          
        </View>
        </ImageBackground>
      </View>

    </View>
    
  )
}

export default cariTiket

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  header: {
    width: windowWidth,
    height: windowHeight * 0.40
  },
  title:{
    fontSize:20,
    marginTop:20,
    textAlign:'center',
    color:'white'
  },
  nama:{
    fontSize:28,
    color:'white',
    marginTop:70
  },
  garis: {
    marginTop:70,
    color:'white',
    fontSize:30
  },
  subNama:{
    fontSize:10,
    color:'white',
    marginTop:0
  },
  submit:{
    backgroundColor:'red',
    width:'85%',
    height:50,
    borderRadius:30,
    alignItems:'center',
  },
  namaSubmit:{
    fontSize:20,
    color:'white',
    marginTop:15
  },
  tiket: {
    width:'100%',
    height:230,
    marginTop:-120,
    borderColor:'green',
  },
  namaTiket:{
    fontSize:14,
    color:'#ff6152',
    marginTop:90
  },
  garisTiket: {
    marginTop:90,
    color:'#ff6152',
    fontSize:14
  },
})
