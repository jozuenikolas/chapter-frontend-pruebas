
export const fetchCharacters = async () => {
  try {
      let url = `https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=8`;
      const resp = await fetch( url );
      const data = await resp.json();
      return data;
  } catch (error) {

  }
}


export const fetchCharacter = async (character: string) => {
  try {
      let url = `https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=8&title=${character}`;
      const resp = await fetch( url );
      const data = await resp.json();

      console.log(data, 'data post')
      return data;
  } catch (error) {

  }
}

export interface PostCharacter {
  title: string,
  body: string,
  image: string,
  category: string,
  createdAt?: string,
  updatedAt?: string,

}

export const postCharacter = async (body: PostCharacter) => {
  try {
      let url = `https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=8`;
      const resp = await fetch( url, { method: 'POST', body: JSON.stringify(body) } );
      const data = await resp.json();
      return data;
  } catch (error) {

  }
}

