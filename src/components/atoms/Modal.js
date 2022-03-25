import React from "react";
import styled from "styled-components";
import FadeAnimation from "../atoms/FadeAnimation";
import Button from "./Button";
import CloseIcon from "./CloseIcon";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(74, 74, 74, 0.6);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 200000000000;
  opacity: ${(props) => (props.active ? 1 : 0)};
  z-index: ${(props) => (props.active ? 200000000000 : -1)};
  animation: ${FadeAnimation} 0.5 ease-in;

  .box {
    max-height: calc(85vh);
    background: rgb(255, 255, 255);
    border-radius: 8px;
    width: 432px;
  }
  .header {
    height: 56px;
    box-shadow: ${(props) =>
      !props.shadow && "0px 8px 8px -8px rgba(7, 7, 7, 0.16)"};
    border-radius: 8px 8px 0px 0px;
    position: relative;
    &--close {
      cursor: pointer;
      position: absolute;
      right: 24px;
      top: 16px;
    }
  }
  .body {
    margin: 16px 32px;
  }
  .margin-24 {
    margin: 16px 64px;
  }
  @media (max-width: 576px) {
    align-items: flex-end;
    .box {
      border-radius: 16px 16px 0px 0px;
    }
    .body {
      margin: 16px 20px;
    }
  }
`;

const Modal = (props) => {
  return (
    <Wrapper active={props.active} shadow={props.shadow}>
      <div className="box">
        {!props.header && (
          <div className="header">
            <div className="header--close" onClick={props.handleOpen}>
              <CloseIcon />
            </div>
          </div>
        )}
        <div
          style={{ display: "flex", justifyContent: "center", padding: "10px" }}
        >
          <Button onClick={props.deleteUser}>Borrar</Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Modal;
