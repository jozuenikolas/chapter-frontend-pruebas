import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Svg = styled.svg`
  vertical-align: middle;
  margin: 0 0;
`;

const Icon = props => {
  const { color, size } = props;
  return (
    <Svg fill={color} height={size} width={size} viewBox="0 0 32 32">
      {props.children}
    </Svg>
  );
};

Icon.defaultProps = {
  color: "#4a4a4a",
  size: 24
};

Icon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired
};

export default Icon;
