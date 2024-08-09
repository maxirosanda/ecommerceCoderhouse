import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import Home from './src/screens/Home'
import ItemListCategories from './src/screens/ItemListCategories'
import ItemDetail from './src/screens/ItemDetail'
import { useEffect, useState } from 'react'
import { useFonts } from 'expo-font'
import { fonts } from './src/global/fonts'
import { colors } from './src/global/colors'

export default function App() {


  const [fontLoaded] = useFonts(fonts)
  const [categorySelected,setCategorySelected] = useState("")
  const [productDetailId,setProductDetailId] = useState(null)
  const {width,height} = useWindowDimensions()
  const [isPortrait,setIsPortrait] = useState(true)

  useEffect(()=>{
    if(width < height){
      setIsPortrait(true)
    }else{
      setIsPortrait(false)
    }
  },[width,height])

  if(!fontLoaded){
    return null
  }

  const handleCategorySelected = (category) => {
    setCategorySelected(category)
  }

  const handleProductDetailId = (id) => {
    setProductDetailId(id)
  }
  return (
    <>
      {categorySelected ? 
        productDetailId !== null ? 
        <ItemDetail 
          id={productDetailId}

        />
        :
        <ItemListCategories 
          category={categorySelected} 
          handleProductDetailId={handleProductDetailId}
          handleCategorySelected={ handleCategorySelected}/> 
      :
        <Home handleCategorySelected={handleCategorySelected}  />
       } 
      
      <StatusBar style="light" backgroundColor={colors.green3} />
    </>
  )
}

const styles = StyleSheet.create({})
