import { StyleSheet, Text, View,Image,FlatList } from 'react-native'
import React, { useEffect } from 'react'
import SubmitButton from '../components/SubmitButton'
import { useGetUserQuery } from '../services/users'
import { useSelector } from 'react-redux'
import LoadingSpinner from '../components/LoadingSpinner'

const MyProfile = ({navigation}) => {
  const localId = useSelector(state => state.auth.localId)
  const {data:user,isSuccess,isLoading,isError,error} = useGetUserQuery({localId})
  useEffect(()=>{
    if(isSuccess) console.log(user)
    if(isError) console.log(error)
  },[isSuccess,isError])

  if(isLoading) return <LoadingSpinner/>
  return (
    <View style={styles.container}>
      <Image
        source={user.image ? 
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