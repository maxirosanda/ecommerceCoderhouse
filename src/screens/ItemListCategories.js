import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import products from '../data/products.json'

const ItemListCategories = ({category}) => {

    const [categoryFilted,setCategoryFilted] = useState([])

  useEffect(()=>{
    setCategoryFilted(products.filter(product => product.category === category))
  },[category])

  return (
    <>
      <Header title="Productos"/>
      <View>
        <FlatList
          data={categoryFilted}
          keyExtractor={item=>item.id}
          renderItem={({item})=> <View><Text>{item.title}</Text></View>}
        />
      </View>
    </>
  )
}

export default ItemListCategories

const styles = StyleSheet.create({})