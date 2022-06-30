import React from "react";
import "./index.css";

const Checkbox = ({ options, value, setValue, error, idError}) => {
  function handleChange({ target }) {
    if (target.checked) {
      setValue([...value, target.value]);
    } else {
      setValue(value.filter((cor) => cor !== target.value));
    }
  }

  return (
    <div className="modal-checkbox">
      {options.map((option) => (
        <div className="custum-checkbox">
          <input type="checkbox" value={option} onChange={handleChange} />
          <label id="checkbox-label" key={option}>
            {option}
          </label>
        </div>
      ))}
      {error && <p id={idError}>{error}</p>}
    </div>
  );
};

export default Checkbox;
