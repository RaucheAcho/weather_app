import React from "react";

const FormInput = ({ handleChange, label, ...props }) => (
  <div className="flex flex-col w-full">
    {label ? (
      <label className={props.value.length ? "w-auto" : ""}>{label}</label>
    ) : null}
    <input onChange={handleChange} {...props} />
  </div>
);

export default FormInput;
