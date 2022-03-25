import React from "react";
import Typography from "../typography";
export interface InputProps {
  type: string;
  placeholder?: string;
  label?: string;
  value: string;
  handleChange: (e: any) => void;
}
const Input: React.SFC<InputProps> = (props) => {
  const { type, placeholder, label, value, handleChange } = props;
  return label !== "" && (
      <Typography variant="typography--label">{label as string}</Typography>
    ) &&
    type === "text" ? (
    <input placeholder={placeholder} value={value} onChange={handleChange} />
  ) : (
    <textarea placeholder={placeholder} onChange={handleChange}>{value}</textarea>
  );
};

export default Input;
