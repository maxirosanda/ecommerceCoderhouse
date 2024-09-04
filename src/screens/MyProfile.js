import { StyleSheet, Text, View,Image,FlatList } from 'react-native'
import React, { useEffect } from 'react'
import SubmitButton from '../components/SubmitButton'
import { useGetUserQuery } from '../services/shop'
import { useSelector } from 'react-redux'

const MyProfile = ({navigation}) => {
  const localId = useSelector(state => state.auth.localId)
  const {data:user,isSuccess,isLoading} = useGetUserQuery({localId})


  if(isLoading) return null
  return (
    <View style={styles.container}>
      <Image
        source={user.image? 
                {uri:user.image}
                :
                require("../../assets/profile_default.png")}
        resizeMode='cover'
        style={styles.image}
      />
      <SubmitButton title="Agregar imagen de perfil" onPress={()=>navigation.navigate("ImageSelector")}/>
      <SubmitButton title="Agregar localizacion" onPress={()=>navigation.navigate("LocationSelector")}/>
        <FlatList
          data={user.locations}
          keyExtractor={item => item.id}
          renderItem={({item})=> <View><Text>{item.address}</Text></View>}
        />
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