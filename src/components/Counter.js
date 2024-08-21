import { Pressable, StyleSheet, Text, View,TextInput } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../global/colors'

const Counter = () => {

    const [input,setInput] = useState(0)

    const handleInput = (t) => {
        setInput(Number(t))
    }


  return (
    <View style={styles.container}>
        <View style={styles.containerCounter}>
            <Pressable onPress={()=>console.log("va a restar")} style={styles.button}>
                <Text style={styles.buttonText}>-</Text>
            </Pressable>
            <View style={styles.count}>
                <Text>{count}</Text>
            </View>
           
            <Pressable onPress={()=>console.log("va a sumar")} style={styles.button}>
                <Text style={styles.buttonText}>+</Text>
            </Pressable>
        </View>
        <View style={styles.containerInput}>
            <TextInput
                style={styles.input}
                value={String(input)}
                onChangeText={handleInput}
            />
            <Pressable onPress={()=>console.log("suma monto")} style={styles.button}>
                <Text style={styles.buttonText}>Agregar</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        margin:10
    },
    containerCounter:{
        flexDirection:"row"
    },
    button:{
        backgroundColor:colors.green3,
        minWidth:50,
        alignItems:"center",
        justifyContent:"center",
        padding:10,
        borderRadius:3,
        margin:5
    },
    buttonText:{
        color:"white",
        fontSize:20
    },
    count:{
        alignItems:"center",
        justifyContent:"center",
        width:100,
        height:"auto",
        textAlign:"center",
        padding:10
    },
    containerInput:{
        flexDirection:"row",
        margin:10
    },
    input:{
        width:60,
        textAlign:"center",
        borderWidth:1,
        borderRadius:3,
    }
})