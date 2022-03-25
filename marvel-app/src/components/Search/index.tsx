import React, { Component } from "react";

import { connect, ConnectedProps } from "react-redux";
import actions from "../../actions/";
import actionTypes from "../../actions/actionTypes";
import { ReduxState } from "../../common/store";

export class Search extends Component<ReduxProps> {
  constructor(props: ReduxProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: React.FormEvent<HTMLInputElement>) {
    const newValue = e.currentTarget.value;
    this.props.updateInput(actionTypes.UPDATE_SEARCH_CRITERIA, newValue);
  }

  render() {
    return (
      <div className="search">
        <input type="text" placeholder="Buscar" onChange={this.handleChange} />
      </div>
    );
  }
}

const mapStateToProps = (state: ReduxState) => {
  const { marvel } = state;
  const { showForm } = marvel;
  return {
    showForm,
  };
};

const { updateInput } = actions;

const connector = connect(mapStateToProps, {
  updateInput,
});

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(Search);
