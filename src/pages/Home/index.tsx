import React, { useState, useEffect } from "react";
import ShowCharacter from "../../components/organisms/showCharacter";
import SearchBar from "../../components/molecules/searchBar";
import axios from "axios";
import "./index.scss";
import FormCharacter from "../../components/organisms/formCharacter";

export interface HomeProps {}

const Home: React.SFC<HomeProps> = (props) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [searchCharacter, setSearchCharacter] = useState("");
  const [characters, setCharacters] = useState([]);
  const [screenCharacters, setScreenCharacters] = useState([]);
  const [formMode, setFormMode] = useState("");
  const [valueName, setValueName] = useState("");
  const [valueDesc, setValueDesc] = useState("");
  const [valueImg, setValueImg] = useState("");

  const handleClickEdit = () => {
    console.log("openEdit");
  };

  const handleClickDelete = () => {
    console.log("Delete");
  };
  const handleClickSave = () => {
    const data = {
      title: valueName,
      body: valueDesc,
      image: valueImg,
      category: "main",
      createdAt: "2022-03-03T01:37:01.828Z",
      updatedAt: "2022-03-03T01:37:01.828Z",
    };
    axios
      .post(
        `https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=2`,
        data
      )
      .then((response: any) => {
        const { errors } = response;
        if (errors) {
          console.error("Error trying to add.");
        } else {
          console.log("Character added.");
        }
      })
      .catch(() => {});
  };
  const handleSearchCharacter = () => {
    const newCharacters = characters.filter((character: any) =>
      character.title.toUpperCase().includes(searchCharacter.toUpperCase())
    );
    setScreenCharacters(newCharacters);
  };

  useEffect(() => {
    axios
      .get(`https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=2`)
      .then((response) => {
        const { status, data } = response;
        if (status !== 200) {
          setErrorMessage("Error getting information.");
        } else {
          console.log("Characters loaded");
          setCharacters(data);
          setScreenCharacters(data);
        }
      })
      .catch(() => {
        setErrorMessage("Error getting information.");
      });

    return () => {};
  }, []);
  if (errorMessage !== "") {
    return (
      <div>
        <h1>Lo sentimos, ocurrió un error.</h1>
      </div>
    );
  }
  return (
    <div className="Home">
      <SearchBar
        value={searchCharacter}
        handleChange={(event) => {
          setSearchCharacter(event.target.value);
          handleSearchCharacter();
        }}
        handleClick={() => setFormMode("nuevo")}
      ></SearchBar>
      {screenCharacters && formMode !== "" && (
        <FormCharacter
          title={
            formMode === "edit" ? "Edición de personaje" : "Nuevo personaje"
          }
          ValueName={valueName}
          ValueDesc={valueDesc}
          ValueImg={valueImg}
          handleChangeName={(event) => {
            setValueName(event.target.value);
          }}
          handleChangeDesc={(event) => {
            setValueDesc(event.target.value);
          }}
          handleChangeImg={(event) => {
            setValueImg(event.target.value);
          }}
          handleClickSave={handleClickSave}
          handleClickCancel={() => setFormMode("")}
        />
      )}
      {screenCharacters &&
        screenCharacters.map((val: any, i) => (
          <ShowCharacter
            key={i}
            characterName={val.title}
            characterImg={val.image}
            handleClickEdit={handleClickEdit}
            handleClickDelete={handleClickDelete}
          ></ShowCharacter>
        ))}
    </div>
  );
};

export default Home;
