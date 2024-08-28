import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { shopApi } from '../services/shop'
import { authApi } from '../services/auth'
import cartReducer from '../features/cart/cartSlice'
import authReducer from '../features/auth/authSlice'

export const store = configureStore({
  reducer: {
    cart:cartReducer,
    auth:authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [shopApi.reducerPath]: shopApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware,authApi.middleware),
})

setupListeners(store.dispatch)