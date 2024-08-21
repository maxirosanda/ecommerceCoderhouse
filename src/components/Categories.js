import { FlatList, StyleSheet } from 'react-native'
import Category from './Category'
import { useSelector } from 'react-redux'

const Categories = () => {
  const categories = useSelector(state => state.shop.categories)
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