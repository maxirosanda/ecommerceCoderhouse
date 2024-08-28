import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email:"",
    idToken:""
  }

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
       setUser: (state,action) =>{
            state.email = action.payload.email
            state.idToken = action.payload.idToken
       }
    }
})

export const {setUser} = authSlice.actions

export default authSlice.reducer