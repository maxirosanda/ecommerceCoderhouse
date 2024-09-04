import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { URL_FIREBASE } from '../firebase/database'

export const shopApi = createApi({
    reducerPath:"shopApi",
    baseQuery:fetchBaseQuery({baseUrl:URL_FIREBASE}),
    endpoints:(builder) => ({
        getCategories: builder.query({
            query: () => "/categories.json"
        }),
        getProducts:builder.query({
            query:(category) => `/products.json?orderBy="category"&equalTo="${category}"`,
            transformResponse:(response) =>{
                const data = Object.values(response)
                return data
            }
        }),
        getProduct:builder.query({
            query:(id) => `/products/${id}.json`
        }),
        getOrdersByUser:builder.query({
            query:(userId) =>`/orders/${userId}.json`,
            transformResponse:(response) => {
                const data = Object.entries(response).map(item=> ({id:item[0],...item[1]}))
                return data
            }
        }),
        postOrder:builder.mutation({
            query:({userId,order}) => ({
                url:`/orders/${userId}.json`,
                method:"POST",
                body:order
            })
        }),
        patchImageProfile:builder.mutation({
            query:({image,localId})=> ({
                url:`users/${localId}.json`,
                method:"PATCH",
                body:{image}
            })
        }),
        postUserLocation:builder.mutation({
            query:({localId,userLocation})=> ({
                url:`users/${localId}/locations.json`,
                method:"POST",
                body:userLocation
            })
        }),
        getUser:builder.query({
            query:({localId})=> `users/${localId}.json`,
            transformResponse:(response) => {
                const data = Object.entries(response.locations).map(item => ({id:item[0],...item[1]}))
                return {
                    ...response,
                    locations:data
                }
            }
        })

    })
})

export const {  useGetCategoriesQuery, 
                useGetProductsQuery, 
                useGetProductQuery,
                usePostOrderMutation,
                useGetOrdersByUserQuery,
                usePatchImageProfileMutation,
                usePostUserLocationMutation,
                useGetUserQuery
} = shopApi
