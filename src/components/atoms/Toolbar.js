import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Logo from "../../assets/marvel.svg";
import { useNavigate } from "react-router-dom";


const Wrapper = styled.div`
    height: 64px;
    padding: 5px 50px;
    color: rgba(0,0,0,.85);
    line-height: 64px;
    background-color: #202020; 
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Toolbar = props => {
    const history = useNavigate()
  return (
    <Wrapper
      hidden={props.hidden}
      backgroundColor={props.backgroundColor}
      withShadow={props.withShadow}
    >
     <img src={Logo} onClick={() => history.push(`/`)}/>
    </Wrapper>
  );
};

Toolbar.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  activeIcon: PropTypes.element,
  onTapTitle: PropTypes.func,
  children: PropTypes.element,
  hidden: PropTypes.bool,
  backgroundColor: PropTypes.string,
  continueLayout: PropTypes.bool,
  withShadow: PropTypes.bool
};

Toolbar.defaultProps = {
  title: "Marvel"
};
export default Toolbar;
