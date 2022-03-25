import axios from "axios";

const URL = 'https://bp-marvel-api.herokuapp.com/marvel-characters'

export const getCharacters = () => {
    return axios.get(`${URL}?idAuthor=3`);
};

export const deleteCharacter = (id) => {
    return axios.delete(`${URL}/${id}?idAuthor=3`);
};

export const postCharacters = (payload) => {
    return axios.post(`${URL}?idAuthor=3`, {...payload, idAuthor: "3", category: "main"});
};

