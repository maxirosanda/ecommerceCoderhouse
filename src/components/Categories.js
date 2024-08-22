import { FlatList, StyleSheet } from 'react-native'
import Category from './Category'
import { useGetCategoriesQuery } from '../services/shop'


const Categories = () => {
  const {data:categories} = useGetCategoriesQuery()
  return (
      <FlatList
        data={categories}
        keyExtractor={item => item}
        renderItem={({item}) => <Category item={item} />}
      />
  )
}

export default Categories

const styles = StyleSheet.create({})