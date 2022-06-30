import React from "react";
import Button from "../../components/Button";
import Logo from "../../assents/logoInternSingUp.png";
import "./index.css";
import { Link } from 'react-router-dom'

const Sucess = () => {


  return (
    <div className="main">
      <div className="content-sucess">
        <img draggable="false" src={Logo} alt="logo"></img>
        <h1>Sucess!</h1>
        <div id="button-modal">
        <Link to={'/'}>
        <Button id="sucess" text="Go Back!" />
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Sucess;
