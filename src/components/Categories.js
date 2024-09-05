import { FlatList, StyleSheet } from 'react-native'
import Category from './Category'
import { useGetCategoriesQuery } from '../services/shop'
import LoadingSpinner from './LoadingSpinner'


const Categories = () => {
  const {data:categories,isLoading} = useGetCategoriesQuery()

  if(isLoading) return <LoadingSpinner/>
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