import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import products from '../data/products.json'

const ItemDetail = ({id}) => {
  return (
    <>
      <Header title="Detalle"/>
      <View>
        <Text>{products[id].title}</Text>
      </View>
    </>
  )
}

export default ItemDetail

const styles = StyleSheet.create({})