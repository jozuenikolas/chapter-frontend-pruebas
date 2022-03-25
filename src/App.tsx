import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
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
  const [search, setSearch] = useState<string>();
  const [character, setCharacter] = useState<character[]>([]);
  const [addCharacter, setAddCharacter] = useState<boolean>(false);

  const handleSearch = () => {};

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
        <button id="searchButton">
          <AiOutlinePlus /> Nuevo
        </button>
      </div>

      {/* Add or eddit component */}
      <div className="container">
        <h2 className="title">Nuevo personaje</h2>
        <label>Nombre:</label>
        <input type="text" />
        <label>Descripción:</label>
        {/* <input type="text" aria-multiline={true} placeholder="Descripción" /> */}
        <textarea cols={38} rows={3}></textarea>
        <label>Imagen:</label>
        <input type="text" placeholder="URL" />
        <div className="options">
          <button id="searchButton">
            <AiOutlineSave /> Guardar
          </button>
          <button id="searchButton">
            <MdOutlineCancel /> Cancelar
          </button>
        </div>
      </div>

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
              <button className="option">
                <AiFillEdit />
              </button>
              <button className="option">
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
