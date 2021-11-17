import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
  try{
    await AsyncStorage.setItem(key, value);
    alert('data storage successfull');
  } catch(error) {
    alert(error);
  }
};

const storeDataJSON = async (key, value) => {
  try{
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    alert('data storage successfull');
  } catch(error) {
    alert(error);
  }
};

const getData = async (key) => {
  try{
    let data = await AsyncStorage.getItem(key);
    if(data != null){
      return data;
    } else {
      alert('no data');
    }
  } catch(error) {
    alert(error);
  }
};

const getDataJSON = async (key) => {
  try{
    let data = await AsyncStorage.getItem(key);
    if(data != null){
      const jsonData = JSON.parse(data);
      return jsonData;
    } else {
      alert('Tidak ada data ini di database');
    }
  } catch(error) {
    alert(error);
  }
};

const removeData = async (key) => {
  try{
    await AsyncStorage.removeItem(key);
    alert('data removed successfull');
  } catch(error) {
    alert(error);
  }
};

export { storeData, storeDataJSON, getData, getDataJSON, removeData };