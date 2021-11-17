import React,{Component, useState} from 'react'
import { StyleSheet, Text, View,Dimensions,ImageBackground } from 'react-native'
import { ImageBorobudur, ImageHeader } from '../../../assets';
import Icon from 'react-native-vector-icons/Ionicons';
import { Image } from 'react-native';

const Bali = ({navigation}) => {

  const Back =() => {
    navigation.goBack();
  }

  return (
    <View>
      <ImageBackground source={ImageHeader} style={styles.header}>
        <View style={{ flexDirection:'row',justifyContent:'space-between',marginHorizontal:10 }}>
          <Icon style={{ marginTop:15 }} name="chevron-back-outline" size={30} color="white" onPress={Back} />
          <Text style={styles.title}>Borobudur Temple</Text>
          <Icon style={{ marginTop:20 }} name="md-ellipsis-vertical-outline" size={20} color="white"/>
        </View>
      </ImageBackground>
      <View>
        <Image source={ImageBorobudur} style={styles.img} />
        <Text style={styles.desc}>Dinasti Sailendra membangun peninggalan Budha terbesar di dunia antara 780-840 Masehi. Dinasti Sailendra merupakan dinasti yang berkuasa pada masa itu. Peninggalan ini dibangun sebagai tempat pemujaan Budha dan tempat ziarah. Tempat ini berisi petunjuk agar manusia menjauhkan diri dari nafsu dunia dan menuju pencerahan dan kebijaksanaan menurut Buddha. Peninggalan ini ditemukan oleh Pasukan Inggris pada tahun 1814 dibawah pimpinan Sir Thomas Stanford Raffles. Area candi berhasil dibersihkan seluruhnya pada tahun 1835</Text>
        <Text style={styles.desc}>Borobudur dibangun dengan gaya Mandala yang mencerminkan alam semesta dalam kepercayaan Buddha. Struktur bangunan ini berbentuk kotak dengan empat pintu masuk dan titik pusat berbentuk lingkaran. Jika dilihat dari luar hingga ke dalam terbagi menjadi dua bagian yaitu alam dunia yang terbagi menjadi tiga zona di bagian luar, dan alam Nirwana di bagian pusat.</Text>
      </View>
      <View style={styles.rating}>
        <Text style={styles.textRating}>Rating</Text>
        <Icon name="star" size={20} color="yellow" style={styles.bintang} />
        <Icon name="star" size={20} color="yellow" />
        <Icon name="star" size={20} color="yellow" />
        <Icon name="star" size={20} color="yellow" />
        <Icon name="star" size={20} color="yellow" />
      </View>
    </View>
  )
}

export default Bali

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  header: {
    width: windowWidth,
    height: windowHeight * 0.10
  },
  title:{
    fontSize:20,
    marginTop:20,
    textAlign:'center',
    color:'white'
  },
  img: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    width: windowWidth * 0.90,
    height: windowHeight * 0.25,
    borderRadius:10,
    marginTop:15
  },
  desc: {
    flexDirection:'row',
    alignSelf:'center',
    textAlign:'justify',
    width: windowWidth * 0.90,
    marginTop:10,
    fontSize:16
  },
  rating: {
    flexDirection:'row',
    justifyContent:'flex-start',
    marginLeft: 20,
    marginTop:10
  },
  textRating :{
    fontSize:20,
    fontWeight:'bold'
  },
  bintang: {
    marginLeft:10
  }
})
