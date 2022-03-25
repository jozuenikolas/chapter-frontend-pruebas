import { configureStore } from '@reduxjs/toolkit'
import { heroesApi } from '../services'
import appSlice from './reducers/app'

export const store = configureStore({
    reducer: {
        app: appSlice,
        [heroesApi.reducerPath]: heroesApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(heroesApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch