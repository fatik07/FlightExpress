import React from 'react';
import { 
Text, StyleSheet, View, ImageBackground, Dimensions, ScrollView, TextInput,Image, TouchableOpacity, Button } 
from 'react-native';
import { ImageHeader,ImageDisc,ImageBali,ImageBorobudur,ImageBromo } from '../../assets';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../../providers/AuthProvider'
import * as firebase from 'firebase'

const Home = ({navigation}) => {

  const Penerbangan = () => {
    navigation.navigate('Penerbangan');
  }

  const Bali = () => {
    navigation.navigate('Bali');
  }

  var user = firebase.auth().currentUser;
  var name, telp;

  if (user != null) {
    name = user.displayName;
    telp = user.telp;
  }

  return (
    <AuthContext.Consumer>
      {(auth) => (
        
      
        <ScrollView style={styles.page}>
          <ImageBackground source={ImageHeader} style={styles.header}>
            <View style={{ flexDirection:'row',justifyContent:'space-between',marginHorizontal:20 }}>
              <Icon style={{ marginTop:20 }} name="menu" size={20} color="white" />
              <Text style={styles.title}>FlightExpress</Text>
              <Icon style={{ marginTop:20 }} name="md-notifications-outline" size={20} color="white"/>
            </View>
            <Text style={styles.h1}>Hi, {user.displayName} </Text>
            <Text style={{ fontSize:14,marginLeft:40, color:'#fff' }}>Selamat datang di FlightExpress :)</Text>
            {/* <Text style={styles.h2}>Travel Point <Text style={{ color:'green' }}>1234</Text></Text> */}
          </ImageBackground>

          <View style={{ justifyContent:'center' }}>
            <TextInput style={styles.cari} placeholder="Cari tiket, bandara atau saran ?" placeholderTextColor='#ff5f6d'>
            </TextInput>
            <TouchableOpacity>
              <Icon style={styles.imgCari} name="search" size={20} color="#ff5f6d" />
            </TouchableOpacity>
          </View>

          <ScrollView horizontal={true} style={{ flexDirection:'row',marginLeft:10,marginTop:10,marginRight:10 }}>
            <TouchableOpacity style={styles.category} onPress={Penerbangan}>
              <Icon style={{ textAlign:'center',marginTop:10 }} name="airplane-outline" size={35} color="white" />
              <Text style={{ color:'white',textAlign:'center',marginTop:5 }}>Penerbangan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.category} onPress={function(){alert('404 Not Found !')}}  >
              <Icon style={{ textAlign:'center',marginTop:10 }} name="car-sport-outline" size={35} color="white" />
              <Text style={{ color:'white',textAlign:'center',marginTop:5 }}>Penginapan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.category} onPress={function(){alert('404 Not Found !')}}>
              <Icon style={{ textAlign:'center',marginTop:10 }} name="business-outline" size={35} color="white" />
              <Text style={{ color:'white',textAlign:'center',marginTop:5 }}>Hotel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.category}>
              <Icon style={{ textAlign:'center',marginTop:15 }} name="md-ellipsis-horizontal-outline" size={35} color="white" />
              <Text style={{ color:'white',textAlign:'center' }}>Lainnya</Text>
            </TouchableOpacity>
          </ScrollView>

          <View style={styles.divDisc}>
            <Text style={styles.textDisc}>Jangan lwatkan promo hari ini!</Text>
            <TouchableOpacity>
              <View style={styles.buttonDisc}>
                <Text style={styles.textDisc1}>Lebih banyak</Text>
              </View>
            </TouchableOpacity>
          </View>

          
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ marginTop:20,marginLeft:10,marginRight:10 }}>
            <ImageBackground source={ImageDisc} style={{ width:280,height:100}}>
              <Text style={styles.namaDisc}>Penerbangan Domestik</Text>
              <Text style={styles.kodeDisc}>Kode <Text style={styles.namaKode}>DOMKUY</Text></Text>
              <Text style={styles.noDisc}>20%</Text>
              <TouchableOpacity style={styles.buttonInfo} onPress={function(){alert('404 Not Found !')}}>
                <Text style={{ fontSize:10 }}>info selengkapnya</Text>
              </TouchableOpacity>
            </ImageBackground>          
            <ImageBackground source={ImageDisc} style={{ width:280,height:100,marginLeft:20}}>
              <Text style={styles.namaDisc}>Penerbangan Internasional</Text>
              <Text style={styles.kodeDisc}>Kode <Text style={styles.namaKode}>INTERKUY</Text></Text>
              <Text style={styles.noDisc}>20%</Text>
              <TouchableOpacity style={styles.buttonInfo} onPress={function(){alert('404 Not Found !')}}>
                <Text style={{ fontSize:10 }}>info selengkapnya</Text>
              </TouchableOpacity>
            </ImageBackground>
            <ImageBackground source={ImageDisc} style={{ width:280,height:100,marginLeft:20}}>
              <Text style={styles.namaDisc}>Penerbangan Internasional</Text>
              <Text style={styles.kodeDisc}>Kode <Text style={styles.namaKode}>INTERKUY</Text></Text>
              <Text style={styles.noDisc}>20%</Text>
              <TouchableOpacity style={styles.buttonInfo} onPress={function(){alert('404 Not Found !')}}>
                <Text style={{ fontSize:10 }}>info selengkapnya</Text>
              </TouchableOpacity>
            </ImageBackground> 
            <ImageBackground source={ImageDisc} style={{ width:280,height:100,marginLeft:20}}>
              <Text style={styles.namaDisc}>Penerbangan Internasional</Text>
              <Text style={styles.kodeDisc}>Kode <Text style={styles.namaKode}>INTERKUY</Text></Text>
              <Text style={styles.noDisc}>20%</Text>
              <TouchableOpacity style={styles.buttonInfo} onPress={function(){alert('404 Not Found !')}}>
                <Text style={{ fontSize:10 }}>info selengkapnya</Text>
              </TouchableOpacity>
            </ImageBackground> 
          </ScrollView>
            
          <View style={styles.divDisc}>
            <Text style={styles.textDisc}>Disarankan untuk anda</Text>
          </View>

          <View>

            <TouchableOpacity style={styles.rekom} onPress={Bali}>
              <View style={{ flexDirection:'row' }}>
                {/* <View style={styles.imgRekom}></View> */}
                <Image source={ImageBorobudur} style={styles.imgRekom}></Image>
                <View style={{ flexDirection:'column',marginTop:20,marginLeft:20 }}>
                  <Text style={{ fontWeight:'bold' }}>Borobudur Temple</Text>
                  <View style={{ flexDirection:'row' }}>
                    <Icon name="location" size={15} color="white" />
                    <Text>Magelang, Indonesian</Text>
                    <View style={{ flexDirection:'row',marginLeft:50,marginTop:-10 }}>
                      <Icon name="star" size={15} color="yellow" />
                      <Text>4,5</Text>
                    </View>
                  </View>
                  <Text style={{ height:1,width:200,backgroundColor:'white',marginTop:10,marginBottom:10 }}/>
                  <View style={{ flexDirection:'column' }}>
                    <View style={{ flexDirection:'row',width:230 }}>
                      <Text>Candi Borobudur merupakan situs arkeologi candi Buddha terbesar di dunia. Candi Borobudur terletak di Desa Borobudur, Kecamatan Borobudur, Kabupaten Magelang, Jawa Tengah.</Text>
                    </View>
                    {/* <Text>adipisicing elit. Voluptas nobis temporibus</Text> */}
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            <View style={styles.rekom}>
              <View style={{ flexDirection:'row' }}>
                {/* <View style={styles.imgRekom}></View> */}
                <Image source={ImageBali} style={styles.imgRekom}></Image>
                <View style={{ flexDirection:'column',marginTop:20,marginLeft:20 }}>
                  <Text style={{ fontWeight:'bold' }}>Bali Beach</Text>
                  <View style={{ flexDirection:'row' }}>
                    <Icon name="location" size={15} color="white" />
                    <Text>Bali, Indonesian</Text>
                    <View style={{ flexDirection:'row',marginLeft:80,marginTop:-10 }}>
                      <Icon name="star" size={15} color="yellow" />
                      <Text>4,5</Text>
                    </View>
                  </View>
                  <Text style={{ height:1,width:200,backgroundColor:'white',marginTop:10,marginBottom:10 }}/>
                  <View style={{ flexDirection:'column' }}>
                    <View style={{ flexDirection:'row',width:230 }}>
                        <Text>Pulau Bali adalah bagian dari Kepulauan Sunda Kecil sepanjang 153 km dan selebar 112 km sekitar 3,2 km dari Pulau Jawa. Secara geografis, Bali terletak di 8°25′23″ Lintang Selatan dan 115°14′55″ Bujur Timur.</Text>
                      </View>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.rekom}>
              <View style={{ flexDirection:'row' }}>
                {/* <View style={styles.imgRekom}></View> */}
                <Image source={ImageBromo} style={styles.imgRekom}></Image>
                <View style={{ flexDirection:'column',marginTop:20,marginLeft:20 }}>
                  <Text style={{ fontWeight:'bold' }}>Bromo Mountain</Text>
                  <View style={{ flexDirection:'row' }}>
                    <Icon name="location" size={15} color="white" />
                    <Text>Lumajang, Indonesian</Text>
                    <View style={{ flexDirection:'row',marginLeft:50,marginTop:-10 }}>
                      <Icon name="star" size={15} color="yellow" />
                      <Text>4,5</Text>
                    </View>
                  </View>
                  <Text style={{ height:1,width:200,backgroundColor:'white',marginTop:10,marginBottom:10 }}/>
                  <View style={{ flexDirection:'column' }}>
                    <View style={{ flexDirection:'row',width:230 }}>
                      <Text>Gunung Bromo terkenal sebagai objek wisata utama di Jawa Timur. Sebagai sebuah objek wisata, Bromo menjadi menarik karena statusnya sebagai gunung berapi yang masih aktif.</Text>
                    </View>
                    {/* <Text>adipisicing elit. Voluptas nobis temporibus</Text> */}
                  </View>
                </View>
              </View>
            </View>

          </View>

        </ScrollView>
        
      
      )}
      </AuthContext.Consumer>
  )
}

