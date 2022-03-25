import React from "react";
import "./index.scss";

export interface TypographyProps {
  variant: string;
  children: string;
}

const Typography: React.SFC<TypographyProps> = (props) => {
  const { children, variant } = props;
  return <span className={variant}>{children}</span>;
};

export default Typography;
