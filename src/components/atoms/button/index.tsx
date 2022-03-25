import React from "react";
import Typography from "../typography";
export interface ButtonProps {
  text: string;
  variant: string;
  icon: string;
  handleClick: () => void;
}

const Button: React.SFC<ButtonProps> = (props) => {
  const { text, variant, icon, handleClick } = props;
  return (
    <button onClick={handleClick}>
      {text !== "" ? (
        <>
          <pichincha-icon
            size="24px"
            color={variant ? "darkGrey" : "info"}
            weight_color={variant ? "300" : "500"}
            class=""
          >
            {icon}
          </pichincha-icon>
          <Typography variant={variant}>{text}</Typography>
        </>
      ) : (
        <pichincha-icon
          size="24px"
          color={variant ? "darkGrey" : "info"}
          weight_color={variant ? "300" : "500"}
          class=""
        >
          {icon}
        </pichincha-icon>
      )}
    </button>
  );
};

export default Button;
