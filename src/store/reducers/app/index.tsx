import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppState, Heroe } from '../../../interface'

const initialState: AppState = {
  name: '',
	formOpen: false,
	heroes: [],
	selectedHeroe: null
}

export const appSlice = createSlice({
	name: 'appStore',
	initialState,
	reducers: {
    setName: (state, action: PayloadAction<string>) => {
			state.name = action.payload
		},
		setFormOpen: (state, action: PayloadAction<boolean>) => {
			state.formOpen = action.payload
			state.selectedHeroe = null
		},
		setHeroes: (state, action: PayloadAction<Heroe[]>) => {
			state.heroes = action.payload
		},
		setSelectdHeroe: (state, action: PayloadAction<Heroe>) => {
			state.selectedHeroe = action.payload
			state.formOpen = true
		},
	},
})

export const { setName, setFormOpen, setHeroes, setSelectdHeroe } = appSlice.actions


export default appSlice.reducer

