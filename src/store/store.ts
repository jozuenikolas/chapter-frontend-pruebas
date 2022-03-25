import charactersReducer from './charactersSlice'
import stateReducer from './stateSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    state: stateReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
