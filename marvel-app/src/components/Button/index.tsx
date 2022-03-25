import React, { Component } from "react";

interface ButtonProps {
  text?: string;
  icon: string;
  color: string;
  onClick: any;
}

export class index extends Component<ButtonProps> {
  render() {
    return (
      <button className={`${this.props.color} ${this.props.icon}`} onClick={this.props.onClick}>
        {this.props.text}
      </button>
    );
  }
}

export default index;
