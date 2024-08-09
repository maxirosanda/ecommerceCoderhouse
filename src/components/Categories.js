import { FlatList, StyleSheet, Text, View } from 'react-native'
import categories from '../data/categories.json'
import Category from './Category'

const Categories = ({handleCategorySelected}) => {
  
  return (
      <FlatList
        data={categories}
        keyExtractor={item => item}
        renderItem={({item}) => <Category item={item} handleCategorySelected={handleCategorySelected}/>}
      />
  )
}

export default Categories

const styles = StyleSheet.create({})