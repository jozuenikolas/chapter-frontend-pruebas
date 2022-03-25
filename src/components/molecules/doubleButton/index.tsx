import React from "react";
import Button from "../../atoms/button";
import "./index.scss";

export interface DoubleButtonProps {
  variant: string;
  text1: string;
  text2: string;
  icon1: string;
  icon2: string;
  handleClick1: () => void;
  handleClick2: () => void;
}

const DoubleButton: React.SFC<DoubleButtonProps> = (props) => {
  const { variant, text1, text2, icon1, icon2, handleClick1, handleClick2 } =
    props;
  return (
    <div className="doubleButton">
      <Button text={text1} variant={variant} icon={icon1} handleClick={handleClick1}></Button>
      <Button text={text2} variant={variant} icon={icon2} handleClick={handleClick2}></Button>
    </div>
  );
};

export default DoubleButton;
