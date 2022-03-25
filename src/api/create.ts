import axios from 'axios'
import type { CreateCharacter } from '../types/character'

export const createCharacterFromAPI = async (body: CreateCharacter) => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_APP_API}/marvel-characters`,
      {
        ...body,
      },
      {
        params: {
          idAuthor: import.meta.env.VITE_APP_ID_AUTHOR,
        },
      }
    )
    const data: { message: string } = res.data
    return data
  } catch (e) {
    throw new Error('No se pudo crear el personaje.')
  }
}