export default Home


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex:1,
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.30
  },
  title:{
    fontSize:20,
    marginTop:20,
    textAlign:'center',
    color:'white'
  },  
  h1: {
    fontSize: 34,
    color:'white',
    marginTop:50,
    marginLeft:40
  },
  h2:{
    fontSize: 16,
    color:'white',
    marginLeft:40
  },
  cari:{
    flexDirection:'row',
    backgroundColor:'#FFD6D8',
    justifyContent:'center',
    alignItems:'center',
    borderColor:'red',
    borderRadius:10,
    padding:10,
    width:370,
    marginTop:20,
    marginHorizontal:10
  },
  imgCari:{
    width:20,
    height:20,
    marginLeft:350,
    marginTop:-32
  },
  category: {
    width:80,
    height:80,
    backgroundColor:'#ff6871',
    marginTop:10,
    marginLeft:10,
    borderRadius:10
  },
  divDisc:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:30,
    marginHorizontal:15
  },
  buttonDisc:{
    backgroundColor:'red',
    borderRadius:20,
    padding:10,
    marginTop:-10,
  },
  textDisc:{
    color:'red',
    fontWeight:'bold'
  },
  textDisc1:{
    color:'white'
  },
  namaDisc:{
    marginTop:20,
    marginLeft:10,
    fontSize:16,
  },
  kodeDisc:{
    marginLeft:20,
    marginTop:10
  },
  namaKode:{
    fontSize:16,
    color:'red',
  },
  noDisc:{
    fontSize:34,
    marginTop:-48,
    marginLeft:210
  },
  buttonInfo:{
    backgroundColor:'red',
    padding:5,
    width:80,
    marginLeft:193,
    borderRadius:15
  },
  rekom:{
    backgroundColor:'#ff6152',
    width:'94%',
    height:150,
    borderRadius:10,
    marginLeft:10,
    marginRight:10,
    marginTop:10,
    marginBottom:10
  },
  imgRekom:{
    backgroundColor:'white',
    width:100,
    height:100,
    marginTop:25,
    marginLeft:20,
  }
})
