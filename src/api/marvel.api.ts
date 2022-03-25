import { get, post } from '../utils/HttpClient'
const base = 'https://bp-marvel-api.herokuapp.com/marvel-characters'
const author = 9;

const createCaracter = async (character: any) => {
    const endpoint = `${base}?idAuthor=${author}`
    return await post(endpoint, character)
}

const getCharacters = async () => {
    const endpoint = `${base}?idAuthor=${author}`
    return await get(endpoint)
}

export { createCaracter, getCharacters }
