import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.button`
  color: white;
  cursor: pointer;
  background-color: #4968e4;
  font-size: 0.9em;
  padding: 12px 22px;
  border-radius: 18px;
  border: none;
  font-weight: 500;
`;

const Button = props => {
  return (
    <Wrapper onClick={props.onClick} style={props.style}>
      {props.children}
    </Wrapper>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.element,
    PropTypes.array
  ]),
  style: PropTypes.object,
  onClick: PropTypes.func
};

export default Button;
