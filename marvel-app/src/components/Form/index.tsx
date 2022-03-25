import React, { Component } from "react";
import { connect, ConnectedProps } from "react-redux";
import actions from "../../actions/";
import actionTypes from "../../actions/actionTypes";
import { ReduxState } from "../../common/store";

import Button from "../Button";

export class Form extends Component<ReduxProps> {
  constructor(props: ReduxProps) {
    super(props);
    this.onCancel = this.onCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  handleChange(e: any) {
    const { value, id } = e.currentTarget;

    const actionTypesMap: { [key: string]: any } = {
      name: actionTypes.UPDATE_CHARACTER_NAME,
      description: actionTypes.UPDATE_CHARACTER_DESCRIPTION,
      url: actionTypes.UPDATE_CHARACTER_URL,
    };

    this.props.updateInput(actionTypesMap[id], value);
  }

  onSave() {
    const { character, createCharacter } = this.props;
    const { nameStatus, descriptionStatus, urlStatus, name, description, url } =
      character;

    if ([nameStatus, descriptionStatus, urlStatus].includes("error")) {
      return;
    }

    const currentDatetime = new Date().toISOString();

    const payload = {
      title: name,
      body: description,
      image: url,
      category: "main",
      createdAt: currentDatetime,
      updatedAt: currentDatetime,
    };

    createCharacter(payload);
  }

  onCancel() {
    this.props.toggleFormVisibility(false);
  }

  render() {
    const { showForm, character } = this.props;
    const { nameStatus, descriptionStatus, urlStatus } = character;

    if (!showForm) {
      return null;
    }

    return (
      <div className="form">
        <h1 className="title">Nuevo Personaje</h1>
        <div className="input-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            placeholder="Nombre"
            id="name"
            className={nameStatus}
            onChange={this.handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="description">Descripción</label>
          <textarea
            placeholder="Descripción"
            id="description"
            className={descriptionStatus}
            onChange={this.handleChange}
          ></textarea>
        </div>
        <div className="input-group">
          <label htmlFor="url">URL</label>
          <input
            type="text"
            placeholder="URL"
            id="url"
            className={urlStatus}
            onChange={this.handleChange}
          />
        </div>
        <div className="controls">
          <Button text="Guardar" color="danger" onClick={this.onSave} icon="" />
          <Button
            text="Cancelar"
            color="danger"
            onClick={this.onCancel}
            icon=""
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: ReduxState) => {
  const { marvel } = state;
  const { showForm, character } = marvel;
  return {
    showForm,
    character,
  };
};

const { toggleFormVisibility, updateInput, createCharacter } = actions;

const connector = connect(mapStateToProps, {
  toggleFormVisibility,
  updateInput,
  createCharacter,
});

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(Form);
