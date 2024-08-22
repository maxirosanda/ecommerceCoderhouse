import { FlatList, StyleSheet, View,Text} from 'react-native'
import  { useEffect, useState } from 'react'
import Search from '../components/Search'
import ProductItem from '../components/ProductItem'
import { useGetProductsQuery } from '../services/shop'


const ItemListCategories = ({route}) => {

  const {data:products,isSuccess,isLoading,isError,error} = useGetProductsQuery()
  const {category} = route.params
  const [productsFiltered,setProductsFiltered] = useState([])

  useEffect(()=>{
    if(isSuccess){
      setProductsFiltered(products.filter(product => product.category === category))
    }
  },[category,isSuccess])

  const onSearch = (input) => {

    if(input){
      setProductsFiltered(productsFiltered.filter(product => product.title.includes(input) ))
    }else{
      setProductsFiltered(products.filter(product => product.category === category))
    }
   
  }

  if(isLoading) return <View><Text>cargando</Text></View>
  if(isError) return <View><Text>{error.message}</Text></View>

  return (
    <View style={styles.container}>
        <Search onSearch={onSearch}/>
        <FlatList
          data={productsFiltered}
          keyExtractor={item=>item.id}
          renderItem={({item})=> <ProductItem product={item}/>}
        />
    </View>
  )
}

export default ItemListCategories

const styles = StyleSheet.create({
  container:{
    width:"100%"
  }
})