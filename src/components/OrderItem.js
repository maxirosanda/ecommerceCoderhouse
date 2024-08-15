import { StyleSheet, Text, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { colors } from '../global/colors';


const OrderItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.date}>{new Date(item.createdAt).toLocaleString()}</Text>
        <Text style={styles.total}>Total: {item.total} $</Text>
      </View>
      <AntDesign name="search1" size={48} color="black" />
    </View>
  )
}

export default OrderItem

const styles = StyleSheet.create({
    container:{
        borderColor:colors.green3,
        borderWidth:2,
        width:"90%",
        marginHorizontal:"5%",
        marginVertical:10,
        padding:20,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        borderRadius:3
    },
    containerText:{
        gap:20
    },
    date:{
        fontSize:16
    },
    total:{
        fontSize:20,
        fontWeight:"bold"
    }
})