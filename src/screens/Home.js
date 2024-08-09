import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Categories from '../components/Categories'

const Home = ({handleCategorySelected}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Ecommerce"/>
      <Categories handleCategorySelected={handleCategorySelected}/>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    width:"100%"
  }
})