import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useGetOrderByUserQuery } from '../services/orders'

const OrderDetail = ({route}) => {

    const {id} = route.params
    const localId = useSelector(state => state.auth.localId)
    const {data:order,isSuccess} = useGetOrderByUserQuery({localId,orderId:id})

    useEffect(()=>{
        if(isSuccess) console.log(order)
    },[isSuccess])

  return (
    <View>
      <Text>OrderDetail</Text>
    </View>
  )
}

export default OrderDetail

const styles = StyleSheet.create({})