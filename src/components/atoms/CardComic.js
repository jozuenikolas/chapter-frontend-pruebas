import React from 'react'
import styled from 'styled-components'
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import CloseIcon from './CloseIcon';
import SaveIcon from './SaveIcon';

const Wrapper = styled.div`
    border: 2px solid #000;
    box-shadow: 0 6px 6px -6px #000;
    background-color: #fff;
    display: inline-block;
    height: 300px;
    margin: 1vmin;
    overflow: hidden;
    position: relative;
    width: 100%;
    min-width: 300px;
    max-width: 300px;
    cursor: pointer;
`

const Img = styled.img`
    transition: transform .5s ease;
    flex-shrink: 0;
    min-height: 100%;
    min-width: 100%;
    max-height: 100%;
`

const Name = styled.div`
    background-color: #fff;
    border: 2px solid #000;
    margin: 0;
    padding: 3px 10px;
    font-size: 18px;
    bottom: -2px;
    position: absolute;
    right: -6px;
    transform: skew(-15deg);
`
const Equis = styled.div`
    /* position: absolute; */
    z-index: 1111111;
    top: 0;
    right: 0;
    padding: 5px;
    background: white;

`
export const CardComic = (props) => {
    const history = useNavigate();

  return (
    <Wrapper>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>

        <Equis onClick={() => history(`/characters/${props.id}`)}>
            <SaveIcon/>
        </Equis>
        <Equis  onClick={() => props.deleteUser(props.id)}>
            <CloseIcon/>
        </Equis>
        </div>
      
        <Img src={props.src || 'https://yt3.ggpht.com/ytc/AKedOLQzP5zGkiegXkGD0rTerdxX9xx0prV8cSpOya9Pfg=s900-c-k-c0x00ffffff-no-rj'} alt={props.src} />
        <Name>{props.name}</Name>
    </Wrapper>
  )
}

