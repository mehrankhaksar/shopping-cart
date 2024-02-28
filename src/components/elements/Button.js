import React from "react";

const Button = ({ styles, type = "button", onClick, children }) => {
  return (
    <button
      className={`transition-colors ${styles}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
