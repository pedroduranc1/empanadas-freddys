import React from "react";

const Input = ({type,name,placeholder}) => {
  return (
    <>
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={name}
      >
        {name}
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id={name}
        name={name}
        type={type}
        placeholder={placeholder ? placeholder : name}
      />
    </>
  );
};

export default Input;
