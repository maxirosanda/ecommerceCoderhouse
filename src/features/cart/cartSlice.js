import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items:[],
    total:0
  }

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addItemCart: (state,action) => {
            const {id, price, quantity} = action.payload
            const itemFound = state.items.find(item => item.id === id)
            itemFound ? itemFound.quantity + quantity : state.items.push(action.payload)
            state.total+= price * quantity
        }
    }
})

export const {addItemCart} = cartSlice.actions

export default cartSlice.reducer