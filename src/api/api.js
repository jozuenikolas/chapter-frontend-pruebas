import axios from 'axios';

import { MARVEL_CHARACTERS_URL } from './urls';

const client = axios.create();

export const getCharacters = async (idAuthor = 11) => {
  try {
    const url = `${MARVEL_CHARACTERS_URL}?idAuthor=${idAuthor}`;
    const response = await client.get(url);
    const { data } = response;
    return data;
  } catch (err) {
    console.log(err);
  }
}

export const getByTitle = async (idAuthor = 11, title = '') => {
  try {
    const url = `${MARVEL_CHARACTERS_URL}?idAuthor=${idAuthor}&title=${title} `;
    const response = await client.get(url);
    const { data } = response;
    return data;
  } catch (err) {
    console.log(err);
  }
}  
