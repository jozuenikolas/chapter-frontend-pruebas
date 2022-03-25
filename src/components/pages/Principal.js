import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getCharacters, getAuthor, deleteUser } from "../../endpoints";
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
  const [characters, setCharacters] = useState([]);
  const [user, setUser] = useState("");
  const [active, setActive] = useState(false);
  const [id, setId] = useState("");
  const [index, setIndex] = useState();

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
      console.log("userGit", userGit);
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
      setActive(!active)
    } catch (e) {
      console.warn(e);
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
      </div>
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
      <Modal active={active} deleteUser={deleteComic} />
    </BasicLayout>
  );
};
