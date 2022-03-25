import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  characterState: <null | 'create' | 'edit'>null,
  searchingState: <boolean>false,
}

export const stateSlice = createSlice({
  name: 'stateSlice',
  initialState,
  reducers: {
    setCharacterState: (state, action: PayloadAction<null | 'create' | 'edit'>) => {
      state.characterState = action.payload
    },
    setSearchingState: (state, action: PayloadAction<boolean>) => {
      state.searchingState = action.payload
    },
  },
})

export const { setCharacterState, setSearchingState } = stateSlice.actions

export default stateSlice.reducer
