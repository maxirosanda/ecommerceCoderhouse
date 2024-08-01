import { FlatList, StyleSheet, Text, View } from 'react-native'
import categories from '../data/categories.json'
import Category from './Category'

const Categories = () => {
  
  return (
    <View>
      <FlatList
        data={categories}
        keyExtractor={item => item}
        renderItem={({item}) => <Category item={item}/>}
      />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({})