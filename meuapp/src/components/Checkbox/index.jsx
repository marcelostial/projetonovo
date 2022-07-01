import React from "react";
import "./index.css";

const Checkbox = ({ value, onChange, error, idError}) => {
  return (
    <div className="modal-checkbox">
        <div className="custum-checkbox">
          <input type="checkbox" value={value} onChange={onChange} />
          <label id="checkbox-label" key={value}>
            {value}
          </label>
        </div>
      <p idError={idError}>{error}</p>
    </div>
  );
};

export default Checkbox;
