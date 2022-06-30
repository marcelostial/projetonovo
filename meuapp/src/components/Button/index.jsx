import React from "react";
import "./index.css";

const Button = ({ id, text, ...props}) => {
  return (
    <>
      <button id={id} {...props}>{text}</button>
    </>
  );
};

export default Button;
