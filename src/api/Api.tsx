export const fetchData = async (character: string) => {

    let resp = null;
    
    if(character){
      resp = await fetch("https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=13&title=" + character);
    } else {
      resp = await fetch("https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=13&title=");
    }
    
    return await resp.json();
};