import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
// import { IconHome,IconHomeActive,IconTicketActive, IconTicket, IconMail, IconMailActive, IconEvent,IconEventActive, IconAccount, IconAccountActive } from '../../assets'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MCicon from 'react-native-vector-icons/MaterialCommunityIcons'
import Micon from 'react-native-vector-icons/MaterialIcons'

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if(label === "Home") {
      return isFocused ? <Ionicons name="home-outline" size={25} color="white" /> : <Ionicons name="home-outline" size={25} />
    } else if(label === "Pesan") {
      return isFocused ? <Ionicons name="mail-outline" size={25} color="white" /> : <Ionicons name="mail-outline" size={25} />
    } else if(label === "Ticket") {
      return isFocused ? <MCicon name="ticket-percent-outline" size={25} color="white" /> : <MCicon name="ticket-percent-outline" size={25} />
    } else if(label === "Event") {
      return isFocused ? <MCicon name="map-marker-outline" size={25} color="white" /> : <MCicon name="map-marker-outline" size={25} />
    } else if(label === "Akun") {
      return isFocused ? <Ionicons name="person-outline" size={25} color="white" /> : <Ionicons name="person-outline" size={25} />
    }
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      >
      <Icon/>
      {/* <Text style={{ color: isFocused ? '#fff' : '#222' }}>
        {label}
      </Text> */}
    </TouchableOpacity>
  )
}

export default TabItem

const styles = StyleSheet.create({
})
