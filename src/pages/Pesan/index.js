import React, { Component } from 'react'
import { Text, View, ScrollView, ImageBackground, Dimensions, StyleSheet } from 'react-native'
import CardPesan from '../CardPesan/index'
import * as firebase from 'firebase'
import { ImageHeader, ImagePP } from '../../assets';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class index extends Component {
  constructor(props) {
    super(props)

    this.state = {
        mails: {},
        mailsKey: []
    }
  }

  componentDidMount() {
    // var uid = user.uid;
    var userId = firebase.auth().currentUser.uid;
    return firebase.database().ref().child('users/').child(userId).child('pesan/').once('value').then((snapshot) => {
      
      const data = snapshot.val() ? snapshot.val() : {};
            const mailItem = { ...data };
            this.setState({
              mails: mailItem,
              mailsKey: Object.keys(mailItem)
          })
        });
  }


  render() {
    const { mails, mailsKey } = this.state

    return (
      <ScrollView>
        <ImageBackground source={ImageHeader} style={styles.header}>
          <View style={{ flexDirection:'row',justifyContent:'center',marginHorizontal:20 }}>
            <Text style={styles.title}>Mail Box</Text>
          </View>
        </ImageBackground>  
      
        {mailsKey.length > 0 ? (
          mailsKey.map((key) => (
              <CardPesan
                  key={key}
                  mailItem={mails[key]}
                  id={key}
                  {...this.props}
                  />
          ))
        ) : (
          <Text>Daftar Kosong</Text>
        )}
      
              
      </ScrollView>
    )
  }
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


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


// import React, { useState, useEffect } from 'react'
// import { TouchableOpacity } from 'react-native';
// import { ScrollView } from 'react-native';
// import { Text, StyleSheet, View, Dimensions, ImageBackground, Image } from 'react-native'
// import { ImageHeader, ImagePP } from '../../assets';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import CardPesan from '../CardPesan/index';
// import * as firebase from 'firebase'

// const Pesan = () => {  
//   const[childKey, setChildKey] = useState([]);
//     const[childData, setChildData] = useState([]);

//     useEffect(() => {
//       var userId = firebase.auth().currentUser.uid;
//         firebase.database().ref().child('users/').child(userId).child('pesan/').once('value', (snapshot) => {
//           snapshot.forEach((childSnapshot) => {
//             var childKey = childSnapshot.key;
//             // console.log(childKey);
//             var childData = childSnapshot.val();
//             // console.log(childData);
//             setChildData(childData);
//             setChildKey(childKey);
//           });
//         });   
//     }, [])

    

//     return (

//       <ScrollView>
//         <ImageBackground source={ImageHeader} style={styles.header}>
//           <View style={{ flexDirection:'row',justifyContent:'center',marginHorizontal:20 }}>
//             <Text style={styles.title}>Mail Box</Text>
//           </View>
//         </ImageBackground>          

//         {childKey.length > 0 ? (
//             childKey.map((key) => (
              
//               console.log(childData)
//             )
//           )) : (

// <CardPesan childData={childData} />
//           )}
        

//     </ScrollView>

//     )
//   }

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

// export default Pesan;

// const styles = StyleSheet.create({
//   header: {
//     width: windowWidth,
//     height: windowHeight * 0.15
//   },
//   title:{
//     fontSize:28,
//     marginTop:40,
//     textAlign:'center',
//     color:'white'
//   }, 
//   boxMail: {
//     backgroundColor:'#fff',
//     width:'85%',
//     height:140,
//     marginLeft:30,
//     marginTop:20,
//     borderRadius:10,
//     marginBottom:10
//   },
//   userImg: {
//     alignSelf:'center',
//     backgroundColor:'#fff',
//     width: 50,
//     height: 50,
//     borderRadius:75,
//     marginLeft:20
//   },
//   boxDesc: {
//     marginLeft:15
//   },
//   tanggal: {
//     marginTop:10,
//     fontSize:16,
//     fontWeight:'bold'
//   },
//   desc: {
//     marginRight:70,
//     marginTop:5
//   },
//   total: {
//     marginTop:10,
//     fontSize:18,
//     fontWeight:'bold'
//   }
// })
