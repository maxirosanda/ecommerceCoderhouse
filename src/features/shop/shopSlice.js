import { createSlice } from '@reduxjs/toolkit'
import categories from '../../data/categories.json'
import products from '../../data/products.json'
const initialState = {
  categories:categories,
  products:products
}

export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {},
})

export const {} = shopSlice.actions

export default shopSlice.reducer