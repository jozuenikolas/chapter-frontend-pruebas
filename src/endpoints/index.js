import axios from 'axios';
const data = 'https://bp-marvel-api.herokuapp.com/'

export const getCharacters = async() => await axios.get(data + `marvel-characters?idAuthor=5` );

export const getAuthor = async(search) => axios.get(data + `marvel-characters?idAuthor=1&title=${search}`);

export const deleteUser = async (id) => axios.delete(data +`marvel-characters/${id}?idAuthor=5`)