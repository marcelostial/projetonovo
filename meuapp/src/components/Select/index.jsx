import React from "react";
import { useRef } from "react";

const Select= ({
    onSelect,
    label,
    id,
  }) => {
    const ref = useRef();
  return (
    <div className={id}>
       <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        ref={ref}
        placeholder="yyyy/mm/dd"
        onSelect={onSelect}
        onChange={(e) => console.log(e.target.value)}
        onFocus={() => (ref.current.type = "date")}
        onBlur={() => (ref.current.type = "text")}
      />
    </div>
  );
};

export default Select;
