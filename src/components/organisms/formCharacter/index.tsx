import React from "react";
import Typography from "../../atoms/typography";
import Input from "../../atoms/input";
import DoubleButton from "../../molecules/doubleButton";
import "./index.scss";

export interface FormCharacterProps {
  title: string;
  ValueName: string;
  ValueDesc: string;
  ValueImg: string;
  handleChangeName: (e: any) => void;
  handleChangeDesc: (e: any) => void;
  handleChangeImg: (e: any) => void;
  handleClickSave: () => void;
  handleClickCancel: () => void;
}

const FormCharacter: React.SFC<FormCharacterProps> = (props) => {
  const {
    title,
    ValueName,
    ValueDesc,
    ValueImg,
    handleChangeName,
    handleChangeDesc,
    handleChangeImg,
    handleClickSave,
    handleClickCancel,
  } = props;

  return (
    <div className="formCharacter">
      <div className="formCharacter__title">
        <Typography variant="typography--title">{title}</Typography>
      </div>
      <Input
        type="text"
        placeholder="Nombre"
        label="Nombre"
        value={ValueName}
        handleChange={handleChangeName}
      />
      <Input
        type="textarea"
        placeholder="Descripción"
        label="Descripción"
        value={ValueDesc}
        handleChange={handleChangeDesc}
      />
      <Input
        type="text"
        placeholder="URL"
        label="Imagen"
        value={ValueImg}
        handleChange={handleChangeImg}
      />
      <DoubleButton
        variant="button--red"
        text1="Guardar"
        icon1="save"
        text2="Cancelar"
        icon2="close"
        handleClick1={handleClickSave}
        handleClick2={handleClickCancel}
      />
    </div>
  );
};

export default FormCharacter;
