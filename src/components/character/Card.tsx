import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./Card.css";
import axios from "axios";
import { characterCard } from "../../interfaces/characterInterface";

function Card(props: characterCard) {
  return (
    <div className="card">
      <img className="character-image" src={props.image} alt="character" />
    </div>
  );
}

export default Card;
