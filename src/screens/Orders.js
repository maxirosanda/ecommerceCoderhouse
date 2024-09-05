import { StyleSheet, Text, View, FlatList } from 'react-native'
import OrderItem from '../components/OrderItem'
import { useGetOrdersByUserQuery } from '../services/shop'
import { useEffect } from 'react'
import LoadingSpinner from '../components/LoadingSpinner'

const Orders = () => {

  const {data:orders,isSuccess,isError,error,isLoading} = useGetOrdersByUserQuery("1")


  if(isLoading) return <LoadingSpinner/>
  return (
    <View>
      <FlatList
        data={orders}
        keyExtractor={(item)=> item.id}
        renderItem={({item})=> <OrderItem item={item}/>}
      />
    </View>
  )
}

export default Orders

const styles = StyleSheet.create({})