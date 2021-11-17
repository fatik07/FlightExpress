import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';
import { Text, StyleSheet, View, Dimensions, ImageBackground, Image } from 'react-native'
import { ImageHeader, ImagePP } from '../../assets';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as firebase from 'firebase'

const Pesan = ({mailItem}) => {

    return (    
      <View style={styles.boxMail}>
        <View style={{ flexDirection:'row' }}>
          <Icon style={styles.userImg} name="card-account-mail-outline" size={50}></Icon>
          <View style={styles.boxDesc}>
            <Text style={styles.tanggal}>{mailItem.tanggalPesan}</Text>
            <Text style={styles.desc}>Berhasil melakukan pembelian tiket untuk melakukan perjalanan dari {mailItem.asal} menuju {mailItem.tujuan} pada jam {mailItem.jam}. Jumlah pembelian tiket desawa {mailItem.dewasa} dan anak anak {mailItem.anak}.</Text>
            <View style={{ flexDirection:'row', justifyContent:'space-between', marginRight:80 }}>
              <Text style={styles.total}>Total:</Text>
              <Text style={styles.total}>Rp. {mailItem.harga}</Text>
              <TouchableOpacity>
                <Icon style={{ marginTop:10 }} name="delete" size={20} o />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>     
    )
  }

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default Pesan;

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
  boxMail: {
    backgroundColor:'#fff',
    width:'85%',
    height:140,
    marginLeft:30,
    marginTop:20,
    borderRadius:10,
    marginBottom:10
  },
  userImg: {
    alignSelf:'center',
    backgroundColor:'#fff',
    width: 50,
    height: 50,
    borderRadius:75,
    marginLeft:20
  },
  boxDesc: {
    marginLeft:15
  },
  tanggal: {
    marginTop:10,
    fontSize:16,
    fontWeight:'bold'
  },
  desc: {
    marginRight:70,
    marginTop:5
  },
  total: {
    marginTop:10,
    fontSize:18,
    fontWeight:'bold'
  }
})
