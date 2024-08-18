import React from "react";

const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={`bg-ungu text-white py-2 px-4 rounded-md transition-colors duration-300 hover:bg-ungugelap ${className}`}
      onClick={onClick} >
      {children}
    </button>
  );
};

export default Button;
