import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email:"",
    idToken:"",
    localId:""
  }

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
       setUser: (state,action) =>{
            state.email = action.payload.email
            state.idToken = action.payload.idToken
            state.localId = action.payload.localId
       }
    }
})

export const {setUser} = authSlice.actions

export default authSlice.reducer