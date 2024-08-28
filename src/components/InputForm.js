import { StyleSheet, Text, View,TextInput } from 'react-native'

const InputForm = ({label,value,onChangeText,isSecure,error}) => {
  return (
    <View style={styles.inputContainer}>
        <Text style={styles.titleInput}>{label}</Text>
        <TextInput  
            value={value}  
            onChangeText={onChangeText} 
            style={styles.input}
            secureTextEntry={isSecure}
        />
        <View><Text style={styles.error}>{error ? error : ""} </Text></View>
    </View>
  )
}

export default InputForm

const styles = StyleSheet.create({
    inputContainer:{
        width:"100%"
    },
    input:{
        width:"90%",
        borderWidth:0,
        borderBottomWidth:3,
        borderBottomColor:"white",
        padding:2,
        fontFamily:"Josefin",
        fontSize:14,
        marginHorizontal:"5%",
        marginVertical:10
      },
      titleInput:{
        width:"90%",
        marginHorizontal:"5%",
        fontSize:16,
        fontFamily:"Josefin"
      },
      error:{
        fontSize:16,
        color:"red",
        fontFamily:"Josefin",
        fontStyle:"italic",
        marginLeft:20
      }
})