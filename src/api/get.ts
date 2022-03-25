import axios from 'axios'
import type { Character } from '../types/character'

export const getCharactersByTitleFromAPI = async (name: string) => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_APP_API}/marvel-characters`, {
      params: {
        idAuthor: import.meta.env.VITE_APP_ID_AUTHOR,
        title: name,
      },
    })
    const data: Character[] = res.data
    return data
  } catch (e) {
    throw new Error('No se pudieron cargar los personajes.')
  }
}

export const getAllCharactersFromAPI = async () => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_APP_API}/marvel-characters`, {
      params: {
        idAuthor: import.meta.env.VITE_APP_ID_AUTHOR,
      },
    })
    const data: Character[] = res.data
    return data
  } catch (e) {
    throw new Error('No se pudieron cargar los personajes.')
  }
}
