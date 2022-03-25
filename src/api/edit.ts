import axios from 'axios'
import type { Character } from '../types/character'

export const editCharacterByIdFromAPI = async (id: string, body: Character) => {
  try {
    const res = await axios.put(
      `${import.meta.env.VITE_APP_API}/marvel-characters/${id}`,
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
    throw new Error('No se pudo editar este personaje.')
  }
}
