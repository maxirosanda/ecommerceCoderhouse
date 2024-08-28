import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { URL_AUTH, API_AUTH } from '../firebase/database'

export const authApi = createApi({
    reducerPath:"authApi",
    baseQuery:fetchBaseQuery({baseUrl:URL_AUTH}),
    endpoints:(builder) => ({
      login: builder.mutation({
        query:({...user}) => ({
            url:`accounts:signInWithPassword?key=${API_AUTH}`,
            method:"POST",
            body:user
        })
      }),
      register:builder.mutation({
        query:({...user})=> ({
            url:`accounts:signUp?key=${API_AUTH}`,
            method:"POST",
            body:user
        })
      })

    })
})

export const {useLoginMutation,useRegisterMutation } = authApi
