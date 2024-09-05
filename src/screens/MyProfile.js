import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import SubmitButton from '../components/SubmitButton'

const MyProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/profile_default.png")}
        resizeMode='cover'
        style={styles.image}
      />
      <SubmitButton title="Agregar imagen de perfil" onPress={()=>navigation.navigate("ImageSelector")}/>
    </View>
  )
}

export default MyProfile

const styles = StyleSheet.create({
    container:{
        marginTop:70,
        alignItems:"center",
        gap:20
    },
    image:{
        width:150,
        height:150
    }
})