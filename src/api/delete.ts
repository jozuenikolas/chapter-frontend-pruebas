import axios from 'axios'

export const deleteCharacterByIdFromAPI = async (id: string) => {
  try {
    const res = await axios.delete(
      `${import.meta.env.VITE_APP_API}/marvel-characters/${id}`,
      {
        params: {
          idAuthor: import.meta.env.VITE_APP_ID_AUTHOR,
        },
      }
    )
    const data: { message: string } = res.data
    return data
  } catch (e) {
    throw new Error('No se pudo borrar el personaje.')
  }
}
