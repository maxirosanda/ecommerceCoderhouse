import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Home from './src/screens/Home'
import ItemListCategories from './src/screens/ItemListCategories'
import ItemDetail from './src/screens/ItemDetail'
import { useState } from 'react'

export default function App() {

  const [categorySelected,setCategorySelected] = useState("")

  const handleCategorySelected = (category) => {
    setCategorySelected(category)
  }
  return (
    <>
      {categorySelected ? 
        <ItemListCategories category={categorySelected}/> 
      :
        <Home handleCategorySelected={handleCategorySelected}  />
       } 
      {/*<ItemDetail id={15}/>*/}
      <StatusBar style="auto" />
    </>
  )
}

const styles = StyleSheet.create({})
