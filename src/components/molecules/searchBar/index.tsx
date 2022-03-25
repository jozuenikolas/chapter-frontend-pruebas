import React from "react";
import Typography from "../../atoms/typography";
import Input from "../../atoms/input";
import Button from "../../atoms/button";

export interface SearchBarProps {
  value: string;
  handleChange: (e: any) => void;
  handleClick: () => void;
}

const SearchBar: React.SFC<SearchBarProps> = (props) => {
  const { value, handleChange, handleClick } = props;
  return (
    <div className="searchBar">
      <div className="searchBar__title">
        <Typography variant="typography--title">
          Listado de personajes
        </Typography>
      </div>
      <div className="searchBar__searchBox">
        <Input
          type="text"
          placeholder="Buscar"
          value={value}
          handleChange={handleChange}
        />
        <Button
          variant="button--red"
          icon="plus"
          text="Nuevo"
          handleClick={handleClick}
        />
      </div>
    </div>
  );
};

export default SearchBar;
