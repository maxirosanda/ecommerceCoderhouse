import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'
import TabNavigator from './TabNavigator'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSession } from '../db'
import { setUser } from '../features/auth/authSlice'

const MainNavigator = () => {

    const idToken = useSelector(state => state.auth.idToken)
    const dispatch = useDispatch()
    
    useEffect(()=>{
      (async ()=>{
        const sessions = await fetchSession()
        if(sessions){
          dispatch(setUser(sessions))
        }
      
      })()
    },[])

  return (
   <NavigationContainer>
    {idToken ? <TabNavigator/>  : <AuthStack/> }
    
    </NavigationContainer>
  )
}

export default MainNavigator

const styles = StyleSheet.create({
  
  })
