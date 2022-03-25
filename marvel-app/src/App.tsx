import React, { Component } from "react";
import "./App.scss";

import { connect, ConnectedProps } from "react-redux";
import actions from "./actions/";
import { ReduxState } from "./common/store";

import Search from "./components/Search";
import Button from "./components/Button";
import Form from "./components/Form";
import CharactersList from "./components/CharactersList";

export class App extends Component<ReduxProps> {
  constructor(props: ReduxProps) {
    super(props);
    this.onClickNew = this.onClickNew.bind(this);
  }

  onClickNew () {
    this.props.toggleFormVisibility(true);
  }

  render() {
    return (
      <div className="main-container">
        <h1 className="title">Listado de personajes</h1>
        <div className="search-add">
          <Search />
          <Button
            text="Nuevo"
            color="danger"
            onClick={this.onClickNew}
            icon="add-icon"
          />
        </div>
        <Form />
        <CharactersList />
      </div>
    );
  }
}

const mapStateToProps = (state: ReduxState) => {
  return {};
};

const { toggleFormVisibility } = actions;

const connector = connect(mapStateToProps, {
  toggleFormVisibility,
});

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(App);
