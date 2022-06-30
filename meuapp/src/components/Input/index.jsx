import React from "react";
import "./index.css";

const Input = ({
  id,
  label,
  type,
  error,
  onBlur,
  placeholder,
  value,
  onChange,
  onSelect,
  selected,
  idError,
}) => {
  return (
    <div className={id}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onBlur={onBlur}
        placeholder={placeholder}
        onChange={ onChange}
        onSelect={onSelect}
        selected={selected}
        />
        {error && <p id={idError}>{error}</p>}
    </div>
  );
};

export default Input;
