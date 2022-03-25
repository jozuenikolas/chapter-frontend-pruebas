import React, { Component } from "react";

import { connect, ConnectedProps } from "react-redux";
import actions from "../../actions/";
import { ReduxState } from "../../common/store";

import CharacterCard from "../CharacterCard";

export class CharactersList extends Component<ReduxProps> {
  componentDidMount() {
    this.props.getCharacters();
  }

  render() {
    const { filteredCharacters, loading, failed } = this.props;

    if (loading) {
      return "Cargando personajes...";
    }

    if (failed) {
      return "Error al cargar personajes";
    }

    return (
      <div className="characters">
        {filteredCharacters.map((character, index) => (
          <div key={index}>
            <CharacterCard
              url={character.image}
              name={character.title}
              id={character._id}
            />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state: ReduxState) => {
  const { marvel } = state;
  const { characters, loading, failed, filteredCharacters } = marvel;
  return {
    characters,
    loading,
    failed,
    filteredCharacters,
  };
};

const { getCharacters } = actions;

const connector = connect(mapStateToProps, {
  getCharacters,
});

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(CharactersList);
