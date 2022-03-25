import { Character } from '../types/character'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { filter, findIndex } from 'lodash'

const initialState = {
  characters: <Character[]>[],
  selectedCharacter: <Character | null>null,
}

export const charactersSlice = createSlice({
  name: 'charactersSlice',
  initialState,
  reducers: {
    setCharacters: (state, action: PayloadAction<Character[]>) => {
      state.characters = action.payload
    },
    addCharacter: (state, action: PayloadAction<Character>) => {
      state.characters = [...state.characters, action.payload]
    },
    deleteCharacter: (state, action: PayloadAction<string>) => {
      const filtered = filter(
        state.characters,
        (character) => character._id !== action.payload
      )
      state.characters = filtered
    },
    editCharacter: (
      state,
      action: PayloadAction<{ id: string; character: Character }>
    ) => {
      const _characters = [...state.characters]
      const index = findIndex(_characters, { _id: action.payload.id })
      _characters[index] = action.payload.character
      state.characters = [..._characters]
    },
    setSelectedCharacter: (state, action: PayloadAction<Character | null>) => {
      state.selectedCharacter = action.payload
    },
  },
})

export const {
  setCharacters,
  setSelectedCharacter,
  addCharacter,
  editCharacter,
  deleteCharacter,
} = charactersSlice.actions

export default charactersSlice.reducer
