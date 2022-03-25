import React, { Component } from "react";

import { connect, ConnectedProps } from "react-redux";
import { ReduxState } from "../../common/store";
import actions from "../../actions/";

import Button from "../Button";

interface CharacterCardProps {
  name: string;
  url: string;
  id: string;
}

export class CharacterCard extends Component<ReduxProps> {
  constructor(props: ReduxProps) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete() {
    this.props.deleteCharacter(this.props.id);
  }

  render() {
    const { name, url } = this.props;

    return (
      <div className="character-card">
        <img src={url} alt={url} />
        <h3 className="name">{name}</h3>
        <div className="controls">
          <Button text="Editar" color="primary" onClick={() => {}} icon="" />
          <Button
            text="Eliminar"
            color="primary"
            onClick={this.onDelete}
            icon=""
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (
  state: ReduxState,
  componentProps: CharacterCardProps
) => {
  const { marvel } = state;
  const { name, url, id } = componentProps;
  return {
    marvel,
    name,
    url,
    id,
  };
};

const { deleteCharacter } = actions;

const connector = connect(mapStateToProps, {
  deleteCharacter,
});

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(CharacterCard);
