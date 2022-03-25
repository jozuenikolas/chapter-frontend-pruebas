import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import {
  getCharacters,
  getAuthor,
  deleteUser,
  createUser,
} from "../../endpoints";
import Button from "../atoms/Button";
import { CardComic } from "../atoms/CardComic";
import Input from "../atoms/Input";
import Modal from "../atoms/Modal";
import BasicLayout from "../templates/BasicLayout";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  padding: 1vmin;
`;
export const Principal = () => {
  const history = useNavigate();

  const [characters, setCharacters] = useState([]);
  const [user, setUser] = useState("");
  const [active, setActive] = useState(false);
  const [create, setCreate] = useState(false);
  const [id, setId] = useState("");
  const [index, setIndex] = useState();

  const [name, setName] = useState();
  const [descriptions, setDescription] = useState();
  const [url, setUrl] = useState();

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      const response = await getCharacters();
      setCharacters(response.data);
    } catch (e) {
      console.log("error", e);
    }
  };
  const onChangeUser = (e) => setUser(e);

  const getUsers = async () => {
    try {
      const userGit = await getAuthor(user);
      setCharacters(userGit.data);
      //   setLoading(false);
    } catch (e) {
      console.warn(e);
    }
  };

  const handleInputKeyPress = async (e) => {
    if (e.key === "Enter" && user !== "") {
      setCharacters([]);
      await getUsers();
    }
  };

  const handleRemove = (removeIndex) => {
    setCharacters((oldArray) => {
      return oldArray.filter((value, i) => i !== removeIndex);
    });
  };
  const deleteComic = async () => {
    try {
      const response = await deleteUser(id);
      handleRemove(index);
      setActive(!active);
    } catch (e) {
      console.warn(e);
    }
  };
  const createUsers = async () => {
    try {
      const data = {
        title: name,
        body: descriptions,
        image: url,
        category: "main",
        idAuthor: "5",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      const response = await createUser(data);
      characters.push(data);
      setCharacters([...characters]);

      setCreate(false);
    } catch (e) {
      console.log("err", e);
    }
  };

  return (
    <BasicLayout>
      <div style={{ display: "flex", padding: "20px", alignItems: "center" }}>
        <Input
          defaultValue={user}
          placeholder="Busca tu personaje ..."
          onChange={(e) => onChangeUser(e)}
          onKeyPress={(e) => handleInputKeyPress(e)}
        />
        <Button onClick={() => getUsers()} style={{ marginLeft: "30px" }}>
          Buscar
        </Button>
        <Button onClick={() => setCreate(true)}>Crear</Button>
      </div>
      {!create ? (
        <Wrapper>
          {characters.map((char, i) => (
            <CardComic
              src={char.image}
              name={char.title}
              key={i}
              id={char._id}
              deleteUser={() => {
                setId(char._id);
                setActive(!active);
                setIndex(i);
              }}
            />
          ))}
        </Wrapper>
      ) : (
        <Wrapper>
          <Input placeholder="Nombre" onChange={(e) => setName(e)} />
          <Input
            placeholder="Descripción"
            onChange={(e) => setDescription(e)}
          />
          <Input placeholder="Imagen URL" onChange={(e) => setUrl(e)} />
          <Button onClick={() => createUsers()}>Guardar</Button>
        </Wrapper>
      )}

      <Modal
        active={active}
        deleteUser={deleteComic}
        handleOpen={() => setActive(!active)}
      />
    </BasicLayout>
  );
};
