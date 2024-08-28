import { StyleSheet, Text, View,Pressable } from 'react-native'
import { colors } from '../global/colors'
import { useEffect, useState } from 'react'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import { useLoginMutation } from '../services/auth'
import { setUser } from '../features/auth/authSlice'
import { useDispatch } from 'react-redux'

const Login = ({navigation}) => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [errorEmail,setErrorEmail] = useState("")
    const [errorPassword,setErrorPassword] = useState("")
    const [triggerLogin,{data,isSuccess}] = useLoginMutation()
    const dispatch = useDispatch()

    useEffect(()=>{
        if(isSuccess) console.log(data)
    },[isSuccess])

    const onSubmit = async () => {
        const {data} = await triggerLogin({email,password})
        dispatch(setUser({email:data.email,idToken:data.idToken}))
    }

  return (
    <View style={styles.main}>
        <View style={styles.container}>
            <InputForm
                label="Email"
                value={email}
                onChangeText={(t) => setEmail(t)}
                isSecure={false}
                error={errorEmail}
            />
            <InputForm
                label="Password"
                value={password}
                onChangeText={(t) => setPassword(t)}
                isSecure={true}
                error={errorPassword}
            />
            <SubmitButton onPress={onSubmit} title="Iniciar Sesion"/>
            <Text style={styles.sub}>No tenes una cuenta?</Text>
            <Pressable onPress={()=> navigation.navigate("Register")} >
                <Text style={styles.subLink}>Registro</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
      },
      container:{
        width:"90%",
        backgroundColor:colors.green2,
        gap:15,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        paddingVertical:20
      },
      title:{
        fontSize:22,
        fontFamily:"Lobster"
      },
      sub:{
        fontSize:14,
        fontFamily:"Josefin"
      },
      subLink:{
        fontSize:14,
        fontFamily:"Josefin",
        color:"blue"
      }
})