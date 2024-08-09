import { Image, Pressable, StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import React from 'react'
import Header from '../components/Header'
import products from '../data/products.json'
import { colors } from '../global/colors'

const ItemDetail = ({id}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Detalle"/>
      <View style={styles.containerDetail}>
        <Image
          style={styles.image}
          resizeMode='contain'
          source={{uri:products[id].thumbnail}}
        />
        <View style={styles.containerText}>
          <Text style={styles.title}>{products[id].title}</Text>
          <Text style={styles.description}>{products[id].description}</Text>
          <Text style={styles.price}>Precio: {products[id].price} $</Text>
        </View>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Comprar</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  container:{
    width:"100%"
  },
  containerDetail:{

  },
  containerText:{
    width:"80%",
    gap:20,
    margin:20,
    marginHorizontal:"10%"
  },
  title:{
    fontSize:20
  },
  description:{
    fontSize:18
  },
  price:{
    fontSize:20,
    fontWeight:'bold'
  },
  image:{
    width:"100%",
    height:250,
    marginVertical:10
  },
  button:{
    width:"80%",
    marginHorizontal:"10%",
    backgroundColor:colors.green3,
    borderRadius:3,
    padding:10,
    alignItems:"center",
    justifyContent:"center",
    fontSize:20

  },
  buttonText:{
    color:"white"
  }
})