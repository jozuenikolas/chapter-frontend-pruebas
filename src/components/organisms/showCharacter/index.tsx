import React from "react";
import Typography from "../../atoms/typography";
import DoubleButton from "../../molecules/doubleButton";
import "./index.scss";

export interface ShowCharacterProps {
  characterName: string;
  characterImg: string;
  handleClickEdit: () => void;
  handleClickDelete: () => void;
}

const ShowCharacter: React.SFC<ShowCharacterProps> = (props) => {
  const { characterName, characterImg, handleClickEdit, handleClickDelete } =
    props;
  return (
    <div className="showCharacter">
      <img className="showCharacter__img" src={characterImg} />
      <div className="showCharacter__infoBlock">
        <div className="showCharacter__infoBlock__title">
          <Typography variant="typography--title">{characterName}</Typography>
        </div>
        <DoubleButton
          variant="button--white"
          text1=""
          text2=""
          icon1="edit"
          icon2="delete"
          handleClick1={handleClickEdit}
          handleClick2={handleClickDelete}
        ></DoubleButton>
      </div>
    </div>
  );
};

export default ShowCharacter;
