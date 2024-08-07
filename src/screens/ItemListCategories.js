import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import products from '../data/products.json'
import Search from '../components/Search'
import ProductItem from '../components/ProductItem'

const ItemListCategories = ({category}) => {

  const [productsFiltered,setProductsFiltered] = useState([])

  useEffect(()=>{
    setProductsFiltered(products.filter(product => product.category === category))
  },[category])

  const onSearch = (input) => {

    if(input){
      setProductsFiltered(productsFiltered.filter(product => product.title.includes(input) ))
    }else{
      setProductsFiltered(products.filter(product => product.category === category))
    }
   
  }

  return (
    <>
        <Header title={category}/>
        <Search onSearch={onSearch}/>
        <FlatList
          data={productsFiltered}
          keyExtractor={item=>item.id}
          renderItem={({item})=> <ProductItem product={item}/>}
        />
    </>
  )
}

export default ItemListCategories

const styles = StyleSheet.create({})