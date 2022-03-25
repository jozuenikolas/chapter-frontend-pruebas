import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import {
  AiFillEdit,
  AiOutlineDelete,
  AiOutlinePlus,
  AiOutlineSave,
} from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";

interface character {
  body: string;
  category: string;
  createdAt: string;
  idAuthor: string;
  image: string;
  title: string;
  updatedAt: string;
  _id: string;
}

function App() {
  const [addCharacter, setAddCharacter] = useState<boolean>(false);
  const [character, setCharacter] = useState<character[]>([]);
  const [characterName, setCharacterName] = useState<string>("");
  const [characterDescription, setCharacterDescription] = useState<string>("");
  const [characterImage, setCharacterImage] = useState<string>("");
  const [update, setUpdate] = useState<string>("");

  const handleCancel = () => {
    setAddCharacter(false);
    setCharacterName("");
    setCharacterDescription("");
    setCharacterImage("");
  };
  const handleAddCharacter = async () => {
    await axios
      .post(
        "https://bp-marvel-api.herokuapp.com/marvel-characters",
        {
          title: characterName,
          body: characterDescription,
          image: characterImage,
          category: "main",
        },
        { params: { idAuthor: "60" } }
      )
      .then(() => alert("Personaje añadido exitosamente"))
      .catch((e) => alert(e.response.data.message));
  };

  const handleDelete = async (characterId: string) => {
    await axios
      .delete(
        "https://bp-marvel-api.herokuapp.com/marvel-characters/" + characterId,
        { params: { idAuthor: "60" } }
      )
      .then(() => alert("Personaje eliminado exitosamente"));
  };

  const handlePut = async () => {
    await axios
      .put(
        "https://bp-marvel-api.herokuapp.com/marvel-characters/" + update,
        {
          title: characterName,
          body: characterDescription,
          image: characterImage,
          category: "main",
        },
        { params: { idAuthor: "60" } }
      )
      .then(() => alert("Personaje actualizado exitosamente"))
      .catch((e) => alert(e.response.data.message));
  };

  const handleUpdate = async (character: character) => {
    setAddCharacter(true);
    setCharacterName(character.title);
    setCharacterDescription(character.body);
    setCharacterImage(character.image);
    window.scrollTo(0, 0);
    setUpdate(character._id);
  };

  useEffect(() => {
    axios
      .get("https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=60")
      .then((response) => setCharacter(response.data));
  }, []);

  return (
    <div className="mainContainer">
      <h2 className="title">Listado de personajes</h2>
      {/* searchBar */}
      <div className="searchBar">
        <input placeholder="Buscar" />
        <button id="searchButton" onClick={() => setAddCharacter(true)}>
          <AiOutlinePlus /> Nuevo
        </button>
      </div>

      {/* Add or eddit component */}
      {addCharacter && (
        <div className="container">
          <h2 className="title">Nuevo personaje</h2>

          <label>Nombre:</label>
          <input
            type="text"
            value={characterName}
            onChange={(e) => setCharacterName(e.target.value)}
          />

          <label>Descripción:</label>
          <textarea
            cols={38}
            rows={3}
            value={characterDescription}
            onChange={(e) => setCharacterDescription(e.target.value)}
          />

          <label>Imagen:</label>
          <input
            type="text"
            placeholder="URL"
            value={characterImage}
            onChange={(e) => setCharacterImage(e.target.value)}
          />

          <div className="options">
            {update === "" ? (
              <button id="searchButton" onClick={handleAddCharacter}>
                <AiOutlineSave /> Guardar
              </button>
            ) : (
              <button id="searchButton" onClick={handlePut}>
                <AiOutlineSave /> Actualizar
              </button>
            )}

            <button id="searchButton" onClick={() => handleCancel}>
              <MdOutlineCancel /> Cancelar
            </button>
          </div>
        </div>
      )}

      {/* Card */}
      {character.map((character, i) => {
        return (
          <div className="card">
            <img
              className="character-image"
              src={character.image}
              alt="character"
            />
            <h3 className="character-name">{character.title}</h3>
            <div className="options">
              <button
                className="option"
                onClick={() => handleUpdate(character)}
              >
                <AiFillEdit />
              </button>
              <button
                className="option"
                onClick={() => handleDelete(character._id)}
              >
                <AiOutlineDelete />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
