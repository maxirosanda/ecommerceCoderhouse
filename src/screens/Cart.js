import { StyleSheet, Text, View,FlatList } from 'react-native'

import CartItem from '../components/CartItem'
import { colors } from '../global/colors'
import { useSelector } from 'react-redux'

const Cart = () => {
  const cart = useSelector(state => state.cart)
  return (
    <View style={styles.container}>
      <FlatList
      data={cart.items}
      keyExtractor={item => item.id}
      renderItem={({item})=> <CartItem item={item}/> }
      />
      <View style={styles.containerConfirm}>
        <Text style={styles.textConfirm}>Confirmar</Text>
        <Text style={styles.textConfirm}>Total: {cart.total} $</Text>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    container:{
        justifyContent:"space-between",
        flex:1
    },
    containerConfirm:{
        backgroundColor:colors.green2,
        padding:20,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    textConfirm:{
        color:"white",
        fontSize:20
    }
})