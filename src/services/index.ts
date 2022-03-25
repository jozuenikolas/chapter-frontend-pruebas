import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Heroe } from '../interface'

const idAuthor = 'idAuthor=61'

export const heroesApi = createApi({
  reducerPath: 'heroesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://bp-marvel-api.herokuapp.com/' }),
  endpoints: (builder) => ({
    getHeroes: builder.query<Heroe[], string>({
      query: (name) => `marvel-characters?${idAuthor}${name ? '&title='+name : ''}`,
    }),
    createHeroe: builder.mutation({
      query: (body) => ({
        url:`marvel-characters?${idAuthor}`,
        method: 'POST', 
        body: body, 
      })
    }),
    updateHeroe: builder.mutation({
      query: ({id, body}) => ({
        url:`marvel-characters/${id}?${idAuthor}`,
        method: 'PUT',  
        body: body,
      })
    }),
    deleteHeroe: builder.mutation({
      query: (id) => ({
        url:`marvel-characters/${id}?${idAuthor}`,
        method: 'DELETE',  
      })
    }),
  }),
})


export const { useDeleteHeroeMutation, useUpdateHeroeMutation, useCreateHeroeMutation, useGetHeroesQuery } = heroesApi