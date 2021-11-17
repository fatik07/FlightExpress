import React, {component,useState, useEffect} from 'react'
import { StyleSheet, Text, View, ImageBackground, Alert, Dimensions, TouchableOpacity, Button, DataTimePicker } from 'react-native'
import { ImageHeader } from '../../assets';
import Icon from 'react-native-vector-icons/Ionicons';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as firebase from 'firebase'
import moment from 'moment';


const Penerbangan = ({navigation}) => {

  const Back =() => {
    navigation.goBack();
  }  

  const [asalValue, setasalValue] = useState('');
  const [tujuanValue, settujuanValue] = useState('');
  const [jamValue, setjamValue] = useState('');
  const [dewasaValue, setdewasaValue] = useState();
  const [anakValue, setanakValue] = useState();
  const [tanggalValue, settanggalValue] = useState('');
  const [biayaValue, setBiayaValue] = useState();

  useEffect(() => {
    if (asalValue == 'surabaya' && tujuanValue == 'bali') {
      setBiayaValue(500000)
      return;
    }
    if (asalValue == 'bali' && tujuanValue == 'surabaya') {
      setBiayaValue(500000)
      return;
    }

    if (asalValue == 'surabaya' && tujuanValue == 'jakarta') {
      setBiayaValue(300000)
      return;
    }
    if (asalValue == 'jakarta' && tujuanValue == 'surabaya') {
      setBiayaValue(300000)
      return;
    }

    if (asalValue == 'bali' && tujuanValue == 'jakarta') {
      setBiayaValue(700000)
      return;
    }
    if (asalValue == 'jakarta' && tujuanValue == 'bali') {
      setBiayaValue(700000)
      return;
    }

    setBiayaValue(0)
    return;
  }, [])
  
  // const [asal, setasal] = useState('');
  // const [tujuan, settujuan] = useState('');
  // const [jam, setjam] = useState('');
  // const [dewasa, setdewasa] = useState('');
  // const [anak, setanak] = useState('');

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  // const date = moment().format("DD MMMM YYYY")

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    settanggalValue(moment(selectedDate).format('DD MMMM YYYY'));
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  // const showTimepicker = () => {
  //   showMode('time');
  // };

  const submitTiket = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var uid = user.uid;
        firebase.database().ref().child('users/').child(uid).child('pesan/').push({
          asal: asalValue,
          tujuan: tujuanValue,
          jam: jamValue,
          tanggalPesan: tanggalValue,
          dewasa: dewasaValue,
          anak: anakValue,
          harga: dewasaValue * 100000 + anakValue * 50000 + biayaValue
        }).then( () => {
          if (asalValue == tujuanValue) {
            alert('anda tidak bisa melakukan penerbangan ini !');
            return;
          }

          alert('sukses pesan tiket');
          return;
        }).catch((error) => {
          alert(error)
        })
      } else {
        Alert.alert(
          "Peringatan",
          "Mohon diisi semua !",
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
        );
      }
    });
  }

  // const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  // const showDatePicker = () => {
  //   setDatePickerVisibility(true);
  // };

  // const hideDatePicker = () => {
  //   setDatePickerVisibility(false);
  // };

  // const handleConfirm = (date) => {
  //   console.warn("A date has been picked: ", date);
  //   hideDatePicker();
  // };

  

  return (
    <View>
      <ImageBackground source={ImageHeader} style={styles.header}>
        <View style={{ flexDirection:'row',justifyContent:'space-between',marginHorizontal:10 }}>
          <Icon style={{ marginTop:15 }} name="chevron-back-outline" size={30} color="white" onPress={Back} />
          <Text style={styles.title}>Tambah Tiket</Text>
          <Icon style={{ marginTop:20 }} name="md-ellipsis-vertical-outline" size={20} color="white"/>
        </View>
      </ImageBackground>

      {/* tujuan perjalanan */}
      <View>
        <Text>TUJUAN PERJALANAN</Text>
        <Text>Asal</Text>
        <Picker 
          mode='dropdown'
          style={styles.picker} 
          selectedValue={asalValue}
          onValueChange={(selectedValue) =>
            setasalValue(selectedValue)
          }
          >
          <Picker.Item label='pilih asal tujuan anda' />
          <Picker.Item label="Jakarta" value="jakarta" />
          <Picker.Item label="Surabaya" value="surabaya" />
          <Picker.Item label="Bali" value="bali"/>
        </Picker>
        <Text>Tujuan</Text>
        <Picker style={styles.picker} 
          selectedValue={tujuanValue}
          onValueChange={(selectedValue) =>
            settujuanValue(selectedValue)
          }
          >
          <Picker.Item label='pilih tujuan anda' />
          <Picker.Item label="Jakarta" value="jakarta" />
          <Picker.Item label="Surabaya" value="surabaya" />
          <Picker.Item label="Bali" value="bali" />
        </Picker>
      </View>

      {/* waktu perjalanan */}
      <View>
        <Text>WAKTU PERJALANAN</Text>
        <View>
          {/* <Button title="Show Date Picker" onPress={showDatePicker} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          /> */}
          <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View>
      {/* <View>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View> */}
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          date={date}
          value={date}          
          mode={mode}
          is24Hour={true}
          display="calendar"
          onChange={onChange}
        />
      )}
        </View>
      </View>

      {/* jam penerbangan */}
      <View>
        <Text>JAM PENERBAGAN</Text>
        <Picker style={styles.picker} 
          selectedValue={jamValue}
          onValueChange={(selectedValue) =>
            setjamValue(selectedValue)
          }
          >
          <Picker.Item label='pilih jam penerbangan anda' />
          <Picker.Item label="08:00 - 11:00" value="08:00 - 11:00" />
          <Picker.Item label="14:00 - 17:00" value="14:00 - 17:00" />
          <Picker.Item label="19:00 - 22:00" value="19:00 - 22:00" />
        </Picker>
      </View>

      {/* jumlah */}
      <View>
        <Text>JUMLAH</Text>
        <Text>Dewasa</Text>
        <Picker style={styles.picker} 
          selectedValue={dewasaValue}
          onValueChange={(selectedValue) =>
            setdewasaValue(selectedValue)
          }
          >
          <Picker.Item label='pilih jumlah penumpang dewasa' />
          <Picker.Item label="1" value={1} />
          <Picker.Item label="2" value={2} />
          <Picker.Item label="3" value={3} />
        </Picker>
        <Text>Anak - Anak</Text>
        <Picker style={styles.picker} 
          selectedValue={anakValue}
          onValueChange={(selectedValue) =>
            setanakValue(selectedValue)
          }
          >
          <Picker.Item label='pilih jumlah penumpang anak anak' />
          <Picker.Item label="1" value={1} />
          <Picker.Item label="2" value={2} />
          <Picker.Item label="3" value={3} />
        </Picker>
      </View>
      
      {/* tombil submit */}
      <TouchableOpacity onPress={submitTiket} style={{ flexDirection:'row',justifyContent:'center' }}>
        <View style={styles.submit}>
          <Text style={styles.namaSubmit}>Ambil Tiket</Text>
        </View>
      </TouchableOpacity>
    
    </View>
  )
}

export default Penerbangan

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  header: {
    width: windowWidth,
    height: windowHeight * 0.25
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
    width:'60%',
    height:50,
    borderRadius:30,
    alignItems:'center',
  },
  namaSubmit:{
    fontSize:20,
    color:'white',
    marginTop:15
  },
  picker: {
    width:300,
    height:50,
    backgroundColor:'grey',
    borderWidth:1,
    color:'white'
  }
})

