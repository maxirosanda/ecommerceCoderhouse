import { Pressable, StyleSheet, Text, View,StatusBar,Platform } from 'react-native'
import { colors } from '../global/colors'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container:{
    marginTop:Platform.OS === "android" ? StatusBar.currentHeight:0,
    backgroundColor:colors.green2,
    width:"100%",
    height:80,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    position:"relative"
  },
  text:{
    fontSize:25,
    fontFamily:'Josefin'
  },
  icon:{
    position:"absolute",
    left:20
  }

})