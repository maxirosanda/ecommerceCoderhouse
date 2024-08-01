import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Home from './src/screens/Home'
import ItemListCategories from './src/screens/ItemListCategories'
import ItemDetail from './src/screens/ItemDetail'

export default function App() {
  return (
    <>
      <Home/>
      {/*<ItemListCategories category="smartphones"/>*/}
      {/*<ItemDetail id={11}/>*/}
      <StatusBar style="auto" />
    </>
  )
}

const styles = StyleSheet.create({})
